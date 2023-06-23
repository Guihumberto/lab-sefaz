<template>
    <div>
        <div class="navWrapper">
        <nav class="navbar d-flex justify-end">
          <a @click="showServidores = !showServidores">Servidores</a>
          <a @click="showProjetos = !showProjetos">Projetos</a>
          <a @click="showChamados = !showChamados">Chamados</a>
          <a @click="showConsultores = !showConsultores">Consultores</a>
        </nav>
      </div>
      <v-dialog
        v-model="showAdd"
        max-width="700"
      >
        <NewPriority />
      </v-dialog>
      <v-dialog
        v-model="showServidores"
        max-width="700"
      >
        <consultores-newServidores @close="showServidores = false" />
      </v-dialog>
      <v-dialog
        v-model="showProjetos"
        max-width="700"
      > 
        <consultores-NewPriority @close="showProjetos = false" />
      </v-dialog>
      <v-dialog
        v-model="showChamados"
        max-width="700"
      >
        <consultores-NewChamados @close="showChamados = false"/>
      </v-dialog>
      <v-dialog
        v-model="showConsultores"
        max-width="700"
      >
        <consultores-NewConsultores @close="showConsultores = false"/>
      </v-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showChamados: false,
                showConsultores: false,
                showProjetos: false,
                showServidores: false,
            }
        }
    }
</script>

<style scoped>
.navbar a{
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #000;
    margin-left: 3rem;
    transition: .5s ease;
    font-weight: 600;
    padding: 5px;
}
.navbar a:hover{
    color: rgb(76, 187, 95);
}

</style>