<template>
    <v-col cols="6">
      <v-text-field
        v-model="campoInput"
        label="Adicione uma nova Tarefa"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
</template>

<script>
export default {
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
}
</script>

<style>

</style>