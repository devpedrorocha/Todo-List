<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img class="pt-4 text-center back" src="@/assets/bg.jpg" dark gradient="to top right, rgba(19,84, 122, .5), rgba(128, 108, 199, 0.8)">
        <v-avatar size="100">
      <img
        src="https://avatars.githubusercontent.com/u/102065863?s=400&u=09bafa35c8428285fe3ff597f7f968205f5e707d&v=4"
        alt="Pedro"
        
      >
    </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vue.js </v-list-item-title>
          <v-list-item-subtitle> Lista de Tarefas </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
    </v-img>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="#fcb69f"
      dark
      app
      prominent
      height="183"
      src="@/assets/bg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84, 122, .5), rgba(128, 108, 199, 0.8)"
        ></v-img>
      </template>
      
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <section class="d-flex justify-center inputSection">
          <InputTarefa class="input"/>
        </section>
        <v-spacer></v-spacer>
        <div class="circulo"></div>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/InputTarefa.vue';

export default {
    data: () => ({
        drawer: false,
        items: [
            { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
            { title: "Sobre", icon: "mdi-image", to: "/sobre" },
        ],
    }),
    components: { InputTarefa }
};
</script>

<style>
.circulo{
  background: violet;
  height: 40px;
  width: 40px;
  border-radius: 39% 61% 70% 30% / 73% 76% 24% 27%  ;
}

.input {
  margin-top: 48px;
  width: 14rem;
}

.inputSection{
  width:100%;
}

.back{
  background: rgb(8,36,142);
background: linear-gradient(225deg, rgba(8,36,142,1) 0%, rgba(4,171,246,1) 100%);
}

.back2{
  background: rgb(8,36,142);
background: linear-gradient(45deg, rgba(8,36,142,1) 0%, rgba(4,171,246,1) 100%);
}

</style>