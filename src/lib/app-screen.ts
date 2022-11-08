import type {SvelteComponent} from "svelte"

export default class AppScreen {
  private static root?: SvelteComponent

  static setRoot(
    component: new (...args: any) => SvelteComponent,
    componentProps: {}
  ): SvelteComponent {
    if (this.root) {
      this.root.$destroy()
      console.log('root exists')
    } else {
      console.log('root not exists')
    }


    const app = new component({
      target: document.getElementById('app'),
      props: componentProps
    })

    this.root = app

    return app
  }
}