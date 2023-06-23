<template>
    <div>
        <v-btn variant="text" to="/profisco">
            <v-icon>mdi-chevron-left</v-icon>Voltar
        </v-btn>
        <div class="d-flex justify-space-between align-center">
            <h1 class="mb-3">Chamados</h1>
            <h3>Nome do consultor</h3>
        </div>
        <ProfiscoConsultorChamados />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>