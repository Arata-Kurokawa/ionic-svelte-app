<svelte:options tag="app-movies" />

<script lang="ts">
  import {createHTMLCompFromSvelte} from "../../../lib/svelte/create-html-comp-from-svelte";
  import Games from "../games/Games.svelte";

  export let ionNav: HTMLIonNavElement

  let back = () => {
    ionNav.pop()
  }

  let goToGames = () => {
    const gamesRoot = createHTMLCompFromSvelte(Games, { ionNav: ionNav })
    ionNav.push(gamesRoot, { ionNav: ionNav })
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button on:click={back}>←</ion-button>
    </ion-buttons>
    <ion-title>Movies</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Movies</h1>

  <ion-button on:click={goToGames}>to Games</ion-button>
</ion-content>