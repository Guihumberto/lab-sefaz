<template>
    <div>
        <v-card variant="flat" class="border">
            <v-card-title class="titleheading bg-grey">
                <h5 class="text-h5">Consultores</h5>
                <v-btn @click="$emit('close')" variant="text" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-item>
                <v-form class="pa-5">
                    <v-text-field 
                        label="CPF"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o cpf"
                    />
                    <v-text-field 
                        label="Nome Completo"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite o nome completo"
                    />
                    <v-btn
                        color="primary"
                        block
                    >Inserir</v-btn>
                </v-form>
            </v-card-item>
            <v-card-item>
                <v-list>
                    <v-list-item class="border-b" v-for="item, i in listConsultores" :key="i">
                        {{ item.cpf }} - {{ item.name }}
                    </v-list-item>
                </v-list>
            </v-card-item>
        </v-card>
    </div>
</template>

<script>
    import { useConsultoresStore } from '@/stores/ConsultoresStore'
    const consultoresStore = useConsultoresStore()

    export default {
        computed:{
            listConsultores(){
                return consultoresStore.readConsultores
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