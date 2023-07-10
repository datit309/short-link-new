import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blank" | "game" | "master-light"
declare module "/Users/robert/GIC/OT/short-link-new/interface/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}