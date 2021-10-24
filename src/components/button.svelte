<script lang="ts"></script>

<button {...$$props} on:click>
  <slot />
</button>

<style>
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
</style>
