<template>
  <div>
    <div class="menuFilter">
      <v-select
        label="Status"
        density="compact"
        :items="listStatus"
        item-title="name"
        item-value="id"
        v-model="filterStatus"
        class="formInput"
      ></v-select>
      <v-autocomplete
        label="Projetos"
        density="compact"
        class="ml-2 formInput"
        :items="listProjetos"
        item-title="projeto"
        item-value="id"
        v-model="filterProject"
      ></v-autocomplete>
      <v-select
        label="Consultor"
        density="compact"
        :items="listConsultor"
        item-title="name"
        item-value="id"
        v-model="filterConsult"
        class="ml-2 formInput"
      ></v-select>
    </div>
    <v-checkbox label="Ocultar Concluídos" v-model="filterConcluidos"></v-checkbox>
  </div>
  <v-table hover>
    <thead>
      <tr>
        <th class="text-center">
          #
        </th>
        <th class="text-left">
          Prioridade
        </th>
        <!-- <th class="text-left">
          Nº Chamado
        </th> -->
        <th class="text-left">
          Descrição
        </th>
        <th class="text-left">
          Projeto
        </th>
        <th class="text-left">
          Empresa
        </th>
        <th class="text-center">
          Status
        </th>
        <!-- <th class="text-left">
          Data de Previsão
        </th> -->
        <th class="text-center">
          Ação
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item, i in listChamados"
        :key="item.name"
      >
        <td class="text-center"> 
          <v-icon color="success" size="small">mdi-arrow-up</v-icon>
        </td>
        <td class="text-center">{{ item.ordem }}</td>
        <!-- <td>{{ item.nrocham }}</td> -->
        <td>{{ item.textSolic }}</td>
        <td> {{ nameProject(item.idProject).projeto }}</td>
        <td> {{ nameEmpresa(nameProject(item.idProject).idEmpresa) }}</td>
        <td class="text-center"><v-chip density="compact" :color="colorStatus(item.status)">
          {{ nameStatus(item.status) }}
        </v-chip></td>
        <!-- <td>{{ item.prevdate }}</td> -->
        <td class="text-center">
          <profisco-consultor-change-status :project="item" />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
  import { useChamadosStore } from '@/stores/ChamadosStore'
  const chamadosStore = useChamadosStore()

  import { useProjetosStore } from '@/stores/ProjetosStore'
  const projetosStore = useProjetosStore()

  import { useConsultoresStore } from '@/stores/ConsultoresStore'
  const consultorStore = useConsultoresStore()

export default {
  data () {
    return {
      filterConcluidos: false,
      filterConsult: 0,
      filterProject: 0,
      filterStatus: 6,
      reverse: true,
    }
  },
  computed:{
    listChamados(){
      let list = chamadosStore.readChamados.sort(this.order) 

      if(this.filterConcluidos){
        list = list.filter(x => x.status != 5)
      }

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
    listEmpresa(){
      return projetosStore.readEmpresa
    }
  },
  methods:{
    nameProject(item){
      const nameProject = this.listProjetos.find(x => x.id == item)
      return nameProject
    },
    nameEmpresa(item){
      const nameEmpresa = this.listEmpresa.find(x => x.id == item)
      return nameEmpresa.name
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
    order(a, b){        
        return this.reverse
        ? a.ordem -  b.ordem
        : b.ordem -  a.ordem
    },
  }
}
</script>

<style scoped>
.menuFilter{
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
}
.formInput {
  max-width: 33,33%;
}
@media (max-width: 400px) {
.menuFilter {
  flex-direction: column;
}
.formInput {
  width: 100%;
}
}
</style>