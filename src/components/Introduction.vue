<template>
  <div>
    <h1>{{msg}}</h1>
    <ul>
      <li><a href="https://github.com/sudole/vuejs-practice" target="_blank">github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Introduction.vue",
  props: {
    msg: String
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>