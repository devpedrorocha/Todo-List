<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="campoInput"
        label="Informe sua Task"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <TarefaComponent :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TarefaComponent from "@/components/Tarefas/TarefaComponent.vue";

export default {
  name: "TarefasView",
  components: { TarefaComponent },
  data() {
    return {
      campoInput: null,
      
    };
  },
  methods: {
    handleAddTask() {
      this.$store.commit('adicionaTarefa', this.campoInput)
      this.campoInput = null;
    },
  },
};
</script>
