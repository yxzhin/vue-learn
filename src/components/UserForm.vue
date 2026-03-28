<script setup>
import { ref, computed } from "vue"
import { InputText } from "primevue"

const username = ref("")
const password = ref("")

const username_valid = computed(() => {
  return username.value.length >= 3 && username.value.length <= 33
})

const password_valid = computed(() => {
  return password.value.length >= 6
})

const form_valid = computed(() => {
  return username_valid.value && password_valid.value
})
</script>

<!--
<template>
  <div class="container-fluid">
    <form>
      <div class="row g-3 p-1 align-items-center">
        <div class="col-auto">
          <label class="form-label">username</label>
        </div>
        <div class="col-auto">
          <input class="form-control-lg" type="text" name="username" v-model="username" />
        </div>
        <div class="col-auto">
          <span class="alert alert-danger" role="alert" v-if="!username_valid">
            username length must be from 3 to 33 characters
          </span>
        </div>
      </div>
      <div class="row g-3 p-1 align-items-center">
        <div class="col-auto">
          <label class="form-label">password</label>
        </div>
        <div class="col-auto">
          <input class="form-control-lg" type="password" name="password" v-model="password" />
        </div>
        <div class="col-auto">
          <span class="alert alert-danger" role="alert" v-if="!password_valid">
            password length must be at least 6 characters
          </span>
        </div>
      </div>
      <button class="btn btn-primary" type="submit" :disabled="!form_valid">submit</button>
    </form>
  </div>
</template>
-->

<style scoped></style>
