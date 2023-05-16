<template>
  <v-card
    class="mx-auto"
    variant="flat"
  >
  <v-card-title>Lista de Solicitações</v-card-title>
  <v-card-item>
    <v-btn
      :icon="reverse ? 'mdi-order-numeric-ascending' : 'mdi-order-numeric-descending'"
      rounded="sm"
      elevation="4"
      variant="tonal"
      density="compact"
      @click="reverse = !reverse"
    />
  </v-card-item>
  <v-card-item>
    <v-list density="compact">
      <v-list-item
        v-for="item, i in listChamados" :key="i"
        lines="two"
        class="border my-1"
      >
        <template v-slot:prepend>
          <span class="pr-5 text">
            {{ item.ordem }}
          </span>
        </template>
        <v-list-item-title> {{nameProject(item.idProject)}}</v-list-item-title>
        <v-list-item-subtitle>
          {{ item.textSolic }}
        </v-list-item-subtitle>
       
        <template v-slot:append>
          <span class="d-none d-sm-flex">
            {{ nameConsultor(item.consultor) }}
          </span>
          <div class="d-flex flex-column ml-5">
            <v-btn 
              color="blue"
              rounded="0"
              class="mx-1 px-1"
              size="x-small"
              :disabled="item.ordem == 1"
              @click="upList(item)"
            >
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
            <v-btn 
              color="red"
              rounded="0"
              class="mx-1 px-1"
              size="x-small"
              :disabled="item.ordem == maxOrdem"
              @click="downList(item)"
            >
              <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-card-item>
  </v-card>
</template>
<script>
    import { useChamadosStore } from '@/stores/ChamadosStore'
    const chamadosStore = useChamadosStore()

    import { useProjetosStore } from '@/stores/ProjetosStore'
    const projetosStore = useProjetosStore()

    import { useConsultoresStore } from '@/stores/ConsultoresStore'
    const consultorStore = useConsultoresStore()

export default {
  data: () => ({
    reverse: true,
  }),
  computed:{
    listChamados(){
        return chamadosStore.readChamados.sort(this.order) 
    },
    listProjetos(){
        return projetosStore.readProjetos
    },
    listConsultor(){
      return consultorStore.readConsultores
    },
    maxOrdem(){
      let list = this.listChamados.map( x => x.ordem)
      let maior = Math.max.apply(null, list );
      return maior
    }
  },
  methods:{
    order(a, b){        
        return this.reverse
        ? a.ordem -  b.ordem
        : b.ordem -  a.ordem
    },
    nameProject(item){
      const nameProject = this.listProjetos.find(x => x.id == item)
      return nameProject.projeto
    },
    nameConsultor(item){
      const list = this.listConsultor.find( x => x.id == item)
      return list.name.split(' ')[0]
    },
    upList(item){
      let idSeguinte = this.listChamados.find(x => x.ordem == item.ordem - 1)
      let ordem1 = idSeguinte.ordem
      let ordem2 = item.ordem
      idSeguinte.ordem = ordem2 
      item.ordem = ordem1
    },
    downList(item){
      let idSeguinte = this.listChamados.find(x => x.ordem == item.ordem + 1)
      let ordem1 = idSeguinte.ordem
      let ordem2 = item.ordem
      idSeguinte.ordem = ordem2 
      item.ordem = ordem1
    }
  }
}
</script>