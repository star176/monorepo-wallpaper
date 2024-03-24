<template>
  <main class="flex items-center justify-between px-3 py-2 text-sm opacity-80 drag">
    <section class="text-xs opacity-80">我的壁纸</section>
    <section class="flex items-center justify-center gap-2">
      <Pic
        theme="outline"
        size="20"
        class="text-gray-500 cursor-pointer nodrag"
        :class="{ iconColor: $route.name == 'home' }"
        @click="$router.push({ name: 'home' })"
      />
      <SettingOne
        theme="outline"
        size="20"
        class="text-gray-500 cursor-pointer nodrag"
        :class="{ iconColor: $route.name == 'setting' }"
        @click="$router.push({ name: 'setting' })"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import { Pic, SettingOne } from '@icon-park/vue-next'
</script>
<style lang="scss" scoped>
.iconColor {
  color: #d35400 !important;
}
</style>
```
