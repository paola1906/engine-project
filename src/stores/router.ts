import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useSearchStore } from './search'

export const useRouteStore = defineStore('router', () => {
  const currentRouteId = ref<string | null>(null)
  const currentRoute = ref<string | null>(null)
  const searchStore = useSearchStore()

  function setRouteId(id: any, url?: any) {
    currentRouteId.value = id
    currentRoute.value = id ? url : undefined;
  }

  watch(currentRouteId, () => {
    searchStore.reset()
  })

  return { currentRouteId, setRouteId, currentRoute }
})
