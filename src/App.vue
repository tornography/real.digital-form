<template>
  <div id="app" :class="$style.app">
    <TestCase />
  </div>
</template>

<script>
import TestCase from './components/TestCase.vue'

export default {
  name: 'App',
  components: {
    TestCase
  }
}
</script>

<style module>
html {
  box-sizing: border-box;
  font-size: 62.5%;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  height: 100%;
}

.app {
  height: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
