<template>
    <div>
        <h5 class="text-h5">Insirir novo</h5>
        <v-card>
            <v-card-item>
                <v-form>
                    <v-text-field 
                        label="Ordem"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite a posição"
                    />
                    <v-text-field 
                        label="Projeto"
                        variant="outlined"
                        density="compact"
                        placeholder="Digite a posição"
                    />
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
        
    }
</script>

<style lang="scss" scoped>

</style>