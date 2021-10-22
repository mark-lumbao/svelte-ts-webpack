<script lang="ts">
  import { fade } from 'svelte/transition';

  let show: boolean = true;

  function toggle() {
    show = !show;
  }
</script>

<main>
  {#if show}
    <img
      in:fade
      out:fade
      class="logo"
      alt="svelte-logo"
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
    />
  {/if}
  <h1>
    Svelte in Typescript
    <br />
    and Webpack
  </h1>
  <button on:click={toggle}>
    {show ? 'Hide' : 'Show'}
    logo
  </button>
</main>

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
  button {
    color: white;
    background-color: #ff3e00;
    opacity: 0.8;
    font-size: 1rem;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5em 1em;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
  }
  button:hover {
    font-weight: bold;
    font-size: 1.1rem;
    opacity: 1;
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
