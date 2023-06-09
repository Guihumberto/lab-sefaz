<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            flat
          >
            <v-icon color="primary">mdi-square-edit-outline</v-icon>
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left mb-5 bg-blue-lighten-5 pa-3">
                <h3>{{ nameProject(project.idProject)}}</h3>
                <p>Descrição: {{ project.textSolic }}</p>
                <p>Status : {{ nameStatus(project.status) }}</p>
            </div>
            <div v-if="project.status == 5">
              Chamado encontra-se com status <v-chip color="success">CONCLUÍDO</v-chip>  <br>
              Deseja reabrir o chamado ? <a @click.prevent="changeStatus(1)" class="text-blue">Sim</a>
            </div>
            <div v-else>
              <div class="mb-5">
                <v-btn 
                  color="blue"
                  v-if="project.status == 0"
                  @click.prevent="changeStatus(1)"
                >Iniciar a resolução</v-btn> <br>
                <div class="formConclusion">
                  <v-form 
                    @submit.prevent="changeStatus(5)"
                    v-if="project.status != 0"
                    >
                    <v-text-field
                        label="Data da conclusão"
                        type="date"
                        variant="outlined"
                        density="comfortable"
                        style="max-width: 200px;"
                        :rules="[rules.required]"
                        v-model.trim="completionDate"
                    ></v-text-field>
                    <v-btn 
                      class="my-2" 
                      color="success"
                      type="submit"
                      :disabled="!completionDate"
                    >Concluir chamado</v-btn> <br>
                  </v-form>
                  <v-menu 
                    v-if="project.status != 0"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="primary"
                        v-bind="props"
                        variant="text"
                        size="small"
                      >
                        Informar outro status
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :value="index"
                        @click.prevent="changeStatus(item.id)"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
                <div class="text-left mt-5">
                  <v-btn 
                  v-if="project.status != 0"
                    @click="infoAdd = !infoAdd"
                    variant="text" size="small">Informações adicionais</v-btn>
                </div>
              </div>
              <div v-show="infoAdd">
                <div v-if="!project.prevdate">
                  <v-form 
                    @submit.prevent="infoAddUpdate()"
                    class="border pa-5" v-if="project.status != 0" ref="form">
                      <v-text-field
                          label="Previsão da conclusão"
                          type="date"
                          variant="outlined"
                          density="comfortable"
                          :rules="[rules.required]"
                          v-model.trim="infoUpdate.prevdate"
                      ></v-text-field>
                      <!-- <v-textarea
                          label="Observação"
                          variant="outlined"
                          density="comfortable"
                          v-if="!project.textObs"
                          v-model.trim="infoUpdate.textObs"
                      ></v-textarea> -->
                      <v-btn type="submit" block color="primary">Salvar</v-btn>
                  </v-form>
                </div>
              </div>
              <div class="d-flex justify-space-between align-center" v-if="project.prevdate">
                  <p>
                    <span class="font-weight-bold">Previsão de Conclusão: </span>
                    {{ project.prevdate }}
                  </p> 
                  <v-btn 
                    variant="outlined" class="mr-1"
                    @click="editPrevDate()"
                  >
                    <v-icon>mdi-calendar-edit</v-icon>
                  </v-btn>
                </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
  import { useChamadosStore } from '@/stores/ChamadosStore'
  const chamadosStore = useChamadosStore()

  import { useProjetosStore } from '@/stores/ProjetosStore'
  const projetosStore = useProjetosStore()

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  export default {
    data () {
      return {
        dialog: false,
        infoAdd: false,
        completionDate: '',
        infoUpdate:{
          prevdate: this.project.prevdate,
          textObs: this.project.textObs
        },
        items: [
          {id: 0, title: 'Aguardando'},
          {id: 2, title: 'Validação'},
          {id: 3, title: 'Impedimento/Pendência'}, 
          {id: 4, title: 'Cancelado'},
        ],
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
        },
      }
    },
    props:{
        project: Object
    },
    computed:{
      listStatus(){
        return chamadosStore.readStatus
      },
      listProjetos(){
        return projetosStore.readProjetos
      },
    },
    methods:{
      changeStatus(status){
        this.project.status = status
        if(status == 5){
          this.project.completionDate = this.completionDate
        }
        chamadosStore.updateFb(this.project)
      },
      nameStatus(item){
        const nameStatus = this.listStatus.find(x => x.id == item)
        return nameStatus.name
      },
      nameProject(item){
        const nameProject = this.listProjetos.find(x => x.id == item)
        return nameProject.projeto
      },  
      async infoAddUpdate(){
        const { valid } = await this.$refs.form.validate()
        if(valid){
          this.project.prevdate = this.infoUpdate.prevdate
          chamadosStore.updateFb(this.project)
        }
      },
      editPrevDate(){
        this.project.prevdate = ''
        this.infoAdd = true
      }
    }
  }
</script>

<style scoped>
.formConclusion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>