import { defineStore } from "pinia";

export const useChamadosStore = defineStore("chamados", {
  state: () => ({
    chamados:[
      {id: 1, ordem:1, textSolic: 'texto 1', textObs: '', consultor: 1, priority: 1, idProject: 1},
      {id: 2, ordem:2, textSolic: 'texto 2', textObs: '', consultor: 2, priority: 1, idProject: 2},
      {id: 3, ordem:3, textSolic: 'texto 3', textObs: '', consultor: 2, priority: 1, idProject: 3},
      {id: 4, ordem:4, textSolic: 'texto 4', textObs: '', consultor: 1, priority: 1, idProject: 4},
      {id: 5, ordem:5, textSolic: 'texto 5', textObs: '', consultor: 1, priority: 1, idProject: 4},
    ],

  }),
  getters: {
    readChamados(){
      return this.chamados
    }
  },
  actions: {
    addChamados(item){
      let chamado = {
        id: item.id,
        mat: item.mat,
        name: item.casa,
        active: true
      }
      this.chamados.push(chamado)
    }
  },
});