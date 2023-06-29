<template>
    <div class="text-left">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            size="small" 
            variant="text"
            v-bind="props"
          >
           Editar
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left mb-5 bg-blue-lighten-5 pa-3">
                <h2>Editar Chamado</h2>
                <h3>Inclusão</h3>
            </div>
            <v-form @submit.prevent="addChamado()" ref="form">
                <v-autocomplete
                  label="Projetos"
                  variant="outlined"
                  density="comfortable"
                  :items="listProjetos"
                  item-title="projeto"
                  item-value="id"
                  v-model.trim="chamado.idProject"
                  clearable
                  :rules="[rules.required]"
                ></v-autocomplete>
                <v-text-field
                    label="Número do Chamado"
                    variant="outlined"
                    density="comfortable"
                    v-model.trim="chamado.nrocham"
                    class="my-2"
                ></v-text-field>
                <v-text-field
                    label="Módulo"
                    variant="outlined"
                    density="comfortable"
                    v-model.trim="chamado.mod"
                ></v-text-field>
                <v-textarea
                    label="Solicitação"
                    variant="outlined"
                    density="comfortable"
                    v-model.trim="chamado.textSolic"
                    :rules="[rules.required]"
                ></v-textarea>
                <v-radio-group
                  v-model.trim="chamado.consultor"
                  inline
                  :rules="[rules.required]"
                  class="mt-2"
                >
                  <v-radio 
                    v-for="item, i in listConsultor" 
                    :key="i" 
                    :label="item.name"
                    :value="item.id"
                  >
                  </v-radio>
                </v-radio-group>
                <v-btn 
                  type="submit"
                  block 
                  color="primary"
                  class="my-2"
                >
                  Incluir
                </v-btn>
            </v-form>
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

  import { useConsultoresStore } from '@/stores/ConsultoresStore'
  const consultorStore = useConsultoresStore()


  export default {
    data () {
      return {
        dialog: false,
        chamado: {
          nrocham: this.project.nrocham,
          textSolic: this.project.textSolic,
          mod: this.project.mod,
          idProject: this.project.idProject,
          consultor: this.project.consultor
        },
        rules:{
            required: (value) => !!value || "Campo obrigatório",
            email: (v) => /.+@/.test(v) || "Deve ser um e-mail válido",
            minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
        },
      }
    },
    props:{
        project: false
    },
    computed:{
      listProjetos(){
        return projetosStore.readProjetos.filter(x => x.id)
      },
      listConsultor(){
        return consultorStore.readConsultores.filter(x => x.id)
      },
    },
    methods: {
      async addChamado(){
        const { valid } = await this.$refs.form.validate()
          if(valid){

            this.project.nrocham = this.chamado.nrocham
            this.project.textSolic = this.chamado.textSolic
            this.project.mod = this.chamado.mod
            this.project.idProject = this.chamado.idProject
            this.project.consultor = this.chamado.consultor

            chamadosStore.updateFb(this.project)
            this.clearChamado()
            this.dialog = false
          }
      },
      clearChamado(){
          this.chamado = {
            nrocham: null,
            textSolic: '',
            mod: '',
            idProject: null,
            consultor: null
          }
        }
    },
  }
</script>

<style scoped>

</style>