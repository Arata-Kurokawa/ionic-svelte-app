import type {SvelteComponent} from "svelte"

export const createHTMLCompFromSvelte = (
  component: new (...args: any) => SvelteComponent,
  componentProps: {}
): HTMLDivElement => {
  let navContent = document.createElement('div');

  const props = {
    ...componentProps,
  };

  const svelteComponent = new component({
    target: navContent,
    props: props,
  });

  return navContent
};