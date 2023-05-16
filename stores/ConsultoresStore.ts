import { defineStore } from "pinia";

export const useConsultoresStore = defineStore("consultores", {
  state: () => ({
    consultores:[
      {id:1, cpf:874838, name: 'Fulano', active: true},
      {id:2, cpf:2, name: 'Cicrano', active: true},
    ],

  }),
  getters: {
    readConsultores(){
      return this.consultores
    }
  },
  actions: {
    addConsultore(item){
      let consultor = {
        id: item.id,
        cpf: item.cpf,
        name: item.name,
        active: true
      }
      this.consultores.push(consultor)
    }
  },
});