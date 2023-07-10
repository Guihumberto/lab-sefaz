<template>
    <div>
      <div class="menuFilter">
        <v-select
          label="Status"
          density="compact"
          :items="listStatus.filter(x => x.id != 5)"
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
      <!-- <v-checkbox label="Ocultar Concluídos" v-model="filterConcluidos"></v-checkbox> -->
      <v-btn 
        variant="text"
        @click="showConcluidos = !showConcluidos" 
        :append-icon="showConcluidos ? 'mdi-chevron-down':'mdi-chevron-right'">
        {{showConcluidos ? 'Ocultar' : 'Mostrar'}} Concluídos
      </v-btn>
    </div> 
    <v-expand-transition>
      <div v-if="showConcluidos" class="py-5">
        <h4>Chamados Finalizados</h4>
        <v-table hover>
          <thead>
            <tr>
              <!-- <th class="text-center">
                Ordem
              </th> -->
              <th class="text-left">
                Nº Chamado
              </th> 
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
              <th class="text-center">
                Data da Conclusão
              </th> 
              <!-- <th class="text-center">
                Consultor Responsável
              </th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item, i in listChamadosConcluidos"
              :key="item.name"
            >
              <!-- <td class="text-center"> 
                <v-icon 
                  :color="iconFila(item).color" 
                  class="mr-1"
                  size="small" 
                  :icon="iconFila(item).icon" />
                {{ item.ordem }}</td> -->
              <td>{{ item.nrocham }}</td>
              <td>{{ item.textSolic }}</td>
              <td> {{ nameProject(item.idProject).projeto }}</td>
              <td> {{ nameEmpresa(nameProject(item.idProject).idEmpresa) }}</td>
              <td class="text-center"><v-chip density="compact" :color="colorStatus(item.status)">
                {{ nameStatus(item.status) }}
              </v-chip></td>
              <td class="text-center">{{ item.completionDate.split('-').reverse().join('-') }}</td> 
              <!-- <td class="text-center">{{ nameConsultor(item.consultor) }}</td> -->
            </tr>
          </tbody>
        </v-table>
      </div>
    </v-expand-transition>
    <div class="box py-5">
      <h4>Chamados Abertos</h4>
        <div 
          class="list"
          v-for="item, i in listChamados"
          :key="item.name"
        >
            <!-- <div class="imgBx">
                <v-icon size="60">mdi-account</v-icon>
            </div> -->
            <div class="content">
                <div class="textContent">
                  <h4>{{ nameProject(item.idProject).projeto }}</h4>
                  <h5>
                    {{ nameEmpresa(nameProject(item.idProject).idEmpresa) }}
                    <v-chip density="compact" :color="colorStatus(item.status)">
                      {{ nameStatus(item.status) }}
                    </v-chip>
                  </h5>
                  <p>{{ item.textSolic }}</p>
                </div>
                <h2 class="rank">
                    <small> 
                      <v-icon 
                        :color="iconFila(item).color" 
                        class="mr-1"
                        size="small" 
                        :icon="iconFila(item).icon" />
                    </small>
                    {{ i+1 }}
                </h2>
            </div>
        </div>
    </div>
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
        filterConcluidos: true,
        filterConsult: 0,
        filterProject: 0,
        filterStatus: 6,
        reverse: true,
        showConcluidos: false
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
      },
      listChamadosConcluidos(){
        let list = chamadosStore.readChamados.filter(x => x.status == 5)
        return list.sort(this.order) 
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
        if(!item){
          return 'Não direcionado'
        }
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
      iconFila(item){
        
        if(item.ordem == item.oldOrdem){
          return {icon:'mdi-equal', color: 'blue'}
        } else if(item.ordem < item.oldOrdem) {
          return {icon:'mdi-arrow-up', color: 'success'}
        } else {
          return {icon:'mdi-arrow-down', color: 'error'}
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
.box{
    position: relative;
    min-width: 350px;
}
.box .list{
    position: relative;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
    overflow: hidden;
    background: rgb(233, 228, 228);
}
.box:hover .list {
    filter: blur(1.5px);
    opacity: 0.50;
}
.box .list:hover {
    box-shadow: -10px 20px 35px rgba(0,0,0,0.15);
    transform: scale(1.1);
    filter: blur(0px);
    opacity: 1;
}
.box .list .imgBx{
    background: #fff;
    margin-right: 10px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    width: 60px;
    height: 60px;
}
.box .list .imgBx .v-icon{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.box .list .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.box .list .content .textContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #333;
    transition: .5s;
}
.box .list:hover .content .textContent {
    margin-left: 30px;
}
.box .list .content .rank {
    display: flex;
    color: #03a9f4;
    transition: .5s;
    font-size: 2em;
}
.box .list .content .rank small {
    font-weight: 500;
    opacity: 0.25;
}
.box .list:hover .content .rank {
    margin-right: 30px;
}
.box .list .content h4 {
    line-height: 1.2em;
    font-weight: 600;
}
.box .list .content p {
    font-size: 0.75em;
}
@media (max-width: 500px) {
  .menuFilter {
    flex-direction: column;
  }
  .formInput {
    width: 100%;
  }
}
</style>