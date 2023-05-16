<template>
    <v-card>
        <v-toolbar
            color="primary"
            :title="member.name.split(' ')[0]"
        >
            <v-space></v-space>
            <v-btn @click="$emit('closeDialog', false)"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-card-item class=" ma-5 border">
            <v-row>
                <v-col cols="5" sm="3">Nome:</v-col>
                <v-col cols="7" sm="9">{{member.name}}</v-col>
                <v-col cols="5" sm="3">Cargo:</v-col>
                <v-col cols="7" sm="7" v-html="member.cargo"></v-col>
                <v-col cols="5" sm="3">Formação:</v-col>
                <v-col cols="7" sm="7">{{ member.formacao }}</v-col>
                <v-col cols="5" sm="3">Sobre:</v-col>
                <v-col cols="7" sm="9">{{ member.about }}</v-col>
            </v-row>
        </v-card-item>
        <v-card-actions class="justify-end">
            <v-btn
            variant="text"
            @click="$emit('closeDialog', false)"
            >Fechar</v-btn>
        </v-card-actions>
    </v-card>    
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        props:{
            member: Object
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>

</style>