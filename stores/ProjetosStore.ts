import { defineStore } from "pinia";

export const useProjetosStore = defineStore("projetos", {
  state: () => ({
    empresas: [
      {id: 1, name: 'Techlead', active: true},
      {id: 2, name: 'EDS', active: true},
      {id: 3, name: 'ARGO', active: true}
    ],
    projetos:[
      {id:0, projeto: 'Todos', idColider: 0, idEmpresa: 0, active: true},
      {id:1, projeto: 'Conta Corrente Parametrizada - CCP', idColider: 1, idEmpresa: 1, active: true},
      {id:2, projeto: 'Vistoria Mobile - VM', idColider: 2, idEmpresa: 1, active: true},
      {id:3, projeto: 'Registro de passagem Automática - RPA', idColider: 1, idEmpresa: 1, active: true},
      {id:4, projeto: 'ITCD', idColider: 1, idEmpresa: 2, active: true},
      {id:5, projeto: 'Arrecadação', idColider: 1, idEmpresa: 3, active: true},
    ],

  }),
  getters: {
    readEmpresa(){
      return this.empresas
    },
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
    },
  },
});