import db from "@/services/localbase";

export default {
  async adicionaTarefa({ commit }, titulo) {
    await commit("adicionaTarefa", titulo);
    commit("buscaTarefas");
  },
  async removeTarefa({ commit }, id) {
    db.collection("tarefas")
      .doc({ id: id })
      .delete()
      .then(() => {
        commit("buscaTarefas");
      });
  },
  async editaTarefa({ commit }, novaTarefa) {
    db.collection("tarefas")
      .doc({ id: novaTarefa.id })
      .update({
        titulo: novaTarefa.titulo,
      })
      .then(() => {
        commit("buscaTarefas");
      });
  },
  async concluirTarefa({ commit }, tarefa) {
    await db.collection("tarefas").doc({ id: tarefa.id }).update({
      concluido: tarefa.concluido,
    });
    commit("buscaTarefas");
  },
};
