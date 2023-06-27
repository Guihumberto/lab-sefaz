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
            variant="outlined"
            flat
          >
            Direcionar
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left mb-5 bg-blue-lighten-5 pa-3">
                <h2>Direcionar</h2>
                <h3>{{ project.textSolic }}</h3>
            </div>
            <p class="text-left pb-5 pl-2">Selecione o consultor.</p>
            <v-form @submit.prevent="updateChamado()" ref="form">
              <v-select
                label="Consultor"
                density="compact"
                variant="outlined"
                :items="listConsultorMod"
                item-title="name"
                item-value="id"
                v-model="filterConsult"
                class="formFilter"
              ></v-select>
              <v-btn type="submit" :disabled="!filterConsult" block color="primary">Direcionar</v-btn>
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
      async updateChamado(){
        const { valid } = await this.$refs.form.validate()
          if(valid){
              this.project.consultor = this.filterConsult
              chamadosStore.updateChamado(this.project)
              this.filterConsult = 0
          }
      }
    },
  }
</script>

<style scoped>

</style>