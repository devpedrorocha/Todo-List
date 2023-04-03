<template>
  <div class="pa-3">
    <h1>Sobre</h1>
    <p>
      Essa é uma lista de tarefas desenvolvida para fins didáticos com Vue.js. O
      projeto foi feito a partir de uma playlist gratuita que está no YouTube.
    </p>
    <div class="iframe">
      <iframe
        min-width="100%"
        max-height="315"
        style="border-radius: 10px"
        src="https://www.youtube.com/embed/fL2BAYzCIZs"
        title="Playlist do YouTube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p>
      Foram utilizados diversas ferramentais atuais e muito utilziadas no
      mercado de trabalho. Algumas ferramentas utilizdas foram:
    </p>
    <v-list>
      <template v-for="item in tecnologias">
        <v-list-item :key="item.titulo">
          <v-list-item-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.titulo"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tecnologias: [
        {
          titulo: "HTML",
          icon: "mdi-language-html5",
        },
        {
          titulo: "Vue.js",
          icon: "mdi-vuejs",
        },
        {
          titulo: "Vuetify",
          icon: "mdi-vuetify",
        },
        {
          titulo: "VUEX",
          icon: "mdi-vuejs",
        },
        {
          titulo: "VueRouter",
          icon: "mdi-vuejs",
        },
        {
          titulo: "Localbase DB",
          icon: "mdi-database",
        },
        {
          titulo: "Animate.css",
          icon: "mdi-transition",
        },
        {
          titulo: "Drag and Drop",
          icon: "mdi-drag-variant",
        },
        {
          titulo: "Git",
          icon: "mdi-git",
        },
        {
          titulo: "GitHub",
          icon: "mdi-github",
        },
      ],
    };
  },
};
</script>
<style>
.iframe {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
