import { defineStore } from "pinia";
import { getDatabase, ref, onValue, set } from "firebase/database";

export const useConsultoresStore = defineStore("consultores", {
  state: () => ({
    consultores:[],
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
    },
    carga(){
      this.cargaConsultores()
    },
    cargaConsultores(){
      const db = getDatabase();
      const starCountRef = ref(db, 'comite/consultores');

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.consultores = []
        for (let id in data){
          this.consultores.push(data[id])
        }
      });
    }
  },
});