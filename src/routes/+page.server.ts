import { fail, redirect } from "@sveltejs/kit"

export const actions = {
  signin: async ({ locals: { supabase }, url }) => {
    const { data, error: err } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${url.origin}/api/auth/callback`,
      }
    })

    if (err) {
      console.log(err)
      return fail(400, {
        message: 'Something went wrong'
      })
    }

    throw redirect(303, data.url)
  },

  signout: async ({locals: { supabase }}) => {
    await supabase.auth.signOut()
    throw redirect(303, '/')
  }
}
