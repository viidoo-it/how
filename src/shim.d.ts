/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "*.md" {
  import { ComponentOptions } from "vue"
  const Component: ComponentOptions
  export default Component
}

//

declare interface Window {
  // extend the window
}
