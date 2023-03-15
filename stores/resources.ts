import { defineStore } from 'pinia'

export const useResourcesStore = defineStore('resources', {
  state: () => {
    return { 
      loadInitial: false
    }
  },
  getters: {
    readLoad(){
      return this.loadInitial
    }
  },
  actions: {
    loadChange() {
      this.loadInitial = true
    },
  },
})
