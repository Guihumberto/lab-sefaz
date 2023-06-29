import { defineStore } from "pinia";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set, remove, update } from "firebase/database";

export const useChamadosStore = defineStore("chamados", {
  state: () => ({
    status: [],
    chamados:[],
  }),
  getters: {
    readStatus(){
      return this.status
    },
    readChamados(){
      return this.chamados
    }
  },
  actions: {
    carga(){
      this.cargaStatus()
      this.cargaChamados()
    },
    cargaStatus(){
      const db = getDatabase();
      const starCountRef = ref(db, 'comite/status');

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.status = []
        for (let id in data){
          this.status.push(data[id])
        }
      });
    },
    cargaChamados(){
      const db = getDatabase();
      const starCountRef = ref(db, 'comite/chamados');

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.chamados = []
        for (let id in data){
          this.chamados.push(data[id])
        }
      });
    },
    addChamados(item){
      let maxTotal = this.qtdChamadosTotal()
      let max = this.qtdChamadosPorProjeto(item.idProject)
    
      let chamado = {
        id: Date.now(), 
        ordem: maxTotal + 1, 
        oldOrdem: maxTotal + 1,
        ordemCham: max + 1, 
        nrocham: item.nrocham, 
        textSolic: item.textSolic, 
        mod: item.mod, 
        textObs: '', 
        consultor: item.consultor, 
        priority: 1, 
        idProject: item.idProject, 
        prevdate: '', 
        status: 0
      }

      this.chamados.push(chamado)
      this.addFb(chamado)

    },
    qtdChamadosTotal(){
      let list = this.readChamados
      list = list.map(x => x.ordem)
      let max = Math.max(...list);
      return max
    },
    qtdChamadosPorProjeto(idProjeto){
      let list = this.readChamados.filter(x => x.idProject == idProjeto)
      list = list.map(x => x.ordemCham)
      let max = Math.max(...list);
      return max
    },
    // firebase
    addFb(item){
      const db = getDatabase();
      const link = ref(db, `comite/chamados/${item.id}`);
      set(link, item);
    },
    updateFb(item){
      const db = getDatabase();
      const link = ref(db, `comite/chamados/${item.id}`);
      update(link, item);
    },
    removeFb(item){
      const db = getDatabase();
      const link = ref(db, `comite/chamados/${item.id}`);
      remove(link)
    }
  },
  
});