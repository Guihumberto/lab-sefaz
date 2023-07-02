export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp()

        if($auth?.currentUser?.email != 'juninho.joao@teste.com.br') {
            return navigateTo('/')
        }

    })
})