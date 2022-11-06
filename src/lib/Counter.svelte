<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher()

  let count: number = 0
  const increment = (): void => {
    count += 1
    dispatcher('click', count)
  }
</script>

<div>
  <slot name="title"></slot>
  <slot></slot>
</div>

<button on:click={increment}>
  count is {count}
</button>
