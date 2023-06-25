<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            size="small" 
            color="primary"
            v-bind="props"
          >
            novo chamado
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left mb-5 bg-blue-lighten-5 pa-3">
                <h2>{{ project.projeto }}</h2>
                <h3>Incluir solicitação</h3>
            </div>
            <v-form @submit.prevent="addChamado()" class="border pa-5" ref="form">
                <v-text-field
                    label="Número do Chamado"
                    variant="outlined"
                    density="comfortable"
                    placeholder="Informe o número do chamado se houver"
                    v-model.trim="chamado.nrocham"
                ></v-text-field>
                <v-text-field
                    label="Módulo"
                    variant="outlined"
                    density="comfortable"
                    placeholder="Informe o módulo do sistema se houver"
                    v-model.trim="chamado.mod"
                ></v-text-field>
                <v-textarea
                    label="Solicitação"
                    variant="outlined"
                    density="comfortable"
                    placeholder="Texto da solicitação"
                    :rules="[rules.required, rules.minname]"
                    v-model.trim="chamado.textSolic"
                ></v-textarea>
                <v-btn type="submit" block color="primary" class="mt-5">Incluir</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
  import { useChamadosStore } from '@/stores/ChamadosStore'
  const chamadosStore = useChamadosStore()

  export default {
    data () {
      return {
        dialog: false,
        chamado: {
          nrocham: null,
          textSolic: '',
          mod: '',
          idProject: 0
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
    methods: {
        async addChamado(){
          const { valid } = await this.$refs.form.validate()
          if(valid){
            this.chamado.idProject = this.project.id
            chamadosStore.addChamados(this.chamado)
            this.clearChamado()
            this.dialog = false
          }
        },
        clearChamado(){
          this.chamado = {
            nrocham: null,
            textSolic: '',
            mod: '',
            idProject: 0
          }
        }
    },
  }
</script>

<style scoped>

</style>