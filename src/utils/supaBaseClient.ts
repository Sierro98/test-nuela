import { createClient } from "@supabase/supabase-js";

const supabaseURL: string = "https://wgarpivgwhherhxgxmig.supabase.co";
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnYXJwaXZnd2hoZXJoeGd4bWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MjMxOTYsImV4cCI6MjAyNzI5OTE5Nn0.zEJS6H-m_uh6ydoRW7Kn2dHk_LTBOBEBhuz6GRH56FY";

export const supabase = createClient(supabaseURL, supabaseAnonKey)