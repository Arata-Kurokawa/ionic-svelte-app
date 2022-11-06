<script lang="ts">
  import Counter from '../../../lib/Counter.svelte'
  import Movies from '../../../views/pages/movies/Movies.svelte'

  import { createHTMLCompFromSvelte } from "../../../lib/svelte/create-html-comp-from-svelte"

  export let ionNav: HTMLIonNavElement

  export let goToMovies = () => {
    const musicRoot = createHTMLCompFromSvelte(Movies, { ionNav: ionNav })
    ionNav.push(musicRoot, { ionNav: ionNav })
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Music</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Music</h1>

  <Counter
    on:click="{() => { console.log('clickCounter') }}"
  >
    <p slot="title">slot title</p>
    <p>slot default</p>
  </Counter>
  <br>
  <ion-button on:click={goToMovies}>to Movies</ion-button>
</ion-content>