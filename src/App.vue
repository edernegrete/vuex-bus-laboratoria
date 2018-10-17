<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <button @click="$store.dispatch('setValue')">clicks</button>
      {{clicks}}
      <hello></hello>
    </main>
  </div>
</template>

<script>
import { EventBus } from './bus';
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  computed: {
    clicks() {
      return this.$store.getters.getClicks;
    },
  },
  mounted() {
    EventBus.$on('i-got-clicked', () => {
      console.log('eder');
    });
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
