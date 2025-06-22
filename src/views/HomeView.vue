<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

function goShop() {
  router.push("/shop");
}
function goOrders() {
  router.push("/orders");
}
</script>

<template>
  <div class="home-container">
    <h1>{{ t("home.welcome") }}</h1>

    <n-space vertical size="large">
      <n-button @click="goShop">{{ t("home.goShop") }}</n-button>
      <n-button @click="goOrders">{{ t("home.viewOrders") }}</n-button>
    </n-space>
  </div>
</template>
