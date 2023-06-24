<template>
    <div>
        <div class="d-flex justify-space-between align-self-center">
            {{ project.projeto }} ({{ listChamadosFilter.length }})
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
            <v-list class=" mt-2">
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
                <v-list-item v-for="cha, k in listChamadosFilter" :key="k" class="border-b">
                    <template v-slot:prepend>
                        <div class="mr-2">
                           <v-icon color="success">mdi-chevron-up</v-icon>
                           <v-icon color="error">mdi-chevron-down</v-icon>
                        </div>
                        <div class="mr-2">
                            {{1 + k}}
                        </div>
                    </template>
                    <div class="px-2">
                        <p>{{ cha.textSolic }}</p>
                    </div>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
    import { useChamadosStore } from '@/stores/ChamadosStore'
    const chamadosStore = useChamadosStore()

    export default {
        data(){
            return{
                details: false,
            }
        },
        props:{
            project: Object
        },
        computed:{
            listChamadosFilter(){
                let list = this.listChamados

                if(this.project.id){
                    list = list.filter(x => x.idProject == this.project.id)
                }

                return list
            },
            listChamados(){
                return chamadosStore.readChamados
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>