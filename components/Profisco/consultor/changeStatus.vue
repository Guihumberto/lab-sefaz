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
            <v-icon color="primary">mdi-home</v-icon>
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
            <div class="mb-5">
              <v-btn color="blue">Iniciar a resolução</v-btn> <br>
              <div>
                <v-btn class="my-2" color="success">Concluir chamado</v-btn> <br>

                <v-menu>
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
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>

            </div>
            <v-form class="border pa-5">
                <v-text-field
                    label="Previsão da conclusão"
                    type="date"
                    variant="outlined"
                    density="comfortable"
                ></v-text-field>
                <v-textarea
                    label="Observação"
                    variant="outlined"
                    density="comfortable"
                ></v-textarea>
                <v-btn block color="primary">Salvar</v-btn>
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
        items: [
          { title: 'Impedimento' },
          { title: 'Pendência' },
          { title: 'Cancelado' },
        ],
      }
    },
    props:{
        project: false
    }
  }
</script>

<style scoped>

</style>