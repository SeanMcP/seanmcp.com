<script>
  import * as patterns from "consonant-vowel-patterns";

  let selectedPattern = null;

  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    selectedPattern = searchParams.get("pattern");
  }

  function handleChange(e) {
    if (e.target.value) selectedPattern = e.target.value;
  }
</script>

<section id="app">
  <form id="pattern-form">
    <label for="pattern">Consonant-vowel pattern</label>
    <select
      id="pattern"
      name="pattern"
      on:change={handleChange}
      value={selectedPattern}
    >
      <option>Select a pattern</option>
      {#each Object.keys(patterns) as pattern}
        {#if pattern !== "default"}
          <option value={pattern}>{pattern}</option>
        {/if}
      {/each}
    </select>
    <button>Search</button>
  </form>
  {#if selectedPattern}
    <section id="results">
      <p>
        {patterns[selectedPattern].length} results for "{selectedPattern}"
        <a
          href={`https://raw.githubusercontent.com/SeanMcP/reading/master/consonant-vowel-patterns/lib/${selectedPattern}.json`}
          target="_blank"
          rel="noreferrer">View the raw data</a
        >
      </p>
      <ol
        id="results-list"
        class:--long={patterns[selectedPattern].length > 99}
      >
        {#each patterns[selectedPattern] as word}
          <li>{word}</li>
        {/each}
      </ol>
    </section>
  {/if}
</section>

<style>
  #app {
    border: 1px solid var(--off-background);
    display: grid;
  }

  #results p a {
    display: block;
    font-size: small;
    text-align: center;
  }

  #pattern-form {
    display: grid;
    gap: 0.5rem;
    padding: 1rem;
  }

  #pattern-form button,
  #pattern-form select {
    border-radius: 0;
    border: 1px solid var(--off-background);
    font: inherit;
    padding: 0.25rem 0.5rem;
  }

  #pattern-form button {
    background-color: var(--text-color);
    border: 0;
    border-radius: 0;
    color: var(--background);
    justify-self: end;
  }

  #results {
    border-top: 1px solid var(--off-background);
  }

  #results p {
    margin: 0;
    padding: 1rem;
    text-align: center;
  }

  #results-list {
    margin-bottom: 0;
    margin-top: 0;
    max-height: 10rem;
    overflow-y: auto;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  #results-list.--long {
    padding-left: 3.5rem;
  }
</style>
