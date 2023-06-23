<template>
  <v-card
    class="mx-auto"
    variant="flat"
  >
  <v-card-title>Lista de Solicitações</v-card-title>
  <v-card-item>
    <!-- filtros -->
    <div class="d-flex justify-space-between">
      <div class="d-flex w-100">
        <v-select
          label="Consultor"
          density="compact"
          :items="listConsultor"
          item-title="name"
          item-value="id"
          style="max-width: 400px;"
          v-model="filterConsult"
        ></v-select>
        <v-select
          label="Status"
          density="compact"
          :items="listStatus"
          item-title="name"
          item-value="id"
          style="max-width: 400px;"
          v-model="filterStatus"
          class="ml-2"
        ></v-select>
        <v-autocomplete
          label="Projetos"
          density="compact"
          class="ml-4"
          style="max-width: 400px;"
          :items="listProjetos"
          item-title="projeto"
          item-value="id"
          v-model="filterProject"
        ></v-autocomplete>
      </div>
      <v-btn
        :icon="reverse ? 'mdi-order-numeric-ascending' : 'mdi-order-numeric-descending'"
        rounded="sm"
        elevation="4"
        variant="tonal"
        density="compact"
        @click="reverse = !reverse"
        class="mx-2"
      />
    </div>
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
        <v-list-item-title> 
          {{ nameProject(item.idProject) }}
          <v-chip density="compact" :color="colorStatus(item.status)">
            {{ nameStatus(item.status) }}
          </v-chip>
        </v-list-item-title>
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
    filterConsult: 0,
    filterProject: 0,
    filterStatus: 6
  }),
  computed:{
    listChamados(){
        let list = chamadosStore.readChamados.sort(this.order) 

        if(this.filterConsult){
          list = list.filter(x => x.consultor == this.filterConsult)
        }

        if(this.filterProject){
          list = list.filter(x => x.idProject == this.filterProject)
        }

        if(this.filterStatus != 6){
          list = list.filter(x => x.status == this.filterStatus)
        }

        return list
    },
    listProjetos(){
        return projetosStore.readProjetos
    },
    listConsultor(){
      return consultorStore.readConsultores
    },
    listStatus(){
      return chamadosStore.readStatus
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
    nameStatus(item){
      const nameStatus = this.listStatus.find(x => x.id == item)
      return nameStatus.name
    },
    colorStatus(item){
      switch(item){
        case 0:
          return 'error'
          break;
        case 1:
          return 'primary'
          break;
        case 2:
          return 'warning'
          break;
        case 3:
          return 'red'
          break;
        case 4:
          return 'red'
          break;
        case 5:
          return 'success'
          break;
        default: 'blue'
      }
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