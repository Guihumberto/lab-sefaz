<template>
    <div>
      <v-btn variant="outlined">Ocultar concluídos</v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-center">
            #
          </th>
          <th class="text-left">
            Prioridade
          </th>
          <th class="text-left">
            Nº Chamado
          </th>
          <th class="text-left">
            Descrição
          </th>
          <th class="text-left">
            Projeto
          </th>
          <th class="text-left">
            Empresa
          </th>
          <th class="text-left">
            Status
          </th>
          <th class="text-left">
            Data de Previsão
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item, i in desserts"
          :key="item.name"
        >
          <td class="text-center"> 
            <v-icon color="success" size="small">mdi-arrow-up</v-icon>
          </td>
          <td class="text-center">{{ i + 1 }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.name }}</td>
          <td>
            <profisco-consultor-change-status />
          </td>
        </tr>
      </tbody>
    </v-table>
  </template>
  <script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>