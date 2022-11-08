import type {SvelteComponent} from "svelte"

export const createHTMLCompFromSvelte = (
  component: new (...args: any) => SvelteComponent,
  componentProps: {}
): [HTMLDivElement, SvelteComponent] => {
  let navContent = document.createElement('div')

  const props = {
    ...componentProps,
  };

  const c = new component({
    target: navContent,
    props: props,
  });

  return [navContent, c]
};