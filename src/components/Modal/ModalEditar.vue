<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe o novo título.</v-card-text>
        <v-text-field
            label="Titulo"
            class="px-3"
            v-model="titulo"
            outlined
          ></v-text-field>
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
            @click="editConfirmed"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:['tarefa'],
    data(){
        return {
          dialog: true,
          titulo: null,
        }
    },
    methods:{
      closeModal(){
        this.$emit('closeModal')
      },
      editConfirmed(){
        let novaTarefa = { titulo: this.titulo , id: this.tarefa.id}
        this.$emit('closeModal')
        this.$store.dispatch('editaTarefa', novaTarefa)
      }
    },
    created(){
      this.titulo = this.tarefa.titulo
    },
}
</script>

<style>

</style>