<template>
    <div>
        <v-card variant="flat" class="border">
            <v-card-title class="titleheading bg-grey">
                <h5 class="text-h5">Insirir novo</h5>
                <v-btn @click="$emit('close')" variant="text" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-item>
                <v-form class="pa-5">
                    <v-text-field 
                        label="Projeto"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o nome do projeto"
                    />
                    <v-text-field 
                        label="Colíder"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o nome do projeto"
                    />
                    <v-text-field 
                        label="Consultoria"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o nome do projeto"
                    />
                    <v-btn
                        color="primary"
                        block
                    >Inserir</v-btn>
                </v-form>
            </v-card-item>
            <v-card-item>
                <v-list>
                    <v-list-item class="text-caption border-b" v-for="item, i in listProjetos.slice(0, 4)" :key="i">
                        {{ item.id }} - {{ item.projeto }}
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
    import { useProjetosStore } from '@/stores/ProjetosStore'
    const projetosStore = useProjetosStore()

    export default {
        computed:{
            listProjetos(){
                return projetosStore.readProjetos
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