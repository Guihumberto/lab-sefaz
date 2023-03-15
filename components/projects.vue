<template>
     <v-hover
        v-slot="{ isHovering, props }"
      >
        <v-card 
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            variant="flat" 
            class="pa-5" 
            to="/project"
            v-bind="props"
        >
            <v-avatar
                    size="200"
                    rounded="0"
                    color="blue-darken-2"
            >
                    <v-icon size="100">mdi-projector-screen-variant-outline</v-icon>
            </v-avatar>
            <h5 class="mt-3 text-grey-darken-1 font-weight-medium"> {{ project.name }}</h5>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        props:{
            project: Object
        }
    }
</script>

<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>