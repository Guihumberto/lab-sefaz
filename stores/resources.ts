import { defineStore } from 'pinia'

import { useChamadosStore } from '~~/stores/ChamadosStore'
const chamadoStore = useChamadosStore()

import { useConsultoresStore } from '~~/stores/ConsultoresStore'
const consultoresStore = useConsultoresStore()

import { useProjetosStore } from '~~/stores/ProjetosStore'
const projetosStore = useProjetosStore()

export const useResourcesStore = defineStore('resources', {
  state: () => {
    return { 
      loadInitial: false,
      listRecorrent: []
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
      this.cargaTeste()
    },
    cargaTeste(){
      chamadoStore.carga()
      consultoresStore.carga()
      projetosStore.carga()
    }
  },
})
