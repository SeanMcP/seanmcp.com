<script>
  let number = 30;
  let sum;

  function handleSubmit(e) {
    e.preventDefault();

    sum = (number * (number + 1)) / 2;
  }
</script>

<div id="app">
  <form id="settings" on:submit={handleSubmit}>
    <label for="x">Number</label>
    <input id="x" min="1" name="x" type="number" bind:value={number} />
    <button>Calculate</button>
  </form>
  {#if sum}
    <div aria-live="polite" id="result">{sum}</div>
  {/if}
</div>

<style>
  #app {
    border: 1px solid var(--off-background);
    padding: 1rem;
  }
  #app :is(button, input) {
    background: transparent;
    border: 1px solid var(--off-background);
    color: inherit;
    font: inherit;
    padding: 0.25rem;
  }
  #app label {
    font-weight: bold;
  }
  #app button {
    background: var(--off-background);
  }
  #app #settings {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }
  #app #settings input {
    min-width: 3rem;
    flex-grow: 1;
  }
  @media screen and (max-width: 500px) {
    #app #settings {
      display: grid;
      grid-template-columns: min-content auto;
    }

    #app #settings button {
      grid-column: span 2;
    }
  }
  #app #result {
    font-size: 2em;
    font-weight: bold;
    overflow-x: auto;
    padding-top: 1rem;
    text-align: center;
  }
</style>
