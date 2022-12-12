<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Introduction msg="Sudole's Vue Practice"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'

export default {
  name: 'Home',
  components: {
    Introduction
  }
}
</script>
