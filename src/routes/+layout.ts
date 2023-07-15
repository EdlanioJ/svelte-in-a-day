import { VITE_VERCEL_SUPABASE_ANON_KEY, VITE_VERCEL_SUPABASE_URL } from '$lib/env.js'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')
  const supabase = createSupabaseLoadClient({
    supabaseUrl: VITE_VERCEL_SUPABASE_URL,
    supabaseKey: VITE_VERCEL_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
