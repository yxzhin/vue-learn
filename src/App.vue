<script setup>
import CounterCard from "./components/CounterCard.vue"
import UserForm from "./components/UserForm.vue"
import { Button } from "primevue"
function toggleDarkMode() {
  document.documentElement.classList.toggle("theme-dark")
}
</script>

<template>
  <!-- <CounterCard />
  <UserForm />-->
  <Button label="toggle theme" @click="toggleDarkMode()" />
</template>

<style scoped></style>
