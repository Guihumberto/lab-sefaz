import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => ({
    users:[
      {id:1, cpf:111111, name: 'Arão Alves de Farias', email: 'arao.farias@sefaz.ma.gov.br', active: true},
      {id:2, cpf:222222, name: 'Nielson de Jesus Lima Rocha', email: 'nielson.rocha@sefaz.ma.gov.br', active: true},
      {id:2, cpf: '01791743390', name: 'João Humberto Silva Ribeiro Júnior', email: 'joao.junior@sefaz.ma.gov.br', active: true},
    ],
    user: {
      id: null,
      cpf: null, 
      name: null,
      email: null
    },
    isLogin: false
  }),
  getters: {
    readUsers(){
      return this.users
    },
    readUser(){
      return this.user
    },
    readLogin(){
      return this.isLogin
    }
  },
  actions: {
    login(item){
      let user = this.readUsers.find(x => x.cpf == item)
      if(user) {
        this.isLogin = true
        console.log('logado', this.isLogin)
      }
    },
    logout(){
      this.isLogin = false
    }
  },
});