<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefaAtual.concluido }"
      @click="tarefaAtual.concluido = !tarefaAtual.concluido"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefaAtual.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefaAtual.concluido }"
            >{{ tarefaAtual.titulo }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>
          <!-- <v-btn icon @click.stop="handleRemoveTarefa(tarefa.id)">
            <v-icon color="blue darken-3">mdi-trash-can</v-icon>
          </v-btn> -->
          <TarefaMenu :tarefa="tarefa" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from "@/components/Tarefas/TarefaMenu.vue";

export default {
  name: "TarefaComoponent",
  props: {
    tarefa: { type: Object },
  },
  components: { TarefaMenu },
  data() {
    return {
      tarefaAtual: { ...this.tarefa },
    };
  },
  methods: {
    handleRemoveTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>

<style>
</style>