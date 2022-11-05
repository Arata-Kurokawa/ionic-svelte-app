<svelte:options tag="app-movies" />

<script lang="ts">
  export let ionNav: HTMLIonNavElement

  export let back = () => {
    ionNav.pop()
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
</ion-content>