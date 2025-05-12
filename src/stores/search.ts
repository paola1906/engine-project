import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref<string>('')

  function setSearchQuery(query: string) {
    searchQuery.value = query
  }

  const reset = () => {
    setSearchQuery('');
  }

  return { searchQuery, setSearchQuery, reset }
})
