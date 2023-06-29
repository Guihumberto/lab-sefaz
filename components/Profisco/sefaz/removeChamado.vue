<template>
    <div class="text-left">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            size="small"
            v-bind="props"
            variant="text"
            flat
          >
            Remover
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left mb-5 bg-blue-lighten-5 pa-3">
                <h2>Remover</h2>
                <h3>{{ project.textSolic }}</h3>
            </div>
            <p class="text-left pb-5 pl-2">Confirma a exclusão deste chamado?</p>
            <v-form @submit.prevent="deleteChamado()" ref="form">
              <v-btn @click="dialog = false" variant="outlined">Não</v-btn>
              <v-btn color="error" flat class="ml-2" type="submit">Excluir</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
import { useConsultoresStore } from '@/stores/ConsultoresStore'
const consultorStore = useConsultoresStore()
import { useChamadosStore } from '@/stores/ChamadosStore'
const chamadosStore = useChamadosStore()

  export default {
    data () {
      return {
        dialog: false,
        filterConsult: 0
      }
    },
    props:{
        project: false
    },
    computed:{
      listConsultor(){
        return consultorStore.readConsultores
      },
      listConsultorMod(){
        let list = this.listConsultor
        let newList = [
          {id: 0, name: 'Escolha o consultor'}
        ]
        list.forEach(x => {
          if(x.id) {
            newList.push(x)
          }
        })

        return newList
      }
    },
    methods: {
      async deleteChamado(){
        const { valid } = await this.$refs.form.validate()
          if(valid){
              chamadosStore.removeFb(this.project)
              this.dialog = false
          }
      }
    },
  }
</script>

<style scoped>

</style>