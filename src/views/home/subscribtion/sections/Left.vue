<template lang="">
  <div
    class="flex flex-col justify-center mt-8 md:mt-0"
    :class="[$i18n.locale == 'ar' ? 'font-cairo ' : '']"
  >
    <div class="text-center text-white">
      <h1 class="font-bolder text-4xl 2xl:text-6xl">
        {{ $t("message.subscribe.left.subs") }}
      </h1>
      <h5 class="text-mypurple text-2xl 2xl:text-4xl">
        {{ $t("message.subscribe.left.to") }}
      </h5>
      <h5 class="text-sm py-3 text-gray-500 2xl:text-xl">
        {{ $t("message.subscribe.left.p") }}
      </h5>
    </div>

    <form class="w-[60%] mx-auto mt-2" @submit.prevent="sendEmail">
      <div class="mb-6 2xl:mb-12">
        <input
          :placeholder="$t('message.subscribe.left.name')"
          type="text"
          id="name"
          name="name"
          v-model="name"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
        />
      </div>
      <div class="mb-6 2xl:mb-12">
        <input
          dir="ltr"
          type="email"
          name="email"
          id="email"
          v-model="email"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          placeholder="name@flowbite.com"
        />
      </div>
      <div class="mb-3 2xl:mb-12">
        <textarea
          type="text"
          name="message"
          id="message"
          class="bg-mydark border border-mypurple text-gray-400 text-sm focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
          :placeholder="$t('message.subscribe.left.message')"
          cols="30"
          rows="5"
          v-model="message"
        />
      </div>
      <div class="flex justify-center flex-col">
        <ul v-if="v$.name.$error" class="text-red-500 text-sm mb-3">
          <div v-if="$i18n.locale == 'en'">
            <li v-for="error of v$.$errors" :key="error.$uid">
              {{ error.$message }}
            </li>
          </div>
          <div v-else>
            <li v-for="error of v$.$errors" :key="error.$uid">
              {{ translateErr(error.$message) }}
            </li>
          </div>
        </ul>
        <input
          :value="$t('message.subscribe.left.btn')"
          type="submit"
          class="text-white bg-mypurple hover:bg-purple-950 font-medium text-sm w-full sm:w-auto px-5 py-2.5"
        />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { useVuelidate } from "@vuelidate/core";
import { required, email, alpha } from "@vuelidate/validators";

export default {
  components: {},

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  validations() {
    return {
      name: { required, alpha, $autoDirty: true },
      email: { email, required, $autoDirty: true },
    };
  },

  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    toastEn(e) {
      try {
        emailjs.sendForm(
          "service_xwi6wll",
          "template_rfyp2h7",
          e.target,
          "4ItM1K7n6IiMMOUIN",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        this.$toasted.show("Thank you for subscribing to ouer newsletter !!");
      } catch (error) {
        console.log({ error });
      }
    },

    translateErr(msg) {
      console.log(msg);
      if (msg)
        if (msg.includes("required")) {
          return "الحقل مطلوب";
        } else if (msg.includes("alphabetical")) {
          return "يجب أن يحتوي الحقل على أحرف أبجدية فقط";
        } else if (msg.includes("email")) {
          return "يجب أن يكون الحقل بريدًا إلكترونيًا صالحًا";
        } else {
          return;
        }
    },

    toastAr(e) {
      try {
        emailjs.sendForm(
          "service_xwi6wll",
          "template_rfyp2h7",
          e.target,
          "4ItM1K7n6IiMMOUIN",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
        this.$toasted.show("شكرا لك على الاشتراك ");
      } catch (error) {
        console.log({ error });
      }
    },

    clearForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.v$.$errors = [];
    },

    async sendEmail(e) {
      const isFormCorrect = await this.v$.$validate();
      console.log(isFormCorrect);
      if (!isFormCorrect) {
        if (this.$i18n.locale == "ar") {
          this.$toasted.show("آسف تأكد من عدم وجود أخطاء ");
        } else {
          this.$toasted.show("Sorry make sur there are no errors ");
        }
      } else {
        if (this.$i18n.locale == "ar") {
          this.toastAr(e);
          this.clearForm();
        } else {
          this.toastEn(e);
          this.clearForm();
        }
      }

      // Reset form field
    },
  },
};
</script>
