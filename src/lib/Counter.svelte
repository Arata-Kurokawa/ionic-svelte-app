<svelte:options tag="app-counter" />

<script lang="ts">
  export let onclick: () => {}

  let count: number = 0
  const increment = (): void => {
    count += 1
    onclick()
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
