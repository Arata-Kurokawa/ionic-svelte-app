<svelte:options tag="app-root" />

<script lang="ts">
  import { onMount } from "svelte"

  let musicNav: HTMLIonNavElement
  let moviesNav: HTMLIonNavElement
  let gamesNav: HTMLIonNavElement

   onMount(() => {
     musicNav.setRoot('app-music', { ionNav: musicNav })
     moviesNav.setRoot('app-movies')
     gamesNav.setRoot('app-games')
   })
</script>

<link href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" rel="stylesheet">

<ion-app>
  <ion-tabs>
    <ion-tab tab="music">
      <ion-nav bind:this={musicNav}>
      </ion-nav>
    </ion-tab>

    <ion-tab tab="movies">
      <ion-nav bind:this={moviesNav}></ion-nav>
    </ion-tab>

    <ion-tab tab="games">
      <ion-nav bind:this={gamesNav}></ion-nav>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="music" selected="true">
        <ion-label>Music</ion-label>
        <ion-icon name="musical-note"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="movies">
        <ion-label>Movies</ion-label>
        <ion-icon name="videocam"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="games">
        <ion-label>Games</ion-label>
        <ion-icon name="game-controller"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
