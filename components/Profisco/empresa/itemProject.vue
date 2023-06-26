<template>
    <div>
        <div class="d-flex justify-space-between align-self-center">
            {{ project.projeto }} ({{ listChamadosFilter.length }})
            <v-btn 
                @click="details = !details"
                class="text" flat density="small">
                Detalhes
                <v-icon>{{ details ? 'mdi-chevron-down':'mdi-chevron-right'}}</v-icon>
            </v-btn>
        </div>
        <div v-show="details">
            <div class="d-flex justify-space-between mt-5" v-if="project.id">
                <div class="d-flex">
                    <ProfiscoEmpresaEditarProjeto :project="project" />
                    <ProfiscoEmpresaDeleteProject :project="project" />
                </div>
                <ProfiscoEmpresaAddChamado :project="project" />
            </div>
            <v-list class=" mt-2" v-if="listChamadosFilter.length">
                <v-list-item>
                    <template v-slot:prepend>
                        <div class="mr-2 text-center" style="width: 50px;">
                            #
                        </div>
                        <div class="mr-2">
                            P
                        </div>
                    </template>
                    <v-list-item-title>Descrição</v-list-item-title>
                </v-list-item>
                <v-list-item 
                    v-for="cha, k in listChamadosFilter" :key="k" 
                    class="border-b chamados"
                >
                    <template v-slot:prepend>
                        <div class="mr-2">
                           <v-icon color="success" @click="upList(cha)">mdi-chevron-up</v-icon>
                           <v-icon color="error" @click="downList(cha)">mdi-chevron-down</v-icon>
                        </div>
                        <div class="mr-2">
                            {{1 + k}} | {{cha.ordemCham }}
                        </div>
                    </template>
                    <div class="px-2">
                        <p>{{ cha.textSolic }}</p>
                    </div>
                    <template v-slot:append>
                        <v-menu v-if="project.id">
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    variant="flat"
                                    v-bind="props"
                                    icon="mdi-dots-vertical"
                                >
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
                    </template>
                </v-list-item>
            </v-list>
            <v-alert v-else class="mt-2" icon="mdi-information-outline">
                Não há chamados abertos.
            </v-alert>
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
                reverse: true,
                items: [
                    { id: 1, title: 'Editar' },
                    { id: 2, title: 'Apagar' },
                ],
            }
        },
        props:{
            project: Object
        },
        computed:{
            listChamadosFilter(){
                let list = this.listChamados.sort(this.order) 

                if(this.project.id){
                    list = list.filter(x => x.idProject == this.project.id)
                }
                return list
            },
            listChamados(){
                return chamadosStore.readChamados
            }
        },
        methods:{
            upList(item){
                let idSeguinte = this.listChamadosFilter.find(x => x.ordemCham == item.ordemCham - 1)
                let ordem1 = idSeguinte.ordemCham
                let ordem2 = item.ordemCham
                idSeguinte.ordemCham = ordem2 
                item.ordemCham = ordem1
            },
            downList(item){
                let idSeguinte = this.listChamadosFilter.find(x => x.ordemCham == item.ordemCham + 1)
                let ordem1 = idSeguinte.ordemCham
                let ordem2 = item.ordemCham
                idSeguinte.ordemCham = ordem2 
                item.ordemCham = ordem1
            },
            order(a, b){        
                return this.reverse
                ? a.ordemCham -  b.ordemCham
                : b.ordemCham -  a.ordemCham
            },
        }
    }
</script>

<style scoped>
.chamados p {
    transition: .5s;
}
</style>