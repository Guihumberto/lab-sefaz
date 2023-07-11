<template>
     <v-dialog
        v-model="dialog"
        width="500"
      >
      <v-card>
        <v-card-title>Informações adicionais</v-card-title>
        <v-card-text>

        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>

     </v-dialog>
</template>

<script>
    export default {
        data(){
            return{
                dialog: this.dialogInfoUpdate
            }
        },
        props:{
            dialogInfoUpdate: Boolean,
            project: true
        }
    }
</script>

<style lang="scss" scoped>

</style>