<template>
    <div>
        <v-btn variant="text" to="/profisco"><v-icon>mdi-chevron-left</v-icon>Voltar</v-btn>
        <h1>ADMIN SEFAZ</h1>
        <!-- <ProfiscoSefazConfigData /> -->
        <ProfiscoSefazAddChamado />
        <v-row>
          <v-col cols="12">
              <PriorityProjects />
          </v-col>
      </v-row>
    </div>
</template>

<script>
    definePageMeta({
        middleware: ["auth"]
    })
</script>

<style scoped>

</style>