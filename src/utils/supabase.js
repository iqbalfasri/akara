import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

export const CONFIG = {
  url: process.env.SUPABASE_URL,
  sup_key: process.en.SUPABASE_KEY,
};
export const supabase = createClient(CONFIG.url, CONFIG.sup_key);
