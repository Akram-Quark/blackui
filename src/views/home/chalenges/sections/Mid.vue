<template lang="">
  <div
    class="flex md:my-0 after:content-[''''] after:animate-pulse before:animate-ping relative after:bg-mypurple after:w-6 after:h-6 after:left-10 after:text-mypurple after:absolute after:top-1 after:rounded-full items-start justify-center before:content-['.'] before:w-6 befor:h-6 before:bg-mypurple before:absolute before:rounded-full before:right-6 before:bottom-0"
  >
    <h1
      class="text-center py-12 text-white font-extrabold md:text-5xl md:space-y-2"
      :class="[$i18n.locale == 'ar' ? 'px-12 mr-4 lg:mr-0 ' : '']"
    >
      {{ $t("message.chalanges.mid.ACCEPT") }}<br />{{
        $t("message.chalanges.mid.NEW")
      }}<br />{{ $t("message.chalanges.mid.CHALLENGES") }}
    </h1>
  </div>
</template>
