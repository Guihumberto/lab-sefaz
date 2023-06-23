<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="success"
            v-bind="props"
            variant="outlined"
            prepend-icon="mdi-account"
          >
            LOGIN
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center">
            <h2 class="mb-5">Login</h2>
            <v-form>
                <v-text-field
                    label="CPF"
                    variant="outlined"
                    density="comfortable"
                ></v-text-field>
                <v-btn block color="primary">Continuar</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Esqueci a senha</v-btn>
          </v-card-actions>
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
  }
</script>

<style scoped>

</style>