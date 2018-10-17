<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="_handleEvent">Event Bus example</button>
  </div>
</template>

<script>
import { EventBus } from '../bus';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
  methods: {
    _handleEvent() {
      EventBus.$emit('i-got-clicked');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
