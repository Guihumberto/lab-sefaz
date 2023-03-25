<template>
  <v-card
    class="mx-auto"
    variant="outlined"
  >
  <v-card-item>
    <h5 class="text-h6">Projetos</h5>
  </v-card-item>
    <v-list :items="items"></v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { type: 'subheader', title: 'Grupo 01 - Em execução' },
      {
        title: 'Item #1',
        value: 1,
      },
      {
        title: 'Item #2',
        value: 2,
      },
      {
        title: 'Item #3',
        value: 3,
      },
      { type: 'divider' },
      { type: 'subheader', title: 'Groupo 02 - Fila' },
      {
        title: 'Item #4',
        value: 4,
      },
      {
        title: 'Item #5',
        value: 5,
      },
      {
        title: 'Item #6',
        value: 6,
      },
    ],
  }),
}
</script>