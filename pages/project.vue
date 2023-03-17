<template>
    <div
      v-motion
      :initial="initial"
      :enter="enter">
        <v-btn
            to="/#projects"
            variant="flat"
            prepend-icon="mdi-chevron-left"
            class="pa-0"
        >
          voltar
        </v-btn>
        <h1>Projeto</h1>
        <h5>Dados do projeto</h5>
        <v-divider></v-divider>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi asperiores minima, voluptatem aut praesentium fuga cumque porro et consectetur architecto rerum, corrupti aliquam rem! Magni, cupiditate amet. Vero, assumenda deserunt.</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                initial: {
                    y: 100,
                    opacity: 0,
                },
                enter: {
                    y: 0,
                    opacity: 1,
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>