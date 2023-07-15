<script lang="ts">
  export let data
  const { session } = data
</script>

<div class="flex gap-4 flex-col h-screen items-center justify-center antialiased bg-zinc-100">
  <h1 class="text-4xl font-bold">Welcome to <span class="bg-gradient-to-r from-rose-400 to-orange-300 text-transparent bg-clip-text">SvelteKit</span></h1>
  <p>Visit <a class="underline text-orange-600 mt-2" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  <div>
    {#if session}
      <div class="flex items-center gap-2">
        <div class="flex gap-2 items-center border border-zinc-800 px-3 py-1 rounded-lg bg-white shadow-2xl transition-all hover:bg-zinc-50 hover:shadow-none">
          <img src={session.user.user_metadata.avatar_url} class="w-8 h-8 rounded-full" alt="profile images" />
          <p class="text-zinc-800 font-semibold">{session.user.user_metadata.name}</p>
        </div>
        <form action="?/signout" method="POST">
          <button type="submit" class="text-white bg-zinc-800 p-2 px-4 rounded-lg transition-colors hover:bg-zinc-700 shadow-2xl">Sign Out</button>
        </form>
      </div>
    {:else}
      <form action="?/signin" method="POST">
        <button type="submit" class="text-white bg-zinc-800 p-2 px-4 rounded-lg transition-colors hover:bg-zinc-700 shadow-2xl">Sign In</button>
      </form>
    {/if}
  </div>
</div>
