<template>
    <div>
        <v-card variant="flat" class="border">
            <v-card-title class="titleheading bg-grey">
                <h5 class="text-h5">Insirir novo</h5>
                <v-btn @click="$emit('close')" variant="text" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-item>
                <v-form class="pa-5" @submit.prevent="saveServidor(servidor)">
                    <v-text-field 
                        label="Matrícula"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite a matricula"
                        v-model="servidor.name"
                        clearable
                    />
                    <v-text-field 
                        label="Nome"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o nome completo"
                        v-model="servidor.mat"
                        clearable
                    />
                    <v-btn
                        color="primary"
                        block
                        type="submit"
                    >Inserir</v-btn>
                </v-form>
            </v-card-item>
            <v-card-item>
                <v-list>
                    <v-list-item class="border-b" v-for="item, i in listServidores.slice(0, 4)" :key="i">
                        {{ item.mat }} - {{ item.name }}
                    </v-list-item>
                    <v-list-item class="text-center">
                        <v-btn variant="text" prepend-icon="mdi-plus">Ver mais</v-btn>
                    </v-list-item>
                </v-list>
            </v-card-item>
        </v-card>
    </div>
</template>

<script>
    import { useServidoresStore } from '@/stores/ServidoresStore'
    const servidoresStore = useServidoresStore()

    export default {
        data(){
            return{
                servidor:{
                    id: null,
                    mat: null,
                    name: ''
                }
            }
        },
        computed:{
            listServidores(){
                return servidoresStore.readServidores
            }
        },
        methods:{
            saveServidor(item){
                servidoresStore.addServidor(item)
                this.clear()
            },
            clear(){
                this.servidor = {
                    id: null,
                    mat: null,
                    name: ''
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