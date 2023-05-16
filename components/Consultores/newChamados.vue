<template>
    <div>
        <v-card variant="flat" class="border">
            <v-card-title class="titleheading bg-grey">
                <h5 class="text-h5">Insirir novo</h5>
                <v-btn @click="$emit('close')" variant="text" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-item>
                <v-form class="pa-5">
                    <v-select 
                        label="Projeto"
                        variant="outlined"
                        density="compact"
                    />
                    <v-textarea 
                        label="Solicitação"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o nome do projeto"
                        v-model="register.textSolicit"
                    />
                    <v-textarea 
                        label="Observação"
                        variant="outlined"
                        density="compact"
                        placeholder="Informações adicionais"
                        v-model="register.textObs"
                    />
                    <v-select 
                        label="Consultor"
                        variant="outlined"
                        density="compact"
                    />
                    <v-radio-group
                        v-model="register.priority"
                        inline
                        class="d-flex justify-center pb-5"
                    >
                        <v-radio
                            color="primary"
                            :label="item.name"
                            :value="item.id"
                            v-for="item, i in prioritys" :key="i"
                        ></v-radio>
                    </v-radio-group>
                    
                    <v-btn
                        color="primary"
                        block
                    >Inserir</v-btn>
                </v-form>
            </v-card-item>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                prioritys: [
                    {id: 1, name: 'Baixa'},
                    {id: 2, name: 'Média'},
                    {id: 3, name: 'Alta'},
                ],
                register:{
                    idProject: '',
                    textSolicit: '',
                    textObs: '',
                    priority: 1
                }
            }
        }
    }
</script>

<style scoped>
.titleheading{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>