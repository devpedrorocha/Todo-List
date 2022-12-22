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
            v-model="tarefa.titulo"
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
    props:['tarefaProp'],
    data(){
        return {
          dialog: true,
          tarefa: null,
        }
    },
    methods:{
      closeModal(){
        this.$emit('closeModal')
      },
      editConfirmed(){
        let novaTarefa = {titulo: this.tarefa.titulo, id: this.tarefa.id}
        this.$store.commit('editaTarefa', novaTarefa)
        this.$emit('closeModal')
      }
    },
    created(){
      this.tarefa = this.tarefaProp
    }
}
</script>

<style>

</style>