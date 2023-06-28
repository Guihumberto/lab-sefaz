import { defineStore } from "pinia";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";

export const useProjetosStore = defineStore("projetos", {
  state: () => ({
    empresas: [],
    projetos:[],
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
        id: Date.now(),
        projeto: item.name,
        abrevProjeto: '',
        idLider: null,
        idColider: null, 
        idEmpresa: item.idEmpresa,
        active: true,
        dateCreate: Date.now()
      }
      this.projetos.push(projeto)
    },
    carga(){
      this.cargaProjetos()
      this.cargaEmpresa()
    },
    cargaProjetos(){
      const db = getDatabase();
      const starCountRef = ref(db, 'comite/projetos');

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.projetos = []
        for (let id in data){
          this.projetos.push(data[id])
        }
      });
    },
    cargaEmpresa(){
      const db = getDatabase();
      const starCountRef = ref(db, 'comite/empresas');

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.empresas = []
        for (let id in data){
          this.empresas.push(data[id])
        }
      });
    }
  },
});