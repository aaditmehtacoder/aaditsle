-- Copy and paste this entirely into the Supabase SQL Editor and hit "Run"

-- 1. Create tables
CREATE TABLE public.games (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  phase TEXT NOT NULL DEFAULT 'lobby',
  current_question INT NOT NULL DEFAULT 0,
  revealed BOOLEAN NOT NULL DEFAULT false,
  pending_sle_index INT,
  question_started_at BIGINT NOT NULL,
  question_count INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.players (
  id TEXT PRIMARY KEY,
  game_id UUID NOT NULL REFERENCES public.games(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  score INT NOT NULL DEFAULT 0,
  joined_at BIGINT NOT NULL
);

CREATE TABLE public.answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  game_id UUID NOT NULL REFERENCES public.games(id) ON DELETE CASCADE,
  player_id TEXT NOT NULL REFERENCES public.players(id) ON DELETE CASCADE,
  question_index INT NOT NULL,
  choice INT NOT NULL,
  correct BOOLEAN NOT NULL
);

-- 2. Enable Realtime for all tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.games;
ALTER PUBLICATION supabase_realtime ADD TABLE public.players;
ALTER PUBLICATION supabase_realtime ADD TABLE public.answers;

-- 3. Set up Row Level Security (RLS) to allow public access for the game
-- Since this is a temporary class game, we will enable anonymous access to read and write.
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous full access to games" ON public.games FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anonymous full access to players" ON public.players FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow anonymous full access to answers" ON public.answers FOR ALL USING (true) WITH CHECK (true);

-- 4. Enable CORS if needed (usually handled by Supabase API settings automatically)
