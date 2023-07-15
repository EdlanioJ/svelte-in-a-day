import { VITE_VERCEL_SUPABASE_ANON_KEY, VITE_VERCEL_SUPABASE_URL } from '$lib/env'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: VITE_VERCEL_SUPABASE_URL,
    supabaseKey: VITE_VERCEL_SUPABASE_ANON_KEY,
    event,
  })

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}) satisfies Handle
