import { defineStore } from "pinia";

export const useConsultoresStore = defineStore("consultores", {
  state: () => ({
    consultores:[
      {id:0, cpf:'000000', name: 'Todos',active: true},
      {id:1, cpf:111111, name: 'Arão Alves de Farias', email: 'arao.farias@sefaz.ma.gov.br', active: true},
      {id:2, cpf:222222, name: 'Nielson de Jesus Lima Rocha', email: 'nielson.rocha@sefaz.ma.gov.br', active: true},
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