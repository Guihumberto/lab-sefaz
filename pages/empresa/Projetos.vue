<template>
    <div>
        <v-btn variant="text" to="/profisco"><v-icon>mdi-chevron-left</v-icon>Voltar</v-btn>
        <div class="d-flex justify-space-between align-center">
            <h1 class="mb-3">Projetos</h1>
            <h4>{{ nameEmpresa(filterEmpresa) }}</h4>
            <v-autocomplete
                variant="outlined"
                density="compact"
                label="empresa"
                style="max-width: 200px;"
                :items="listEmpresas"
                item-title="name"
                item-value="id"
                v-model="filterEmpresa"
            ></v-autocomplete>
        </div>

        <div>
            <v-form class="d-flex" v-if="filterEmpresa">
                <v-text-field
                    label="Incluir novo projeto"
                    prepend-inner-icon="mdi-plus"
                    variant="outlined"
                    density="compact"
                    placeholder="Digite o nome do Projto"
                    v-model.trim="project.name"
                >
                </v-text-field>
                <v-btn 
                    @click="addProject(project)"
                    class="ml-2" color="success">Add</v-btn>
            </v-form>
            <p class="text-error" v-else>Selecione uma empresa para incluir um projeto</p>
        </div>
        <v-divider></v-divider>
        <div class="mt-5">
            <div 
                class="projeto"
                v-for="item, i in listProjectsFilter" :key="i"
            >
                <ProfiscoEmpresaItemProject :project="item" />
            </div>
        </div>
    </div>
</template>

<script>
  import { useProjetosStore } from '@/stores/ProjetosStore'
  const projetosStore = useProjetosStore()

    export default {
        data(){
            return {
                listProjects: [],
                filterEmpresa: 0,
                project: {
                    name: '',
                    chamados: []
                },
            }
        },
        computed:{
            listProjectsFilter(){
                let list = this.listProjetos
                if(this.filterEmpresa){
                    list = list.filter(x => x.idEmpresa == this.filterEmpresa)
                }
                return list
            },
            listEmpresas(){
                return projetosStore.readEmpresa
            },
            listProjetos(){
                return projetosStore.readProjetos
            }
        },
        methods:{
            addProject(item){
                this.listProjects.push(item)
                this.project.name = ''
            },
            nameEmpresa(item){
                const nameEmpresa = this.listEmpresas.find(x => x.id == item)
                return nameEmpresa.name
            },
        }
    }
</script>

<style scoped>
.projeto {
    padding: 10px 1rem;
    border: 2px solid grey;
    margin-bottom: .5rem;
    border-radius: 10px;
}
</style>