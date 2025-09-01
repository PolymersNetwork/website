export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      access_logs: {
        Row: {
          action: string
          created_at: string | null
          device_id: string | null
          id: string
          ip_address: unknown | null
          metadata: Json | null
          success: boolean
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          device_id?: string | null
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          success: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          device_id?: string | null
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          success?: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "access_logs_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_events: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          id: string
          ip_address: unknown | null
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          category: string
          created_at: string | null
          creation_fee_paid: boolean | null
          creator_id: string | null
          current_amount: number | null
          description: string
          end_date: string | null
          id: string
          image_url: string | null
          latitude: number | null
          location: string | null
          longitude: number | null
          solana_program_id: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["campaign_status"] | null
          target_amount: number
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          creation_fee_paid?: boolean | null
          creator_id?: string | null
          current_amount?: number | null
          description: string
          end_date?: string | null
          id?: string
          image_url?: string | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          solana_program_id?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["campaign_status"] | null
          target_amount: number
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          creation_fee_paid?: boolean | null
          creator_id?: string | null
          current_amount?: number | null
          description?: string
          end_date?: string | null
          id?: string
          image_url?: string | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          solana_program_id?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["campaign_status"] | null
          target_amount?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaigns_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      challenges: {
        Row: {
          challenge_type: string
          created_at: string | null
          description: string
          end_date: string
          id: string
          name: string
          reward_amount: number
          reward_token: string | null
          start_date: string
          status: string | null
          target_value: number
          updated_at: string | null
        }
        Insert: {
          challenge_type: string
          created_at?: string | null
          description: string
          end_date: string
          id?: string
          name: string
          reward_amount: number
          reward_token?: string | null
          start_date: string
          status?: string | null
          target_value: number
          updated_at?: string | null
        }
        Update: {
          challenge_type?: string
          created_at?: string | null
          description?: string
          end_date?: string
          id?: string
          name?: string
          reward_amount?: number
          reward_token?: string | null
          start_date?: string
          status?: string | null
          target_value?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      collection_points: {
        Row: {
          accepted_plastic_types: string[] | null
          address: string
          created_at: string | null
          id: string
          latitude: number | null
          longitude: number | null
          name: string
          nfc_tag: string | null
          qr_code: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          accepted_plastic_types?: string[] | null
          address: string
          created_at?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name: string
          nfc_tag?: string | null
          qr_code: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          accepted_plastic_types?: string[] | null
          address?: string
          created_at?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string
          nfc_tag?: string | null
          qr_code?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      devices: {
        Row: {
          created_at: string | null
          device_id: string
          device_name: string
          device_type: string
          id: string
          last_seen: string | null
          location: string | null
          metadata: Json | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          device_id: string
          device_name: string
          device_type: string
          id?: string
          last_seen?: string | null
          location?: string | null
          metadata?: Json | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          device_id?: string
          device_name?: string
          device_type?: string
          id?: string
          last_seen?: string | null
          location?: string | null
          metadata?: Json | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "devices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          campaign_id: string | null
          created_at: string | null
          donor_anonymous: boolean | null
          donor_id: string | null
          fee_amount: number | null
          id: string
          message: string | null
          status: Database["public"]["Enums"]["donation_status"] | null
          transaction_signature: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          campaign_id?: string | null
          created_at?: string | null
          donor_anonymous?: boolean | null
          donor_id?: string | null
          fee_amount?: number | null
          id?: string
          message?: string | null
          status?: Database["public"]["Enums"]["donation_status"] | null
          transaction_signature?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          campaign_id?: string | null
          created_at?: string | null
          donor_anonymous?: boolean | null
          donor_id?: string | null
          fee_amount?: number | null
          id?: string
          message?: string | null
          status?: Database["public"]["Enums"]["donation_status"] | null
          transaction_signature?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donations_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "donations_donor_id_fkey"
            columns: ["donor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "donations_donor_id_fkey"
            columns: ["donor_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      eco_actions: {
        Row: {
          action_type: string
          created_at: string | null
          description: string | null
          id: string
          location: string | null
          reward_amount: number | null
          user_id: string | null
          verification_data: Json | null
          verified: boolean | null
        }
        Insert: {
          action_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string | null
          reward_amount?: number | null
          user_id?: string | null
          verification_data?: Json | null
          verified?: boolean | null
        }
        Update: {
          action_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string | null
          reward_amount?: number | null
          user_id?: string | null
          verification_data?: Json | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "eco_actions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "eco_actions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      esg_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_name: string
          metric_value: number | null
          program_id: string | null
          recorded_at: string | null
          target_value: number | null
          unit: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_name: string
          metric_value?: number | null
          program_id?: string | null
          recorded_at?: string | null
          target_value?: number | null
          unit?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_name?: string
          metric_value?: number | null
          program_id?: string | null
          recorded_at?: string | null
          target_value?: number | null
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "esg_metrics_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      nft_passes: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          is_active: boolean
          nft_mint: string | null
          tier: string
          token_type: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          is_active?: boolean
          nft_mint?: string | null
          tier: string
          token_type?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          is_active?: boolean
          nft_mint?: string | null
          tier?: string
          token_type?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nft_passes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nft_passes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      por_nfts: {
        Row: {
          created_at: string | null
          id: string
          metadata_uri: string
          minting_transaction_hash: string | null
          nft_address: string
          status: string | null
          submission_id: string
          updated_at: string | null
          user_id: string
          verification_data: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata_uri: string
          minting_transaction_hash?: string | null
          nft_address: string
          status?: string | null
          submission_id: string
          updated_at?: string | null
          user_id: string
          verification_data?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata_uri?: string
          minting_transaction_hash?: string | null
          nft_address?: string
          status?: string | null
          submission_id?: string
          updated_at?: string | null
          user_id?: string
          verification_data?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "por_nfts_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "recycling_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_name: string | null
          company_verified: boolean | null
          created_at: string | null
          eco_score: number | null
          email: string
          full_name: string | null
          id: string
          membership_tier: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          total_donated: number | null
          total_earned: number | null
          updated_at: string | null
          user_id: string | null
          wallet_address: string | null
        }
        Insert: {
          avatar_url?: string | null
          company_name?: string | null
          company_verified?: boolean | null
          created_at?: string | null
          eco_score?: number | null
          email: string
          full_name?: string | null
          id?: string
          membership_tier?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          total_donated?: number | null
          total_earned?: number | null
          updated_at?: string | null
          user_id?: string | null
          wallet_address?: string | null
        }
        Update: {
          avatar_url?: string | null
          company_name?: string | null
          company_verified?: boolean | null
          created_at?: string | null
          eco_score?: number | null
          email?: string
          full_name?: string | null
          id?: string
          membership_tier?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          total_donated?: number | null
          total_earned?: number | null
          updated_at?: string | null
          user_id?: string | null
          wallet_address?: string | null
        }
        Relationships: []
      }
      programs: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          goal_kpis: string[] | null
          id: string
          name: string
          org_id: string | null
          program_type: string | null
          start_date: string | null
          status: string | null
          tags: string[] | null
          target_values: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          goal_kpis?: string[] | null
          id?: string
          name: string
          org_id?: string | null
          program_type?: string | null
          start_date?: string | null
          status?: string | null
          tags?: string[] | null
          target_values?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          goal_kpis?: string[] | null
          id?: string
          name?: string
          org_id?: string | null
          program_type?: string | null
          start_date?: string | null
          status?: string | null
          tags?: string[] | null
          target_values?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      recycling_submissions: {
        Row: {
          collection_point_id: string
          created_at: string | null
          description: string | null
          id: string
          location: string
          photo_urls: string[] | null
          plastic_type: string
          por_nft_id: string | null
          reward_amount: number | null
          reward_token: string | null
          submission_date: string | null
          updated_at: string | null
          user_id: string
          verification_date: string | null
          verification_status: string | null
          weight: number
        }
        Insert: {
          collection_point_id: string
          created_at?: string | null
          description?: string | null
          id?: string
          location: string
          photo_urls?: string[] | null
          plastic_type: string
          por_nft_id?: string | null
          reward_amount?: number | null
          reward_token?: string | null
          submission_date?: string | null
          updated_at?: string | null
          user_id: string
          verification_date?: string | null
          verification_status?: string | null
          weight: number
        }
        Update: {
          collection_point_id?: string
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string
          photo_urls?: string[] | null
          plastic_type?: string
          por_nft_id?: string | null
          reward_amount?: number | null
          reward_token?: string | null
          submission_date?: string | null
          updated_at?: string | null
          user_id?: string
          verification_date?: string | null
          verification_status?: string | null
          weight?: number
        }
        Relationships: []
      }
      rewards: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          status: string | null
          submission_id: string | null
          token_type: string
          transaction_hash: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          status?: string | null
          submission_id?: string | null
          token_type?: string
          transaction_hash?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          status?: string | null
          submission_id?: string | null
          token_type?: string
          transaction_hash?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rewards_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "recycling_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      sustainability_goals: {
        Row: {
          created_at: string | null
          current_value: number | null
          deadline: string | null
          goal_type: string
          id: string
          status: string | null
          target_value: number
          unit: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          current_value?: number | null
          deadline?: string | null
          goal_type: string
          id?: string
          status?: string | null
          target_value: number
          unit: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          current_value?: number | null
          deadline?: string | null
          goal_type?: string
          id?: string
          status?: string | null
          target_value?: number
          unit?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          campaign_id: string | null
          created_at: string | null
          donation_id: string | null
          id: string
          metadata: Json | null
          status: string | null
          timestamp: string | null
          token: string | null
          token_mint: string | null
          transaction_signature: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          user_id: string | null
        }
        Insert: {
          amount: number
          campaign_id?: string | null
          created_at?: string | null
          donation_id?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          timestamp?: string | null
          token?: string | null
          token_mint?: string | null
          transaction_signature?: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          user_id?: string | null
        }
        Update: {
          amount?: number
          campaign_id?: string | null
          created_at?: string | null
          donation_id?: string | null
          id?: string
          metadata?: Json | null
          status?: string | null
          timestamp?: string | null
          token?: string | null
          token_mint?: string | null
          transaction_signature?: string | null
          type?: Database["public"]["Enums"]["transaction_type"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_donation_id_fkey"
            columns: ["donation_id"]
            isOneToOne: false
            referencedRelation: "donations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_challenges: {
        Row: {
          challenge_id: string
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          progress: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          challenge_id: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          progress?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          challenge_id?: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          progress?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_connections: {
        Row: {
          created_at: string | null
          id: string
          is_primary: boolean | null
          metadata: Json | null
          user_id: string
          wallet_address: string
          wallet_type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          metadata?: Json | null
          user_id: string
          wallet_address: string
          wallet_type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          metadata?: Json | null
          user_id?: string
          wallet_address?: string
          wallet_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallet_connections_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wallet_connections_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      public_profiles: {
        Row: {
          avatar_url: string | null
          company_name: string | null
          company_verified: boolean | null
          created_at: string | null
          eco_score: number | null
          full_name: string | null
          id: string | null
          total_donated: number | null
        }
        Insert: {
          avatar_url?: string | null
          company_name?: string | null
          company_verified?: boolean | null
          created_at?: string | null
          eco_score?: number | null
          full_name?: string | null
          id?: string | null
          total_donated?: number | null
        }
        Update: {
          avatar_url?: string | null
          company_name?: string | null
          company_verified?: boolean | null
          created_at?: string | null
          eco_score?: number | null
          full_name?: string | null
          id?: string | null
          total_donated?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      campaign_status: "draft" | "active" | "completed" | "cancelled"
      donation_status: "pending" | "completed" | "failed"
      transaction_type: "donation" | "reward" | "fee" | "campaign_creation"
      user_role: "user" | "company" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      campaign_status: ["draft", "active", "completed", "cancelled"],
      donation_status: ["pending", "completed", "failed"],
      transaction_type: ["donation", "reward", "fee", "campaign_creation"],
      user_role: ["user", "company", "admin"],
    },
  },
} as const
