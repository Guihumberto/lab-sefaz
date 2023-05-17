import { defineStore } from "pinia";

export const useProjetosStore = defineStore("projetos", {
  state: () => ({
    projetos:[
      {id:0, projeto: 'Todos', idColider: 1, empresa: 'TeachLead', active: true},
      {id:1, projeto: 'Conta Corrente Parametrizada - CCP', idColider: 1, empresa: 'TeachLead', active: true},
      {id:2, projeto: 'SMART', idColider: 2, empresa: 'Loglab', active: true},
      {id:3, projeto: 'CRESCENDO', idColider: 1, empresa: 'Donpeople', active: true},
      {id:4, projeto: 'SAM', idColider: 1, empresa: '', active: true},
    ],

  }),
  getters: {
    readProjetos(){
      return this.projetos
    }
  },
  actions: {
    addProjeto(item){
      let projeto = {
        id: item.id,
        ordem: item.ordem,
        projeto: item.projeto,
        idColider: null, 
        empresa:'',
        active: true
      }
      this.projetos.push(projeto)
    }
  },
});