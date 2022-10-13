<script>
  import { writable } from "svelte/store";

  const key = "com.seanmcp.applets.counter";

  const stored = localStorage[key];
  const parsed = parseInt(stored);

  const count = writable(Number.isNaN(parsed) ? 0 : parsed);

  count.subscribe((value) => {
    localStorage[key] = JSON.stringify(value);
  });

  function increment(e) {
    e.preventDefault();
    count.update((n) => n + 1);
  }
</script>

<button on:click={increment}>
  Count: {$count}
</button>

<style>
  button {
    background-color: #ff3e00;
    border: 0.125em solid white;
    border-radius: 4rem;
    color: white;
    display: block;
    font: inherit;
    font-feature-settings: "tnum";
    font-size: 2rem;
    font-variant-numeric: tabular-nums;
    font-weight: bold;
    margin: 0 auto;
    padding: 0.5em 1em;
  }
</style>
