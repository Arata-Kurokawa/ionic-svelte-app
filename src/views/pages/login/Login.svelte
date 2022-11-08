<script lang="ts">
  import AppScreen from "../../../lib/app-screen";
  import App from "../../../App.svelte";

  let setRootApp = () => {
    AppScreen.setRoot(App, {})
  }
</script>

<ion-header translucent>
  <ion-toolbar>
    <ion-buttons slot="start">
    </ion-buttons>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <h1>Login</h1>

  <ion-button on:click={setRootApp}>set root app</ion-button>
</ion-content>