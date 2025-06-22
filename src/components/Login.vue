<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../config/firebase";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { Eye, EyeOff } from "@vicons/tabler";
import { signInWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const message = useMessage();
const { t, locale } = useI18n();

const showPassword = ref(false);
const loginFormRef = ref(null);

// Reactive form model with all inputs
const model = reactive({
  email: "",
  password: "",
});

// Validation rules for each field
const rules = {
  email: [
    {
      required: true,
      renderMessage: () => t("login.emailRequired"),
      trigger: ["blur", "input"],
    },
    {
      type: "email",
      renderMessage: () => t("login.emailInvalid"),
      trigger: ["blur", "input"],
    },
  ],
  password: [
    {
      required: true,
      renderMessage: () => t("login.pwdRequired"),
      trigger: ["blur", "input"],
    },
  ],
};

async function login() {
  const valid = await loginFormRef.value?.validate();
  if (!valid) return;

  try {
    const res = await signInWithEmailAndPassword(
      auth,
      model.email,
      model.password
    );
    router.push("/");
    message.success(t("login.logged", { email: res.user.email }));
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      message.error(t("login.errorUserNotFound") || "User not found");
    } else if (err.code === "auth/wrong-password") {
      message.error(t("login.errorWrongPassword") || "Incorrect password");
    } else {
      message.error(t("login.errorGeneral") || "Login failed");
    }
    console.error(err);
  }
}

function goToRegistrer() {
  router.push("/register");
}
</script>

<template>
  <div class="auth-container">
    <n-card :title="t('login.title')" class="auth-card">
      <n-form
        ref="loginFormRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        size="medium"
      >
        <!-- Email Input -->
        <n-form-item path="email" label="">
          <n-input
            v-model:value="model.email"
            type="text"
            :placeholder="t('login.email')"
            clearable
          />
        </n-form-item>

        <!-- Password Input -->
        <n-form-item path="password" label="">
          <n-input
            :type="showPassword ? 'text' : 'password'"
            v-model:value="model.password"
            :placeholder="t('login.password')"
          >
            <template #suffix>
              <n-icon
                :component="showPassword ? EyeOff : Eye"
                @mousedown.prevent="showPassword = true"
                @mouseup.prevent="showPassword = false"
                @mouseleave="showPassword = false"
                @touchstart.prevent="showPassword = true"
                @touchend.prevent="showPassword = false"
                @touchcancel.prevent="showPassword = false"
                @click.prevent.stop
              />
            </template>
          </n-input>
        </n-form-item>

        <n-space justify="space-between" class="auth-buttons">
          <!-- Login Button -->
          <n-button
            type="primary"
            @click="login"
            :disabled="!model.email || !model.password"
          >
            {{ t("login.btnLogin") }}
          </n-button>

          <!-- Go to Register Button -->
          <n-button @click="goToRegistrer">
            {{ t("login.btnRegister") }}
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </div>
</template>

<style src="../assets/styles/auth.css"></style>
