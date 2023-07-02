<template>
    <div>
        <h1>Priorização</h1>
        <p>Comitê Estratégico de Projetos SEFAZ financiados pelo Profisco</p>
        <div class="d-flex justify-space-between align-self-center">
            <h4 class="my-5">Resumo</h4>
            <div class="d-flex">
                <ProfiscoMenu v-if="firebaseUser.email == 'juninho.joao@teste.com.br'" />
            </div>
        </div>
        <ProfiscoPublicoResumos />
        <h4 class="my-5">Lista de Priorização Chamados</h4>
        <ProfiscoPublicoLista />
    </div>
</template>

<script>
    import { useLoginStore } from '@/stores/LoginStore'
    const loginStore = useLoginStore()

    export default {
        data(){
            return{
                firebaseUser: useFirebaseUser()
            }
        },
        computed:{
            isLogin(){
                return loginStore.readLogin
            }
        }
    }
</script>

<style scoped>

</style>