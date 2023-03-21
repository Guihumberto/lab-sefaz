<template>
    <div  
      v-motion
      :initial="initial"
      :enter="enter">
        <h1>Sobre</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae nihil libero quasi sunt officiis, architecto distinctio dolorem excepturi, consectetur ratione? Dolore, amet cum nesciunt placeat accusantium perferendis beatae exercitationem?</p>
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