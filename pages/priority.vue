<template>
 
    <div
      v-motion
      :initial="initial"
      :enter="enter"
    >
    <h1 class="text-h4 mb-5">Lista de Prioridades</h1>
    <v-row>
        <v-col cols="12" sm="6">
            <PriorityProjects />
        </v-col>
        <v-col cols="12" sm="6">
            <NewPriority />
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" sm="6">
            <PriorityIncidentes/>
        </v-col>
        <v-col cols="12" sm="6">
            <NewPriority />
        </v-col>
    </v-row>
    </div>
  </template>
  
  <script setup>
  const initial = ref({
    y: 100,
    opacity: 0,
  })
  
  const enter = ref({
    y: 0,
    opacity: 1,
  })
  </script>