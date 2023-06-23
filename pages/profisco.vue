<template>
    <div>
        <h1>Profisco</h1>
        <div class="d-flex justify-space-between align-self-center">
            <h4 class="my-5">Resumo</h4>
            <div class="d-flex">
                <ProfiscoMenu />
                <ProfiscoLogin />
            </div>
        </div>
        <ProfiscoPublicoResumos />
        <h4 class="my-5">Lista de Priorização Chamados</h4>
        <ProfiscoPublicoLista />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>