<script lang="ts">
  import {createEventDispatcher, onDestroy} from "svelte";

  const dispatcher = createEventDispatcher()

  let count: number = 0
  const increment = (): void => {
    count += 1
    dispatcher('click', count)
  }

  onDestroy(() => {
    console.log('---------- onDestroy Counter -----------')
  })
</script>

<div>
  <slot name="title"></slot>
  <slot></slot>
</div>

<button on:click={increment}>
  count is {count}
</button>
