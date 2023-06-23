<template>
    <div>
        <v-btn variant="text" to="/profisco"><v-icon>mdi-chevron-left</v-icon>Voltar</v-btn>
        <div class="d-flex justify-space-between align-center">
            <h1 class="mb-3">Projetos</h1>
            <h4>Nome da empresa</h4>
        </div>

        <div class="d-flex">
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
        </div>
        <v-divider></v-divider>
        <div class="mt-5">
            <div 
                class="projeto"
                v-for="item, i in 4" :key="i"
            >
                <ProfiscoEmpresaItemProject />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                listProjects: [],
                project: {
                    name: '',
                    chamados: []
                },
            }
        },
        methods:{
            addProject(item){
                this.listProjects.push(item)
                this.project.name = ''
            }
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