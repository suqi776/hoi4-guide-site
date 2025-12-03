<script setup lang="ts">
const user = useUserStore()
const route = useRoute<'hi-name'>()
const name = route.params.name

watchEffect(() => {
  user.setName(name as string)
})

useHead({
  title: `Hi, ${name}`,
})
</script>

<template>
  <div class="px-4 pb-4 pt-10 text-center">
    <div class="i-twemoji-waving-hand h-16 w-16 inline-block animate-shake-x animate-duration-5000" />
    <h1 class="text-4xl font-bold px-4 pb-2">
      Hi, {{ name }}
    </h1>
    <div v-if="user.otherNames.length" class="text-gray-600">
      AKA:
      <ul>
        <li v-for="(item, index) in user.otherNames" :key="index">
          <NuxtLink
            :to="`/hi/${encodeURIComponent(item)}`"
            class="hover:underline"
          >
            {{ item }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink to="/" class="my-4 btn">
      Back
    </NuxtLink>
  </div>
</template>
