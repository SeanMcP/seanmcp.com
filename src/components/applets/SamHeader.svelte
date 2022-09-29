<script>
  import { onMount } from "svelte";

  let emoji = "👦";
  const options = [
    "👦",
    "🐶",
    "🦊",
    "🐸",
    "🐵",
    "🦁",
    "🐮",
    "🐻",
    "🐨",
    "🐼",
    "🐯",
    "🐷",
  ];

  onMount(() => {
    document.title = emoji + " " + document.title;
  });

  function handleClick() {
    let next = emoji;
    while (next === emoji) {
      next = options[Math.floor(Math.random() * options.length)];
    }
    emoji = next;
    document.title = emoji + document.title.slice(document.title.indexOf(" "));
  }
</script>

<div>
  <h1 on:click={handleClick}><span>{emoji} Sam</span></h1>
</div>

<style>
  div {
    text-align: center;
  }

  h1 {
    display: inline-block;
    cursor: pointer;
    font-size: 4rem;
    margin-top: 2rem;
    transition: transform 2s ease-in-out;
  }

  h1:hover {
    transform: rotate(1080deg);
  }

  h1::selection {
    background: none;
  }
</style>
