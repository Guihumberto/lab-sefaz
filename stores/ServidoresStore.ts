import { defineStore } from "pinia";

export const useServidoresStore = defineStore("servidores", {
  state: () => ({
    servidores:[
      {id:1, mat:874838, name: 'João Humberto Silva Ribeiro Júnior', active: true},
      {id:2, mat:2, name: 'Tainan Calixto', active: true},
      {id:3, mat:3, name: 'Cláudio Pablo', active: true},
      {id:4, mat:4, name: 'Thalys Arraes', active: true},
      {id:5, mat:5, name: 'Thiago Lopes', active: true},
      {id:6, mat:6, name: 'Adriano Rego', active: true},
      {id:7, mat:7, name: 'Wallysson', active: true},
      {id:8, mat:8, name: 'Alan Lima', active: true},
      {id:9, mat:9, name: 'Carlos Leite', active: true},
      {id:10, mat:10, name: 'Janilene', active: true},
    ],

  }),
  getters: {
    readServidores(){
      return this.servidores
    }
  },
  actions: {
    async cargaServidoresFB(){
      try {
          const res = await fetch('https://cotec-api-default-rtdb.firebaseio.com/profisco/servidores.json')
          const dataDB = await res.json()

          for (let id in dataDB){
              this.servidores.push(dataDB[id])
          } 
      } catch (error) {
          console.log(error)
      }
    },
    async addServidor(item){
      let servidor = {
        id: item.id,
        mat: item.mat,
        name: item.name,
        active: true
      }
      this.servidores.push(servidor)
      // firebase
      try{
        const res = await fetch(`https://cotec-api-default-rtdb.firebaseio.com/profisco/servidores/${servidor.id}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(servidor)
        })

        const dataDB = await res.json()
        console.log(dataDB);

      } catch(e) {
        console.log(e);
      }
    },
  },
});