import App from './App.svelte'
import ionicSetup from './lib/ionic/ionic-setup'
import AppScreen from "./lib/app-screen";

ionicSetup()

// const app = new App({
//   target: document.getElementById('app')
// })
//
// export default app

AppScreen.setRoot(App, {})


