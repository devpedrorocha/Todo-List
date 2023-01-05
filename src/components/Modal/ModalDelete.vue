<template>
    <div>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            Deletar
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-2">Deseja deletar a tarefa "{{ tarefa.titulo }}"?</v-card-text>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="closeModal"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="deleteTask"
            >
              Deletar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
<script>
export default {
    props: ['tarefa'],
    data(){
        return {
            dialog: true,
        }
    },
    methods: {
        closeModal(){
            this.$emit('closeModal')
        },
        deleteTask(){
            this.$store.dispatch('removeTarefa', this.tarefa.id)
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>