<template>
    <div  
      v-motion
      :initial="initial"
      :enter="enter"
    >
        <listphones />
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