<script setup>
import { useRouter, useRoute } from "vue-router";
import { NMenu } from "naive-ui";
import menuOptions from "../router/menu.js";

const router = useRouter();
const route = useRoute();

const handleSelect = (key) => {
  router.push(key);
};
</script>

<template>
  <n-menu
    mode="horizontal"
    :options="menuOptions"
    :value="route.path"
    :icon-size="22"
    @update:value="handleSelect"
  />
</template>

<style src="../assets/styles/menu.css"></style>
