<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            size="small" 
            color="error"
            v-bind="props"
            variant="outlined"
            class="mr-1"
          >
            Exluir
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center mb-5">
            <div class="text-left mb-5 bg-red-lighten-5 pa-3">
                <h2>Excluir Projeto</h2>
                <h3>Nome do projeto</h3>
            </div>
           <div class="text-left">
            <p>O projeto será excluído junto com os chamados a ele vinculados</p>
            <p>Tem certeza que deseja excluir esse projeto?</p>
            <div class="my-5 text-center">
              <v-btn color="grey" flat>Não</v-btn>
              <v-btn class="ml-2" color="error" flat>Excluir</v-btn>
            </div>
           </div>
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