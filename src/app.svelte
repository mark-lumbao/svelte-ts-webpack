<script lang="ts">
  import { Route } from 'tinro';
  import { fade } from 'svelte/transition';
  import Button from 'src/components/button.svelte';

  let show: boolean = true;

  function toggle() {
    show = !show;
  }
</script>

<Route path="/*">
  <main>
    <Route path="/">
      {#if show}
        <img
          in:fade
          out:fade
          class="logo"
          alt="svelte-logo"
          src="/assets/svelte-logo.png"
        />
      {/if}
      <h1>
        Svelte in Typescript
        <br />
        and Webpack
      </h1>
      <Button on:click={toggle}>
        {show ? 'Hide' : 'Show'}
        logo
      </Button>
    </Route>
    <Route fallback>Page Not Found!</Route>
  </main>
</Route>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    gap: 1rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  img.logo {
    max-width: 10rem;
    filter: drop-shadow(2px 4px 6px grey);
  }
  h1 {
    font-size: 1.5rem;
    color: #ff3e00;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
  }
</style>
