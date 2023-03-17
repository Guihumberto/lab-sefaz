<template>
    <div>
        <v-card 
            class="text-center pa-5 ma-4" 
            
            elevation="2"
        >
            <v-avatar
                size="avatarSize"
                color="green"
            >
                <v-icon size="120">mdi-account-outline</v-icon>
            </v-avatar>
            <div class="mt-3">
                <h1 class="text-caption">
                    <strong> {{ member.name }}</strong>
                </h1>
                <h1 class="text-caption" v-html="member.cargo"></h1>
            </div>
        </v-card>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            member: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>