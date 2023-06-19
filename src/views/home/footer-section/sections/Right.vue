<template lang="">
  <div
    class="text-white sm:order-1 lg:order-2 flex items-center justify-center sm:w-3/4 lg:w-full"
  >
    <div class="flex flex-col flex-[.5] lg:text-right text-left">
      <h1 class="lg:text-2xl 2xl:text-2xl font-bold">
        Sign Up to Recieve <br class="hidden lg:inline-block" />
        ___Our Newsletter
      </h1>
      <div class="my-2 2xl:my-12">
        <div
          class="bg-mypurple border hidden border-white text-gray-400 text-sm lg:block w-full h-12 2xl:h-14"
        ></div>
      </div>
      <div class="flex justify-between items-center">
        <p class="2xl:text-2xl">Folow us !</p>
        <font-awesome-icon
          class="lg:text-4xl"
          :icon="{ prefix: 'fab', iconName: 'facebook' }"
        />
        <font-awesome-icon
          class="lg:text-4xl"
          :icon="{ prefix: 'fab', iconName: 'instagram' }"
        />
        <font-awesome-icon
          class="lg:text-4xl"
          :icon="{ prefix: 'fab', iconName: 'telegram' }"
        />
      </div>
    </div>
  </div>
</template>
