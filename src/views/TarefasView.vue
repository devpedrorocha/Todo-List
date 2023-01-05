<template>
  <div>

    <ListaDeTarefas/>
    <div v-if="$store.state.tarefas.length == 0" class="mt-12 d-flex flex-column justify-center align-center animate__animated animate__bounceInUp">
      <v-icon size="100" color="primary" class="d-flex justify-center">mdi-check</v-icon>
      <p class="text-h5 primary--text">Todas tarefas concluídas !</p>
    </div>
  </div>
</template>

<script>
import ListaDeTarefas from "@/components/Tarefas/ListaDeTarefas.vue"

export default {
  name: "TarefasView",
  components: { ListaDeTarefas },
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTask() {
      this.$store.dispatch('adicionaTarefa', this.campoInput)
      this.campoInput = null;
    },
  },
  created(){
    this.$store.commit('buscaTarefas')
  },
};
</script>

<style>
</style>
