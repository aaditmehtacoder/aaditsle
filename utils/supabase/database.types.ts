export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      games: {
        Row: {
          id: string
          code: string
          phase: 'lobby' | 'question' | 'sle' | 'leaderboard'
          current_question: number
          revealed: boolean
          pending_sle_index: number | null
          question_started_at: number
          question_count: number
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          phase?: 'lobby' | 'question' | 'sle' | 'leaderboard'
          current_question?: number
          revealed?: boolean
          pending_sle_index?: number | null
          question_started_at?: number
          question_count: number
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          phase?: 'lobby' | 'question' | 'sle' | 'leaderboard'
          current_question?: number
          revealed?: boolean
          pending_sle_index?: number | null
          question_started_at?: number
          question_count?: number
          created_at?: string
        }
      }
      players: {
        Row: {
          id: string
          game_id: string
          name: string
          score: number
          joined_at: number
        }
        Insert: {
          id: string
          game_id: string
          name: string
          score?: number
          joined_at: number
        }
        Update: {
          id?: string
          game_id?: string
          name?: string
          score?: number
          joined_at?: number
        }
      }
      answers: {
        Row: {
          id: string
          game_id: string
          player_id: string
          question_index: number
          choice: number
          correct: boolean
        }
        Insert: {
          id?: string
          game_id: string
          player_id: string
          question_index: number
          choice: number
          correct: boolean
        }
        Update: {
          id?: string
          game_id?: string
          player_id?: string
          question_index?: number
          choice?: number
          correct?: boolean
        }
      }
    }
  }
}
