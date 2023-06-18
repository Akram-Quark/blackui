<template lang="">
  <div class="text-white flex items-center justify-center px-6">
    <div class="flex flex-col flex-[.5] text-right">
      <h1 class="text-2xl 2xl:text-2xl font-bold">
        Sign Up to Recieve <br />
        ___Our Newsletter
      </h1>
      <div class="my-6 2xl:my-12">
        <div
          class="bg-mypurple border border-white text-gray-400 text-sm block w-full h-12 2xl:h-14"
        ></div>
      </div>
      <div class="flex justify-between items-center">
        <p class="2xl:text-2xl">Folow us !</p>
        <font-awesome-icon
          class="text-4xl"
          :icon="{ prefix: 'fab', iconName: 'facebook' }"
        />
        <font-awesome-icon
          class="text-4xl"
          :icon="{ prefix: 'fab', iconName: 'instagram' }"
        />
        <font-awesome-icon
          class="text-4xl"
          :icon="{ prefix: 'fab', iconName: 'telegram' }"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
