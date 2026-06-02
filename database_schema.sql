-- This code creates the "drawers" for your app's data
CREATE TABLE profiles (
    id UUID PRIMARY KEY,
    username TEXT,
    current_level INT DEFAULT 1,
    current_xp INT DEFAULT 0,
    gold_balance INT DEFAULT 0,
    health_points INT DEFAULT 100
);

CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    user_id UUID,
    task_name TEXT,
    difficulty TEXT, -- easy, medium, or hard
    is_completed BOOLEAN DEFAULT FALSE,
    xp_reward INT,
    gold_reward INT
);
