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
            <v-form 
                @submit.prevent="addProject(project)"
                class="d-flex" v-if="filterEmpresa"
                ref="form"
            >
                <v-text-field
                    label="Incluir novo projeto"
                    prepend-inner-icon="mdi-plus"
                    variant="outlined"
                    density="compact"
                    placeholder="Digite o nome do Projeto"
                    v-model.trim="project.name"
                    :rules="[rules.required, rules.minname]"
                    clearable
                >
                </v-text-field>
                <v-btn 
                    type="submit"
                    class="ml-2" 
                    color="success">
                    Incluir
                </v-btn>
            </v-form>
            <p class="text-error" v-else>Selecione uma empresa para incluir um projeto</p>
        </div>
        <v-divider></v-divider>
        <div class="mt-5">
            <div 
                class="projeto"
                v-for="item, i in listProjectsFilter" :key="i"
                v-if="listProjectsFilter.length"
            >
                <ProfiscoEmpresaItemProject :project="item" />
            </div>
            <v-alert 
                v-else
                icon="mdi-information-outline">
                Não há projetos cadastrados.
            </v-alert>
        </div>
    </div>
</template>

<script>
  import { useProjetosStore } from '@/stores/ProjetosStore'
  const projetosStore = useProjetosStore()

    export default {
        data(){
            return {
                filterEmpresa: 0,
                project: {
                    name: '',
                    idEmpresa: 0
                },
                rules:{
                    required: (value) => !!value || "Campo obrigatório",
                    email: (v) => /.+@/.test(v) || "Deve ser um e-mail válido",
                    minname: (v) => (v||'').length >= 4 || "Mínimo 4 caracteres",
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
            async addProject(item){
                const { valid } = await this.$refs.form.validate()
                if(valid){
                    this.project.idEmpresa = this.filterEmpresa
                    projetosStore.addProjeto(item)
                    this.project.name = ''
                    this.project.idEmpresa = 0
                }
            },
            nameEmpresa(item){
                const nameEmpresa = this.listEmpresas.find(x => x.id == item)
                return nameEmpresa.name
            },
        },
        setup(){
            definePageMeta({
                middleware: ["auth"]
            })
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