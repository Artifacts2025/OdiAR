-- Sample data for OdiAR database
USE odiar_db;

-- Insert sample artifacts
INSERT INTO artifacts (id, name, model_url, thumbnail_url, polygons_count, scale_x, scale_y, scale_z, rotation_x, rotation_y, rotation_z, attribution, related_poi_id) VALUES
('konark-horse', 'Konark Horse', '/models/konark_horse.glb', '/images/konark_horse_thumb.jpg', 85000, 1.0, 1.0, 1.0, 0, 180, 0, 'ASI, Konark Sun Temple', 'poi-konark-sun-temple'),
('jagannath-chariot', 'Jagannath Chariot', '/models/jagannath_chariot.glb', '/images/jagannath_chariot_thumb.jpg', 120000, 1.2, 1.2, 1.2, 0, 0, 0, 'Puri Temple Trust', 'poi-puri-temple'),
('lingaraj-temple', 'Lingaraj Temple Model', '/models/lingaraj_temple.glb', '/images/lingaraj_thumb.jpg', 200000, 0.8, 0.8, 0.8, 0, 45, 0, 'ASI, Bhubaneswar', 'poi-lingaraj-temple');

-- Insert artifact textures
INSERT INTO artifact_textures (artifact_id, texture_type, texture_url) VALUES
('konark-horse', 'baseColor', '/textures/konark_horse_basecolor.png'),
('konark-horse', 'normal', '/textures/konark_horse_normal.png'),
('konark-horse', 'roughness', '/textures/konark_horse_roughness.png'),
('jagannath-chariot', 'baseColor', '/textures/jagannath_chariot_basecolor.png'),
('jagannath-chariot', 'normal', '/textures/jagannath_chariot_normal.png'),
('lingaraj-temple', 'baseColor', '/textures/lingaraj_temple_basecolor.png'),
('lingaraj-temple', 'normal', '/textures/lingaraj_temple_normal.png');

-- Insert hotspots for Konark Horse
INSERT INTO artifact_hotspots (artifact_id, hotspot_id, position_x, position_y, position_z, normal_x, normal_y, normal_z, title, info_text_id, audio_url) VALUES
('konark-horse', 'h1', 0.2, 1.1, -0.3, 0, 1, 0, 'Stone Carving', 'info_kh_carving_01', '/audio/konark_horse_carving.mp3'),
('konark-horse', 'h2', -0.1, 0.9, 0.2, 0, 1, 0, '12th Century Art', 'info_kh_history_12c', '/audio/konark_horse_history.mp3'),
('konark-horse', 'h3', 0.0, 0.5, 0.8, 0, 1, 0, 'Architectural Detail', 'info_kh_arch_01', '/audio/konark_horse_arch.mp3');

-- Insert POIs
INSERT INTO pois (id, name, latitude, longitude, category, image_url, short_description, full_description, address, opening_hours, ticket_domestic, ticket_foreign, website_url, related_legend_id) VALUES
('poi-konark-sun-temple', 'Konark Sun Temple', 19.8876, 86.0945, 'temple', '/images/konark_temple.jpg', '13th-century Sun Temple and UNESCO World Heritage Site', 'The Konark Sun Temple is a 13th-century CE Hindu temple dedicated to the sun god Surya. It is located in Konark, Odisha, India. The temple is attributed to king Narasingha deva I of the Eastern Ganga Dynasty about 1250 CE.', 'Konark, Odisha, India', '6:00 AM - 8:00 PM', 40.00, 600.00, 'https://asi.gov.in/konark', 'legend-surya-chariot'),
('poi-puri-beach', 'Puri Beach', 19.7983, 85.8250, 'beach', '/images/puri_beach.jpg', 'Golden sands and Bay of Bengal shoreline', 'Puri Beach is a popular beach destination in Odisha, known for its golden sands and the annual Puri Beach Festival.', 'Puri, Odisha, India', 'Open 24 hours', 0.00, 0.00, NULL, 'legend-jagannath-sea'),
('poi-puri-temple', 'Jagannath Temple', 19.8135, 85.8312, 'temple', '/images/jagannath_temple.jpg', 'Sacred temple of Lord Jagannath', 'The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu, in Puri, Odisha.', 'Puri, Odisha, India', '5:00 AM - 11:00 PM', 0.00, 0.00, NULL, 'legend-jagannath-rath'),
('poi-lingaraj-temple', 'Lingaraj Temple', 20.2389, 85.8339, 'temple', '/images/lingaraj_temple.jpg', 'Ancient Shiva temple in Bhubaneswar', 'The Lingaraj Temple is a Hindu temple dedicated to Shiva and is one of the oldest temples in Bhubaneswar.', 'Bhubaneswar, Odisha, India', '5:00 AM - 9:00 PM', 0.00, 0.00, NULL, 'legend-lingaraj-shiva');

