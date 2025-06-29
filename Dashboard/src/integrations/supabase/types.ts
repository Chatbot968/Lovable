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
      admin_authenticated: {
        Row: {
          created_at: string
          email: string
          id: string
          nom: string
          prenom: string
          question_1_reponse: string
          question_2_reponse: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          nom: string
          prenom: string
          question_1_reponse: string
          question_2_reponse: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          nom?: string
          prenom?: string
          question_1_reponse?: string
          question_2_reponse?: string
        }
        Relationships: []
      }
      client_config: {
        Row: {
          banner_color: string | null
          bot_description: string | null
          chat_background_color: string | null
          client_id: string
          color_primary: string | null
          created_at: string
          description: string | null
          logo_url: string | null
          text_color: string | null
          user_id: string | null
          webhook_url: string
        }
        Insert: {
          banner_color?: string | null
          bot_description?: string | null
          chat_background_color?: string | null
          client_id: string
          color_primary?: string | null
          created_at?: string
          description?: string | null
          logo_url?: string | null
          text_color?: string | null
          user_id?: string | null
          webhook_url: string
        }
        Update: {
          banner_color?: string | null
          bot_description?: string | null
          chat_background_color?: string | null
          client_id?: string
          color_primary?: string | null
          created_at?: string
          description?: string | null
          logo_url?: string | null
          text_color?: string | null
          user_id?: string | null
          webhook_url?: string
        }
        Relationships: []
      }
      client_quota: {
        Row: {
          client_id: string
          last_updated_at: string | null
          limit: number | null
          reset_day: number | null
          tokens_max: number
          tokens_used: number
          updated_at: string
          used: number | null
          user_id: string | null
        }
        Insert: {
          client_id: string
          last_updated_at?: string | null
          limit?: number | null
          reset_day?: number | null
          tokens_max: number
          tokens_used?: number
          updated_at?: string
          used?: number | null
          user_id?: string | null
        }
        Update: {
          client_id?: string
          last_updated_at?: string | null
          limit?: number | null
          reset_day?: number | null
          tokens_max?: number
          tokens_used?: number
          updated_at?: string
          used?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_quota_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "client_config"
            referencedColumns: ["client_id"]
          },
        ]
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      n8n_chat_commercial_history: {
        Row: {
          créé_à: string | null
          id: number
          message: Json | null
          session_id: string | null
        }
        Insert: {
          créé_à?: string | null
          id?: never
          message?: Json | null
          session_id?: string | null
        }
        Update: {
          créé_à?: string | null
          id?: never
          message?: Json | null
          session_id?: string | null
        }
        Relationships: []
      }
      n8n_chat_histories: {
        Row: {
          created_at: string | null
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      n8n_chat_rdv_historie: {
        Row: {
          créé_à: string | null
          id: number
          message: Json | null
          session_id: string | null
        }
        Insert: {
          créé_à?: string | null
          id?: number
          message?: Json | null
          session_id?: string | null
        }
        Update: {
          créé_à?: string | null
          id?: number
          message?: Json | null
          session_id?: string | null
        }
        Relationships: []
      }
      n8n_rdv_chat_history: {
        Row: {
          créé_à: string | null
          id: number
          message: Json | null
          session_id: string
        }
        Insert: {
          créé_à?: string | null
          id?: number
          message?: Json | null
          session_id: string
        }
        Update: {
          créé_à?: string | null
          id?: number
          message?: Json | null
          session_id?: string
        }
        Relationships: []
      }
      produits_oden: {
        Row: {
          date_insertion: string | null
          description: string | null
          id: string
          image: string | null
          prix: number | null
          promo: number | null
          titre: string
          url: string | null
        }
        Insert: {
          date_insertion?: string | null
          description?: string | null
          id?: string
          image?: string | null
          prix?: number | null
          promo?: number | null
          titre: string
          url?: string | null
        }
        Update: {
          date_insertion?: string | null
          description?: string | null
          id?: string
          image?: string | null
          prix?: number | null
          promo?: number | null
          titre?: string
          url?: string | null
        }
        Relationships: []
      }
      produits_vectorises: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          role: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          role: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          role?: string
        }
        Relationships: []
      }
      rendez_vous_clients: {
        Row: {
          created_at: string | null
          date_rdv: string
          email: string
          heure_fin: string | null
          heure_rdv: string
          id: string
          jour_semaine: string | null
          nom: string
          objectif: string | null
          prenom: string
          statut_rappel: string | null
        }
        Insert: {
          created_at?: string | null
          date_rdv: string
          email: string
          heure_fin?: string | null
          heure_rdv: string
          id?: string
          jour_semaine?: string | null
          nom: string
          objectif?: string | null
          prenom: string
          statut_rappel?: string | null
        }
        Update: {
          created_at?: string | null
          date_rdv?: string
          email?: string
          heure_fin?: string | null
          heure_rdv?: string
          id?: string
          jour_semaine?: string | null
          nom?: string
          objectif?: string | null
          prenom?: string
          statut_rappel?: string | null
        }
        Relationships: []
      }
      strategie_commerciale_vectorisee: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      chat_histories_cleaned: {
        Row: {
          content: string | null
          id: number | null
          session_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      check_and_increment_quota: {
        Args: { p_client_id: string }
        Returns: boolean
      }
      get_client_config_public: {
        Args: { p_client_id: string }
        Returns: {
          client_id: string
          logo_url: string
          color_primary: string
          webhook_url: string
          bot_description: string
          banner_color: string
          chat_background_color: string
          text_color: string
        }[]
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      match_books: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_produits_vectorises: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_strategies_vectorisees: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      update_client_id: {
        Args: { old_client_id: string; new_client_id: string }
        Returns: boolean
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      verify_admin_auth: {
        Args: { p_email: string; p_question_1: string; p_question_2: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
