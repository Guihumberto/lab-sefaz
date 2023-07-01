<template>
    <div class="text-center">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="indigo"
            v-bind="props"
            icon="mdi-account-circle"
          >
          </v-btn>
        </template>
  
        <v-card min-width="300">
          <v-list>
            <v-list-item
              prepend-icon="mdi-account-circle"
              :title="firebaseUser.email"
              :subtitle="firebaseUser.email"
            >
            </v-list-item>
          </v-list>
  
          <v-divider></v-divider>
    
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              variant="text"
              @click="signOutUser()"
            >
              Sair
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
        firebaseUser: useFirebaseUser()
      }),
    }
  </script>