<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-img src="./assets/logo-light.png" spinner-color="white" style="max-width: 300px; margin: 10px;" />
          <h6 class="text-weight-light" style="margin: 0px;">Small 3D & Gamedev Team</h6>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/page3" label="Our Project" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <HomePage />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HomePage from './components/Home.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HomePage
  },

  setup() {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
