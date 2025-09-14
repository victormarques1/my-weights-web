<template>
  <main class="flex h-screen">
    <q-card class="absolute right-5 top-5 z-10 rounded-full bordered">
      <q-card-section class="p-0 flex items-center justify-center">
        <PublicHeader />
      </q-card-section>
    </q-card>

    <section
      class="flex flex-col flex-nowrap w-full mt-20 md:mt-0 md:w-1/2 p-4 justify-center items-center"
    >
      <q-img src="../assets/images/logo.png" class="w-72 mx-auto" alt="My Weights Logo" />

      <h1 class="text-center text-xl font-semibold mb-5 mt-2">{{ $t('login.signUp') }}</h1>

      <q-form @submit="handleRegister" class="flex flex-col justify-center items-center">
        <q-input
          name="name"
          class="w-full"
          type="text"
          v-model="user.name"
          :label="$t('register.name')"
          :placeholder="$t('register.namePlaceholder')"
          :input-style="{ color: 'gray' }"
          stack-label
          outlined
          :rules="[(val) => !!val || $t('register.nameError')]"
        >
          <template v-slot:prepend>
            <q-icon :name="mdiAccount" />
          </template>
        </q-input>
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
          :rules="[(val) => val.length >= 6 || 'Senha deve ter pelo menos 6 caracteres']"
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
        <q-input
          name="confirmPassword"
          class="w-full"
          v-model="user.confirmPassword"
          :type="hideConfirmPassword ? 'password' : 'text'"
          :label="$t('login.password')"
          :placeholder="$t('register.repeatYourPassword')"
          :input-style="{ color: 'grey' }"
          stack-label
          outlined
          :rules="[
            (val) => val === user.password || $t('register.passwordsDontMatch'),
            (val) => val.length >= 6 || $t('register.passwordLength'),
          ]"
        >
          <template v-slot:prepend>
            <q-icon :name="mdiLock" />
          </template>
          <template v-slot:append>
            <q-icon
              class="cursor-pointer"
              :name="hideConfirmPassword ? 'visibility' : 'visibility_off'"
              :aria-label="$t('login.toggleVisibilityPassword')"
              @click="() => (hideConfirmPassword = !hideConfirmPassword)"
            />
          </template>
        </q-input>

        <q-btn
          type="submit"
          class="w-full bg-primary text-white hover:bg-primary-dark"
          color="primary"
          :label="$t('register.signUp')"
          :loading="loading"
          no-caps
        />

        <p to="/register" class="mt-5 text-center">
          {{ $t('register.hasAccount') }}
          <span class="text-primary font-semibold hover:text-primary-dark"
            ><RouterLink to="/"> {{ $t('login.login') }}</RouterLink></span
          >
        </p>
      </q-form>
    </section>

    <AnimatedSection />
  </main>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { mdiAccount, mdiEmail, mdiLock } from '@quasar/extras/mdi-v7'
import AnimatedSection from 'src/components/Public/AnimatedSection.vue'
import PublicHeader from 'src/components/Global/PublicHeader.vue'
import { register } from 'src/services/UserService'
import { triggerNegative, triggerSuccess } from 'src/utils/triggers'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'TheRegister',
})

const { t: $t } = useI18n()

const user = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
const hidePassword = ref(true)
const hideConfirmPassword = ref(true)
const loading = ref(false)
const $router = useRouter()

const handleRegister = async () => {
  const newUser = {
    name: user.name,
    email: user.email,
    password: user.password,
  }

  try {
    loading.value = true

    const result = await register(newUser)

    if (!result) {
      return
    }

    triggerSuccess($t('register.triggerSuccess'))
    await $router.push('/')
  } catch (error: any) {
    triggerNegative($t('register.triggerError'))
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
