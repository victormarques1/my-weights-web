<template>
  <div class="space-x-2">
    <q-btn
      :aria-label="`Language ${currentLanguage.name}`"
      flat
      dense
      data-no-border
      padding="xs"
      class="min-w-[28px] min-h-[20px]"
    >
      <div class="flex items-center justify-center w-[28px] h-[20px]">
        <q-img
          :src="currentLanguage.flag"
          :alt="`${currentLanguage.name} Flag`"
          class="rounded-sm w-full h-full"
          fit="cover"
        />
      </div>
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item
            v-for="language in languages"
            :key="language.code"
            clickable
            v-close-popup
            @click="setLocale(language.code)"
            :class="{ 'bg-primary/10': locale === String(language.code) }"
          >
            <q-item-section class="flex flex-row flex-nowrap items-center justify-start space-x-2">
              <q-img
                :src="language.flag"
                :alt="`${language.name} Flag`"
                class="rounded-sm w-[28px] h-[20px] flex-shrink-0"
                fit="cover"
              />
              <span>{{ language.name }}</span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LanguageEnum } from 'src/interfaces/enums/LanguageEnum'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'SelectLanguage' })

const { locale } = useI18n()
const { t: $t } = useI18n({ useScope: 'global' })

const languages = [
  {
    code: LanguageEnum.PT,
    name: $t('language.portuguese'),
    flag: '/src/assets/images/languages/brazil-flag.svg',
  },
  {
    code: LanguageEnum.EN,
    name: $t('language.english'),
    flag: '/src/assets/images/languages/usa-flag.svg',
  },
  {
    code: LanguageEnum.ES,
    name: $t('language.spanish'),
    flag: '/src/assets/images/languages/spain-flag.svg',
  },
] as const

const DEFAULT_LANGUAGE = languages[0]

const currentLanguage = computed(() => {
  const foundLanguage = languages.find((lang) => String(lang.code) === locale.value)
  return foundLanguage ?? DEFAULT_LANGUAGE
})

const setLocale = (newLocale: LanguageEnum) => {
  locale.value = String(newLocale)
}
</script>