-- Insert legends
INSERT INTO legends (id, title, audio_url, transcription, duration_seconds, cover_image_url, language, related_poi_id) VALUES
('legend-surya-chariot', 'Chariot of the Sun God', '/audio/surya_chariot.mp3', 'In ancient Odisha, the Sun God Surya was believed to ride across the sky in a magnificent chariot drawn by seven horses. The Konark Sun Temple was built to represent this celestial chariot...', 312, '/images/surya_legend.jpg', 'en', 'poi-konark-sun-temple'),
('legend-jagannath-sea', 'Jagannath and the Sea', '/audio/jagannath_sea.mp3', 'According to legend, Lord Jagannath has a special connection with the sea at Puri...', 245, '/images/jagannath_sea_legend.jpg', 'en', 'poi-puri-beach'),
('legend-jagannath-rath', 'The Great Chariot Festival', '/audio/jagannath_rath.mp3', 'The Ratha Yatra or Chariot Festival is one of the most important festivals in Odisha...', 420, '/images/rath_yatra_legend.jpg', 'en', 'poi-puri-temple'),
('legend-lingaraj-shiva', 'The Lingam of Shiva', '/audio/lingaraj_shiva.mp3', 'The Lingaraj Temple houses a powerful lingam that is said to have appeared naturally...', 380, '/images/lingaraj_legend.jpg', 'en', 'poi-lingaraj-temple');

-- Insert phrases
INSERT INTO phrases (id, odia_script, transliteration, translation, audio_url, category, difficulty) VALUES
('greet-001', 'ନମସ୍କାର', 'Namaskār', 'Hello', '/audio/namaskar.mp3', 'greetings', 'easy'),
('greet-002', 'ଧନ୍ୟବାଦ', 'Dhan'yabād', 'Thank you', '/audio/dhanyabad.mp3', 'greetings', 'easy'),
('greet-003', 'କ୍ଷମା କରନ୍ତୁ', 'Kshamā karantu', 'Excuse me', '/audio/kshama.mp3', 'greetings', 'medium'),
('num-001', 'ଏକ', 'Eka', 'One', '/audio/eka.mp3', 'numbers', 'easy'),
('num-002', 'ଦୁଇ', 'Dui', 'Two', '/audio/dui.mp3', 'numbers', 'easy'),
('num-003', 'ତିନି', 'Tini', 'Three', '/audio/tini.mp3', 'numbers', 'easy'),
('color-001', 'ନୀଳ', 'Nīla', 'Blue', '/audio/nila.mp3', 'colors', 'easy'),
('color-002', 'ଲାଲ', 'Lāla', 'Red', '/audio/lala.mp3', 'colors', 'easy'),
('food-001', 'ଦାହି ବରା', 'Dāhi barā', 'Curd vada', '/audio/dahi_bara.mp3', 'food', 'medium'),
('food-002', 'ଚେନା ପୋଡା', 'Chenā podā', 'Chenna poda', '/audio/chena_poda.mp3', 'food', 'medium');

-- Insert culture items
INSERT INTO culture_items (id, title, content_type, media_url, thumbnail_url, description, tags) VALUES
('odissi-001', 'Odissi Dance Performance', 'video', '/videos/odissi_dance.mp4', '/images/odissi_thumb.jpg', 'Classical Odissi dance performance showcasing traditional movements and expressions', '["odissi", "dance", "classical", "traditional"]'),
('ratha-yatra-001', 'Ratha Yatra Festival', 'video', '/videos/ratha_yatra.mp4', '/images/ratha_yatra_thumb.jpg', 'The grand chariot festival of Lord Jagannath in Puri', '["festival", "jagannath", "ratha", "puri"]'),
('pattachitra-001', 'Pattachitra Art', 'image', '/images/pattachitra_art.jpg', '/images/pattachitra_thumb.jpg', 'Traditional Pattachitra painting depicting mythological scenes', '["art", "pattachitra", "painting", "traditional"]'),
('cuisine-001', 'Odisha Cuisine', 'video', '/videos/odisha_cuisine.mp4', '/images/cuisine_thumb.jpg', 'Traditional Odia dishes and cooking methods', '["cuisine", "food", "traditional", "cooking"]');

-- Insert game memory cards
INSERT INTO game_memory_cards (card_id, image_url, pair_id) VALUES
('c1', '/game/pattachitra_1.png', 'p1'),
('c2', '/game/pattachitra_1b.png', 'p1'),
('c3', '/game/temple_1.png', 'p2'),
('c4', '/game/temple_1b.png', 'p2'),
('c5', '/game/dance_1.png', 'p3'),
('c6', '/game/dance_1b.png', 'p3'),
('c7', '/game/festival_1.png', 'p4'),
('c8', '/game/festival_1b.png', 'p4');

-- Insert info texts
INSERT INTO info_texts (id, title, content, language) VALUES
('info_kh_carving_01', 'Stone Carving Details', 'The intricate stone carvings on the Konark Horse showcase the exceptional craftsmanship of 13th-century Odia artisans. Each detail tells a story of devotion and artistic excellence.', 'en'),
('info_kh_history_12c', '12th Century Art', 'Created during the reign of King Narasingha Deva I, this masterpiece represents the pinnacle of Kalinga architecture and sculpture.', 'en'),
('info_kh_arch_01', 'Architectural Marvel', 'The architectural precision of the Konark Sun Temple demonstrates advanced engineering techniques used by ancient Odia builders.', 'en');
