<script lang="ts">
  import Counter from '../../../lib/Counter.svelte'
  import Movies from '../../../views/pages/movies/Movies.svelte'

  import { createHTMLCompFromSvelte } from "../../../lib/svelte/create-html-comp-from-svelte"
  import {onDestroy} from "svelte";
  import AppScreen from "../../../lib/app-screen";
  import Login from "../login/Login.svelte";

  export let ionNav: HTMLIonNavElement

  export let goToMovies = () => {
    const [html, _] = createHTMLCompFromSvelte(Movies, { ionNav: ionNav })
    ionNav.push(html)
  }

  onDestroy(() => {
    console.log('----------onDestroy Music-------------')
  })

  let setRootLogin = () => {
    AppScreen.setRoot(Login, {})
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

  <ion-button on:click={goToMovies}>to Movies</ion-button>
  <ion-button on:click={setRootLogin}>set root login</ion-button>
</ion-content>