<template>
    <div class="mainResumo">
        <v-card 
            variant="outlined"
            class="painel"
        >
            <v-card-text class="text-center">
                Total de Chamados
                <div class="my-5" style="font-size: 50px;">{{ listChamados.length }}</div>
                ({{ listChamados.filter(x => x.status == 5).length }}  concluídos)
            </v-card-text>
        </v-card>
        <v-card 
            variant="outlined"
            class="painel"
        >
            <v-card-text class="d-flex justify-center">
                <div>
                    Concluídos: <br>
                    Em andamento: <br>
                    Em validação: <br>
                    Aguardando: <br>
                    Impedimentos/pendência: <br>
                </div>
                <div class="text-center" style="min-width: 100px;">
                    {{ listChamados.filter(x => x.status == 5).length }} <br>
                    {{ listChamados.filter(x => x.status == 1).length }} <br>
                    {{ listChamados.filter(x => x.status == 2).length }}  <br>
                    {{ listChamados.filter(x => x.status == 0).length }}  <br>
                    {{ listChamados.filter(x => x.status == 3).length }}  <br>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import { useChamadosStore } from '@/stores/ChamadosStore'
    const chamadosStore = useChamadosStore()

    export default {
        computed:{
            listChamados(){
                return chamadosStore.readChamados
            }
        }
    }
</script>

<style scoped>
.mainResumo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.painel {
    width: 49%;

}
@media (max-width: 400px) {
    .mainResumo {
        flex-direction: column;
    }
    .painel {
        width: 100%;
        margin-bottom: 1rem;
    }
}
</style>