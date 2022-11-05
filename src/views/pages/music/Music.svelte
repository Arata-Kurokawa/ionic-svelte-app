<svelte:options tag="app-music" />

<script lang="ts">
  export let ionNav: HTMLIonNavElement

  export let goToMovies = () => {
    ionNav.push('app-movies', { ionNav: ionNav })
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-title>Music</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Music</h1>

  <ion-button on:click={goToMovies}>to Movies</ion-button>
</ion-content>