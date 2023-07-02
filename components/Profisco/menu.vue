<template>
    <nav class="menu d-none d-sm-flex">
        <nuxt-link to="/sefaz/listconfigPriorits">Priorização</nuxt-link>
        <nuxt-link to="/empresa/Projetos">Projetos</nuxt-link>
        <nuxt-link to="/consultores/chamados">Chamados</nuxt-link>
    </nav>
</template>

<script>
    import { useLoginStore } from '@/stores/LoginStore'
    const loginStore = useLoginStore()

    export default {
        methods:{
            async logout(){
                loginStore.logout()
                this.$router.push('/profisco')
                const result = await signOutUser()
            }
        }
    }
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
}
.menu a {
    text-decoration: none;
    color: #000;
    padding: 10px 1rem;
    transition: .5s;
    font-weight: bold;
}
.menu a:hover{
    background-color: rgb(177, 243, 243);
}

</style>