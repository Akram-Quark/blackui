<template lang="">
  <div class="flex flex-col justify-center">
    <div class="text-center text-white space-y-3">
      <h1 class="font-bolder text-4xl 2xl:text-6xl">Subscribe</h1>
      <h5 class="text-mypurple text-2xl 2xl:text-4xl">to our newesletter</h5>
      <h5 class="2xl:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
    </div>

    <form class="w-[60%] mx-auto mt-2">
      <div class="mb-6">
        <input
          type="text"
          id="name"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          placeholder="jhon doe"
          required
        />
      </div>
      <div class="mb-6">
        <input
          type="email"
          id="email"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-6">
        <textarea
          type="text"
          id="message"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          placeholder="message"
          required
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="text-white bg-mypurple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5"
        >
          Send message
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
