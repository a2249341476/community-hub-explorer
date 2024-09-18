import { createClient } from '@supabase/supabase-js'

// 使用 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY 环境变量
const supabaseUrl = "https://okkhacgutjqbrukviswe.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ra2hhY2d1dGpxYnJ1a3Zpc3dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NzcwNzcsImV4cCI6MjA0MjE1MzA3N30.zlABa4awKMQvBvmIywGtxc3q6AdA7ymp7aAhAoueJAQ"

// 创建 Supabase 客户端
export const supabase = createClient(supabaseUrl, supabaseAnonKey)



