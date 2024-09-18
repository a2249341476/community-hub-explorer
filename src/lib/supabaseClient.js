import { createClient } from '@supabase/supabase-js'

// 使用 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY 环境变量
const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 创建 Supabase 客户端
export const supabase = createClient(supabaseUrl, supabaseAnonKey)



