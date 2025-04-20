// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://cmlmbbyykxxmnpjevzxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtbG1iYnl5a3h4bW5wamV2enhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjI0ODAsImV4cCI6MjA2MDYzODQ4MH0.tEQBa_A9gSLg2YCmiFvrC6DoQDaLXg_FHYe8M8GXCtg";
export const supabase = createClient(supabaseUrl, supabaseKey);
