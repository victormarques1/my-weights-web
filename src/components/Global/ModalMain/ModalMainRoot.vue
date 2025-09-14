<template>
  <q-dialog>
    <q-card :style="style ? style : { maxWidth: '600px', width: '100%' }">
      <q-card-section>
        <div
          :data-center="!subtitle"
          class="flex flex-nowrap gap-2 items-start data-[center=true]:items-center"
        >
          <q-icon v-if="headerIcon" :name="headerIcon" class="text-4xl" />
          <div>
            <p class="text-bold text-base mr-8 sm:text-xl">{{ title }}</p>
            <p v-if="subtitle" class="mr-8 text-sm">{{ subtitle }}</p>
          </div>
        </div>
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          class="absolute right-1 top-1"
          @click="handleClose"
        />
      </q-card-section>

      <slot />
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ModalMainRoot',
})

defineProps<{
  title: string
  subtitle?: string
  style?: Partial<CSSStyleDeclaration>
  headerIcon?: string
  handleClose: () => void
}>()
</script>
