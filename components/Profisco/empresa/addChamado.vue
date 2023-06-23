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
                <h2>Novo Chamado</h2>
                <h3>Nome do projeto</h3>
            </div>
            <v-form>
                <v-text-field
                    label="Módulo"
                    variant="outlined"
                    density="comfortable"
                ></v-text-field>
                <v-textarea
                    label="Descrição"
                    variant="outlined"
                    density="comfortable"
                ></v-textarea>
                <v-btn block color="primary">Incluir</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props:{
        project: false
    }
  }
</script>

<style scoped>

</style>