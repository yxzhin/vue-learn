<script setup>
import { reactive, ref } from "vue"
const title = ref("vue learn")
const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">count is: {{ count }}</p>
        <a class="btn btn-primary" @click="increment">increment</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 18rem;
}
</style>
