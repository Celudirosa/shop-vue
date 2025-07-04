<script setup>
import { ref, reactive, watch, nextTick, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useMessage } from "naive-ui";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const router = useRouter();
const { t, locale } = useI18n();
const message = useMessage();

// Reactive form model with all inputs
const model = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

// Validation rules for each field
const rules = {
  firstName: [
    {
      required: true,
      renderMessage: () => t("register.firstNameRequired"),
      trigger: ["blur", "input"],
    },
    {
      validator(rule, value) {
        if (/\d/.test(value)) {
          return new Error(t("register.firstNameNoNumbers"));
        }
        return true;
      },
      trigger: ["blur", "input"],
    },
  ],
  lastName: [
    {
      required: true,
      renderMessage: () => t("register.lastNameRequired"),
      trigger: ["blur", "input"],
    },
    {
      validator(_, value) {
        if (/\d/.test(value)) {
          return new Error(t("register.lastNameNoNumbers"));
        }
        return true;
      },
      trigger: ["blur", "input"],
    },
  ],
  email: [
    {
      required: true,
      renderMessage: () => t("register.emailRequired"),
      trigger: ["blur", "input"],
    },
    {
      type: "email",
      renderMessage: () => t("register.emailInvalid"),
      trigger: ["blur", "input"],
    },
  ],
  password: [
    {
      required: true,
      renderMessage: () => t("register.pwdRequired"),
      trigger: ["blur", "input"],
    },
    {
      min: 6,
      renderMessage: () => t("register.pwdMin"),
      trigger: ["blur", "input"],
    },
    {
      validator(rule, value) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
        if (!regex.test(value)) {
          return new Error(t("register.pwdComplexity"));
        }
      },
      trigger: ["blur", "input"],
    },
  ],
  confirmPassword: [
    {
      required: true,
      renderMessage: () => t("register.confirmPwdRequired"),
      trigger: ["blur", "input"],
    },
    {
      validator(rule, value) {
        if (value !== model.password) {
          return new Error(t("register.confirmPwdMatch"));
        }
      },
      trigger: ["blur", "input"],
    },
  ],
};

async function onSubmit() {
  try {
    // Create user with email and password
    await createUserWithEmailAndPassword(auth, model.email, model.password);
    message.success(t("register.regSuccess"));
    router.push("/");
  } catch (err) {
    message.error(t("register.regError"));
    console.error(err);
  }
}
</script>

<template>
  <div class="auth-container">
    <n-card :title="t('register.title')" class="auth-card">
      <n-form
        ref="registerFormRef"
        size="medium"
        :model="model"
        :rules="rules"
        @validate="handleValidate"
        label-placement="left"
      >
        <!-- First Name Input -->
        <n-form-item path="firstName" label="">
          <n-input
            v-model:value="model.firstName"
            :placeholder="t('register.firstName')"
            clearable
          />
        </n-form-item>

        <!-- Last Name Input -->
        <n-form-item path="lastName" label="">
          <n-input
            v-model:value="model.lastName"
            :placeholder="t('register.lastName')"
            clearable
          />
        </n-form-item>

        <!-- Email Input -->
        <n-form-item path="email" label="">
          <n-input
            v-model:value="model.email"
            type="text"
            :placeholder="t('register.email')"
            clearable
          />
        </n-form-item>

        <!-- Password Input -->
        <n-form-item path="password" label="">
          <n-input
            v-model:value="model.password"
            type="password"
            :placeholder="t('register.password')"
            show-password-on="mousedown"
          />
        </n-form-item>

        <!-- Confirm Password Input -->
        <n-form-item path="confirmPassword" label="">
          <n-input
            v-model:value="model.confirmPassword"
            type="password"
            :placeholder="t('register.confirmPassword')"
            show-password-on="mousedown"
          />
        </n-form-item>

        <!-- Submit Button -->
        <n-button type="primary" block @click="onSubmit">
          {{ t("register.btnRegister") }}
        </n-button>

        <!-- Back to Login Button -->
        <n-button
          tertiary
          block
          style="margin-top: 12px"
          @click="router.push('/login')"
        >
          {{ t("register.backToLogin") }}
        </n-button>
      </n-form>
    </n-card>
  </div>
</template>

<style src="../assets/styles/auth.css"></style>
