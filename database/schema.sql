-- OdiAR MySQL Database Schema
-- Odisha Heritage App Database Structure

CREATE DATABASE IF NOT EXISTS odiar_db;
USE odiar_db;

-- Artifacts table for 3D models and AR content
CREATE TABLE artifacts (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    model_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    polygons_count INT DEFAULT 0,
    scale_x DECIMAL(5,2) DEFAULT 1.0,
    scale_y DECIMAL(5,2) DEFAULT 1.0,
    scale_z DECIMAL(5,2) DEFAULT 1.0,
    rotation_x DECIMAL(5,2) DEFAULT 0,
    rotation_y DECIMAL(5,2) DEFAULT 0,
    rotation_z DECIMAL(5,2) DEFAULT 0,
    attribution TEXT,
    related_poi_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_related_poi (related_poi_id)
);

-- Artifact textures table
CREATE TABLE artifact_textures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id VARCHAR(50) NOT NULL,
    texture_type ENUM('baseColor', 'normal', 'roughness', 'metallic', 'emissive') NOT NULL,
    texture_url VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artifact_id) REFERENCES artifacts(id) ON DELETE CASCADE,
    INDEX idx_artifact_textures (artifact_id)
);

-- Hotspots for AR interactions
CREATE TABLE artifact_hotspots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id VARCHAR(50) NOT NULL,
    hotspot_id VARCHAR(20) NOT NULL,
    position_x DECIMAL(8,3) NOT NULL,
    position_y DECIMAL(8,3) NOT NULL,
    position_z DECIMAL(8,3) NOT NULL,
    normal_x DECIMAL(8,3) DEFAULT 0,
    normal_y DECIMAL(8,3) DEFAULT 1,
    normal_z DECIMAL(8,3) DEFAULT 0,
    title VARCHAR(255) NOT NULL,
    info_text_id VARCHAR(50),
    audio_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artifact_id) REFERENCES artifacts(id) ON DELETE CASCADE,
    UNIQUE KEY unique_hotspot (artifact_id, hotspot_id),
    INDEX idx_artifact_hotspots (artifact_id)
);

-- Points of Interest (POIs) for maps
CREATE TABLE pois (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    category ENUM('temple', 'beach', 'park', 'museum', 'monument', 'festival') NOT NULL,
    image_url VARCHAR(500),
    short_description TEXT,
    full_description TEXT,
    address TEXT,
    opening_hours VARCHAR(255),
    ticket_domestic DECIMAL(10,2),
    ticket_foreign DECIMAL(10,2),
    website_url VARCHAR(500),
    related_legend_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_location (latitude, longitude),
    INDEX idx_related_legend (related_legend_id)
);

-- Legends and folktales
CREATE TABLE legends (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    audio_url VARCHAR(500) NOT NULL,
    transcription TEXT,
    duration_seconds INT,
    cover_image_url VARCHAR(500),
    language ENUM('en', 'odia', 'hindi') DEFAULT 'en',
    related_poi_id VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (related_poi_id) REFERENCES pois(id) ON DELETE SET NULL,
    INDEX idx_related_poi (related_poi_id),
    INDEX idx_language (language)
);

-- Language phrases for Odia learning
CREATE TABLE phrases (
    id VARCHAR(50) PRIMARY KEY,
    odia_script TEXT NOT NULL,
    transliteration VARCHAR(255) NOT NULL,
    translation VARCHAR(255) NOT NULL,
    audio_url VARCHAR(500),
    category ENUM('greetings', 'numbers', 'colors', 'family', 'food', 'directions') NOT NULL,
    difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'easy',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_category (category),
    INDEX idx_difficulty (difficulty)
);

-- Culture content (videos, images)
CREATE TABLE culture_items (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content_type ENUM('image', 'video') NOT NULL,
    media_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    description TEXT,
    tags JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_content_type (content_type)
);

-- Game data for memory games
CREATE TABLE game_memory_cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_id VARCHAR(20) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    pair_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_card (card_id),
    INDEX idx_pair (pair_id)
);

-- Game scores
CREATE TABLE game_scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_type ENUM('memory', 'puzzle', 'quiz') NOT NULL,
    player_name VARCHAR(100),
    score INT NOT NULL,
    time_seconds INT,
    moves INT,
    difficulty ENUM('easy', 'medium', 'hard'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_game_type (game_type),
    INDEX idx_score (score DESC),
    INDEX idx_created (created_at DESC)
);

-- User interactions and analytics
CREATE TABLE user_interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(100),
    interaction_type ENUM('artefact_view', 'hotspot_tap', 'legend_play', 'poi_view', 'phrase_play') NOT NULL,
    content_id VARCHAR(50),
    device_info JSON,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    INDEX idx_interaction_type (interaction_type),
    INDEX idx_content (content_id),
    INDEX idx_timestamp (timestamp)
);

-- Info text content for hotspots
CREATE TABLE info_texts (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255),
    content TEXT NOT NULL,
    language ENUM('en', 'odia', 'hindi') DEFAULT 'en',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_language (language)
);
