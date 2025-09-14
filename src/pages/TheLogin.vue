<template>
  <main class="flex h-screen">
    <q-card class="absolute right-5 top-5 z-10 rounded-full bordered">
      <q-card-section class="p-0 flex items-center justify-center">
        <PublicHeader />
      </q-card-section>
    </q-card>

    <AnimatedSection />

    <section class="flex flex-col flex-nowrap w-full md:w-1/2 p-4 justify-center items-center">
      <q-img src="../assets/images/logo.png" class="w-72 mx-auto" alt="My Weights Logo" />

      <form @submit="handleLogin" class="flex flex-col justify-center items-center mt-8">
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
            <q-icon
              class="cursor-pointer"
              :name="hidePassword ? 'visibility' : 'visibility_off'"
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
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import { mdiEmail, mdiLock } from '@quasar/extras/mdi-v7'
import AnimatedSection from 'src/components/Public/AnimatedSection.vue'
import PublicHeader from 'src/components/Public/PublicHeader.vue'
import type { LoginCredentials } from 'src/interfaces/User'
import { login } from 'src/services/UserService'
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

    if (!result) {
      return
    }

    localStorage.setItem('auth_token', result.access_token)
    localStorage.setItem('user_data', JSON.stringify(result.user))

    await $router.push('/home')
  } catch (error) {
    triggerNegative($t('register.triggerError'))
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
