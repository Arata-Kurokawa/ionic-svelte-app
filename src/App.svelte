<script lang="ts">
  import { onMount } from "svelte"

  import Music from './views/pages/music/Music.svelte'
  import Movies from './views/pages/movies/Movies.svelte'
  import Games from './views/pages/games/Games.svelte'
  import { createHTMLCompFromSvelte } from "./lib/svelte/create-html-comp-from-svelte"

  let musicNav: HTMLIonNavElement
  let moviesNav: HTMLIonNavElement
  let gamesNav: HTMLIonNavElement

  onMount(async () => {
    const musicRoot = createHTMLCompFromSvelte(Music, { ionNav: musicNav })
    const moviesRoot = createHTMLCompFromSvelte(Movies, { ionNav: moviesNav })
    const gamesRoot = createHTMLCompFromSvelte(Games, { ionNav: gamesNav })
    await musicNav.setRoot(musicRoot)
    await moviesNav.setRoot(moviesRoot)
    await gamesNav.setRoot(gamesRoot)
  })
</script>

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
