import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.alias['#my-module'] = resolve('./runtime')
    addComponent({ name: 'TestComponent', filePath: resolve('./runtime/component.vue') })
  }
})
