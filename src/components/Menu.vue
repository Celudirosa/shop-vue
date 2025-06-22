<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NMenu, NDropdown, NButton } from "naive-ui";
import { leftMenu, rightMenu } from "../router/menu.js";

const router = useRouter();
const route = useRoute();

const isMobile = ref(false);

function checkScreen() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreen);
});

const handleSelect = (key) => {
  router.push(key);
};
</script>

<template>
  <div class="nav-bar">
    <template v-if="!isMobile">
      <!-- Left Menu -->
      <n-menu
        mode="horizontal"
        :options="leftMenu"
        :value="route.path"
        :icon-size="22"
        @update:value="handleSelect"
      />

      <!-- Right Menu -->
      <n-menu
        mode="horizontal"
        :options="rightMenu"
        :value="route.path"
        :icon-size="22"
        @update:value="handleSelect"
        class="right-menu"
      />
    </template>

    <template v-else>
      <!-- Movile Menu -->
      <n-dropdown
        trigger="click"
        :options="[...leftMenu, ...rightMenu]"
        @select="handleSelect"
      >
        <n-button>☰ Menu</n-button>
      </n-dropdown>
    </template>
  </div>
</template>

<style src="../assets/styles/menu.css"></style>
