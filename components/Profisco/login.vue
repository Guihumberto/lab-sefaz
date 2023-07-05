<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="success"
            size="small"
            v-bind="props"
            variant="outlined"
            prepend-icon="mdi-account"
          >
            LOGIN
          </v-btn>
        </template>
  
        <v-card>
          <v-card-item class="text-right">
            <v-btn @click="dialog = false" flat><v-icon>mdi-close</v-icon></v-btn>
          </v-card-item>
          <v-card-text class="text-center">
            <h2 class="mb-5">{{ loginCreate.title }}</h2>
            <v-form @submit.prevent="login()" ref="form">
                <v-text-field
                    label="Nome completo"
                    variant="outlined"
                    density="comfortable"
                    v-model="user.name"
                    v-if="createAccount"
                ></v-text-field>
                <v-text-field
                    label="E-mail"
                    variant="outlined"
                    density="comfortable"
                    v-model="user.email"
                ></v-text-field>
                <v-text-field
                    label="CPF"
                    variant="outlined"
                    density="comfortable"
                    v-model="user.cpf"
                    v-if="createAccount"
                ></v-text-field>
                <v-text-field
                    label="Senha"
                    variant="outlined"
                    density="comfortable"
                    v-model="user.password"
                    type="password"
                ></v-text-field>
                <v-btn type="submit" block color="primary">Continuar</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn 
              color="primary" 
              block @click="createAccount = !createAccount">
              {{ loginCreate.name }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
  import { useLoginStore } from '@/stores/LoginStore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
  const loginStore = useLoginStore()

  export default {
    data () {
      return {
        dialog: false,
        createAccount: false,
        user: {
          name: 'João Teste',
          email: 'juninho.joao@teste.com.br',
          cpf: '01791743390',
          password: '123456'
        },
        credentials: false,
        firebaseUser: useFirebaseUser()
      }
    },
    computed:{
      loginCreate(){
        return this.createAccount
        ? {title: 'Criar conta', color: 'primary', name: 'Login'}
        : {title: 'Login', color: 'success', name: 'Criar conta'}
      }
    },
    methods:{
      async login(){
        if(this.createAccount){
          this.credentials = await createUser(this.user.email, this.user.password)
        } else {
          loginStore.login(this.user.cpf)
          this.credentials = await signInUser(this.user.email, this.user.password)
        }
      }
    }
  }
</script>

<style scoped>

</style>