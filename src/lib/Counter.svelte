<svelte:options tag="app-counter" />

<script lang="ts">
  export let click: () => {}

  let count: number = 0
  const increment = (): void => {
    count += 1
    click()
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
