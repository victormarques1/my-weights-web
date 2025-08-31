<template>
  <main class="main-padding flex justify-center items-center">
    <section>
      <q-img src="../assets/images/logo.png" class="w-72 mx-auto" alt="My Weights Logo" />

      <q-form @submit="handleLogin" class="flex flex-col justify-center items-center mt-8">
        <q-input
          name="email"
          class="w-full"
          type="email"
          v-model="user.email"
          label="E-mail"
          placeholder="example@email.com"
          :input-style="{ color: 'gray' }"
          stack-label
          outlined
          :rules="[(val) => !!val || $t('login.emailError')]"
        >
          <template v-slot:prepend>
            <q-icon :name="mdiEmail" />
          </template>
        </q-input>
        <q-input
          name="password"
          class="w-full"
          v-model="user.password"
          :type="hidePassword ? 'password' : 'text'"
          :label="$t('login.password')"
          :placeholder="$t('login.passwordPlaceholder')"
          :input-style="{ color: 'grey' }"
          stack-label
          outlined
          :rules="[(val) => !!val || $t('login.passwordError')]"
        >
          <template v-slot:prepend>
            <q-icon :name="mdiLock" />
          </template>
          <template v-slot:append>
            <q-btn
              :icon="hidePassword ? 'visibility' : 'visibility_off'"
              flat
              dense
              round
              :aria-label="$t('login.toggleVisibilityPassword')"
              @click="() => (hidePassword = !hidePassword)"
            />
          </template>
        </q-input>

        <q-btn
          type="submit"
          class="w-full bg-primary text-white hover:bg-primary-dark"
          color="primary"
          :label="$t('login.login')"
          :loading="loading"
          no-caps
        />

        <p to="/register" class="mt-8 text-center">
          {{ $t('login.notRegistered') }}
          <span class="text-primary font-semibold hover:text-primary-dark"
            ><RouterLink to="/register">{{ $t('login.signUp') }}</RouterLink></span
          >
        </p>
      </q-form>
    </section>
  </main>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { mdiEmail, mdiLock } from '@quasar/extras/mdi-v7'
import type { LoginCredentials } from 'src/interfaces/Auth'
import { login } from 'src/services/AuthService'
import { triggerNegative } from 'src/utils/triggers'
import { onBeforeMount, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRouter } from 'vue-router'

defineOptions({ name: 'TheLogin' })

const { t: $t } = useI18n()

const user = reactive<LoginCredentials>({
  email: '',
  password: '',
})
const hidePassword = ref(true)
const loading = ref(false)
const $router = useRouter()

onBeforeMount(async () => {
  const token = localStorage.getItem('auth_token')

  if (token) {
    await $router.push('/home')
  }
})

const handleLogin = async () => {
  try {
    loading.value = true

    const result = await login(user)

    localStorage.setItem('auth_token', result.access_token)
    localStorage.setItem('user_data', JSON.stringify(result.user))

    await $router.push('/home')
  } catch (error: any) {
    const msg = error.response?.data?.message || 'Usuário ou senha inválidos.'
    triggerNegative(msg)
    console.log('Erro ao logar:', error)
  } finally {
    loading.value = false
  }
}
</script>
