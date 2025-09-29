// MySQL Database Connection for OdiAR (ESM)
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'odiar_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

// Artifacts CRUD operations
const ArtifactModel = {
  // Get all artifacts
  async getAll() {
    try {
      const [rows] = await pool.execute(`
        SELECT a.*, 
               GROUP_CONCAT(
                 CONCAT(at.texture_type, ':', at.texture_url) 
                 SEPARATOR '|'
               ) as textures
        FROM artifacts a
        LEFT JOIN artifact_textures at ON a.id = at.artifact_id
        GROUP BY a.id
        ORDER BY a.created_at DESC
      `);
      return rows;
    } catch (error) {
      console.error('Error fetching artifacts:', error);
      throw error;
    }
  },

  // Get artifact by ID with hotspots
  async getById(id) {
    try {
      const [artifact] = await pool.execute(
        'SELECT * FROM artifacts WHERE id = ?',
        [id]
      );

      if (artifact.length === 0) {
        return null;
      }

      // Get textures
      const [textures] = await pool.execute(
        'SELECT * FROM artifact_textures WHERE artifact_id = ?',
        [id]
      );

      // Get hotspots
      const [hotspots] = await pool.execute(
        'SELECT * FROM artifact_hotspots WHERE artifact_id = ? ORDER BY id',
        [id]
      );

      return {
        ...artifact[0],
        textures,
        hotspots
      };
    } catch (error) {
      console.error('Error fetching artifact:', error);
      throw error;
    }
  },

  // Create new artifact
  async create(artifactData) {
    try {
      const {
        id, name, model_url, thumbnail_url, polygons_count,
        scale_x, scale_y, scale_z, rotation_x, rotation_y, rotation_z,
        attribution, related_poi_id
      } = artifactData;

      await pool.execute(`
        INSERT INTO artifacts (
          id, name, model_url, thumbnail_url, polygons_count,
          scale_x, scale_y, scale_z, rotation_x, rotation_y, rotation_z,
          attribution, related_poi_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        id, name, model_url, thumbnail_url, polygons_count,
        scale_x, scale_y, scale_z, rotation_x, rotation_y, rotation_z,
        attribution, related_poi_id
      ]);

      return { id, ...artifactData };
    } catch (error) {
      console.error('Error creating artifact:', error);
      throw error;
    }
  }
};

// POIs CRUD operations
const POIModel = {
  // Get all POIs with optional category filter
  async getAll(category = null) {
    try {
      let query = 'SELECT * FROM pois ORDER BY name';
      let params = [];

      if (category) {
        query = 'SELECT * FROM pois WHERE category = ? ORDER BY name';
        params = [category];
      }

      const [rows] = await pool.execute(query, params);
      return rows;
    } catch (error) {
      console.error('Error fetching POIs:', error);
      throw error;
    }
  },

  // Get POI by ID
  async getById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM pois WHERE id = ?',
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error fetching POI:', error);
      throw error;
    }
  }
};

// Legends CRUD operations
const LegendModel = {
  // Get all legends
  async getAll() {
    try {
      const [rows] = await pool.execute(`
        SELECT l.*, p.name as poi_name 
        FROM legends l
        LEFT JOIN pois p ON l.related_poi_id = p.id
        ORDER BY l.title
      `);
      return rows;
    } catch (error) {
      console.error('Error fetching legends:', error);
      throw error;
    }
  },

  // Get legend by ID
  async getById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM legends WHERE id = ?',
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error fetching legend:', error);
      throw error;
    }
  }
};

// Phrases CRUD operations
const PhraseModel = {
  // Get phrases by category
  async getByCategory(category) {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM phrases WHERE category = ? ORDER BY id',
        [category]
      );
      return rows;
    } catch (error) {
      console.error('Error fetching phrases:', error);
      throw error;
    }
  },

  // Get all phrases
  async getAll() {
    try {
      const [rows] = await pool.execute(
        'SELECT * FROM phrases ORDER BY category, id'
      );
      return rows;
    } catch (error) {
      console.error('Error fetching phrases:', error);
      throw error;
    }
  }
};

// User interactions tracking
const InteractionModel = {
  // Track user interaction
  async track(interactionData) {
    try {
      const {
        session_id, interaction_type, content_id, device_info
      } = interactionData;

      await pool.execute(`
        INSERT INTO user_interactions (session_id, interaction_type, content_id, device_info)
        VALUES (?, ?, ?, ?)
      `, [session_id, interaction_type, content_id, JSON.stringify(device_info)]);

      return true;
    } catch (error) {
      console.error('Error tracking interaction:', error);
      throw error;
    }
  }
};

export { pool, testConnection, ArtifactModel, POIModel, LegendModel, PhraseModel, InteractionModel }
