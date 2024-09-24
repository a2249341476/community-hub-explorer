import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://okkhacgutjqbrukviswe.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ra2hhY2d1dGpxYnJ1a3Zpc3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NzcwNzcsImV4cCI6MjA0MjE1MzA3N30.zlABa4awKMQvBvmIywGtxc3q6AdA7ymp7aAhAoueJAQ"

const options = {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    },
  },
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options)
