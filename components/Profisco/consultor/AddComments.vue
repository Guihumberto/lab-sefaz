<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        max-width="700"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            flat
          >
            <v-icon color="grey">mdi-comment-multiple-outline</v-icon>
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left py-5">
              {{ nameProject(project.idProject) }} <br>
              {{ project.textSolic }} <br>
              {{ nameStatus(project.status) }}
            </div>
            <v-form class="text-right" @click.prevent="addComment()" ref="form">
              <v-textarea
                label="Comentário"
                variant="outlined"
                v-model.trim="comment"
              ></v-textarea>
              <v-btn color="primary" type="submit" :disabled="!comment">Salvar</v-btn>
            </v-form>
            <v-timeline side="end" v-if="project.comment">
              <v-timeline-item
                v-for="item in project.comment"
                :key="item.id"
                dot-color="primary"
                size="small"
              >
                <v-alert
                  :value="true"
                  class="text-left d-flex"
                >
                <div>
                  {{ item.comment }} <br><br>
                  <small> <v-icon>mdi-calendar</v-icon> {{ new Date(item.id) }}</small> <br>
                  <div class="text-right">
                    <v-btn 
                      @click="deleteComment(item)"
                      color="error" size="small" 
                      variant="text" v-if="item.id != deleteId"
                      prepend-icon="mdi-delete">apagar
                    </v-btn>
                  </div>
                </div>
                <div class="text-center mt-5" v-if="item.id == deleteId">
                  <v-btn variant="outlined" class="mr-2" size="small" @click="deleteId = ''">Cancelar</v-btn>
                  <v-btn 
                    color="error" 
                    size="small"
                    @click="deleteFb(item)"
                  >Apagar</v-btn>
                </div>
                </v-alert>
              </v-timeline-item>
            </v-timeline>
            <v-alert class="mt-5" icon="mdi-information" v-else>
              Não há comentários adicionados neste chamado.
            </v-alert>
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
        comment: '',
        deleteId: ''
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
      addComment(){
        if(this.comment) {
          chamadosStore.addCommentFb(this.project, this.comment)
          this.comment = ''
        }
      },
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
      deleteComment(item){
        this.deleteId = item.id
      },
      deleteFb(item){
          chamadosStore.deleteCommenFb(this.project, item)
      }
    }
  }
</script>

<style scoped>

</style>