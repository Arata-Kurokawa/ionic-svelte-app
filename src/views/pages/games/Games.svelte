
<script lang="ts">
  export let ionNav: HTMLIonNavElement

  let back = () => {
    ionNav.pop()
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button on:click={back}>←</ion-button>
    </ion-buttons>
    <ion-title>Games</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Games</h1>
</ion-content>