<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <drop-list :items="tarefasComputadas" @reorder="$event.apply(tarefasComputadas)" >
        <template v-slot:item="{item, reorder}">
            <drag :key="item.id" :data="item">
                <TarefaComponent style="background-color: white" :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}" :tarefa="item"></TarefaComponent>
                <v-divider/>
            </drag>
        </template>
        
    </drop-list>
  </div>
</template>

<script>
import {Drag,DropList} from "vue-easy-dnd";
import TarefaComponent from "./TarefaComponent.vue";

export default {
    components: {
    Drag,
    DropList,
    TarefaComponent
},
    computed:{
        tarefasComputadas(){
            return this.$store.state.tarefas
        }
    },
}
</script>

<style>

</style>