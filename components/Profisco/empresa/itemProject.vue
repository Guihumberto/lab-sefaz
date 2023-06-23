<template>
    <div>
        <div class="d-flex justify-space-between align-self-center">
            Nome do projeto (5)
            <v-btn 
                @click="details = !details"
                class="text" flat density="small">
                Detalhes 
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <div v-show="details">
            <div class="d-flex justify-end mt-5">
                <ProfiscoEmpresaAddChamado />
            </div>
            <v-list class="border mt-2">
                <v-list-item>
                    <template v-slot:prepend>
                        <div class="mr-2">
                            #
                        </div>
                        <div class="mr-2">
                            P
                        </div>
                    </template>
                    <v-list-item-title>Descrição</v-list-item-title>
                </v-list-item>
                <v-list-item v-for="cha, k in 5" :key="k">
                    <template v-slot:prepend>
                        <div class="mr-2">
                           <v-icon color="success">mdi-chevron-up</v-icon>
                           <v-icon color="error">mdi-chevron-down</v-icon>
                        </div>
                        <div class="mr-2">
                            {{1 + k}}
                        </div>
                    </template>
                    <v-list-item-title>Nome do chamado</v-list-item-title>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                details: false,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>