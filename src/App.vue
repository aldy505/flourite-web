<template>
  <div class="font-body bg-light-100 dark:(text-white bg-dark-900) h-full min-h-screen w-full">
    <div class="container mx-auto px-8 sm:px-8 md:px-20 lg:px-40 py-6 sm:py-10 md:py-18 lg:py-24">
      <h1 class="text-4xl font-bold text-center pb-2">
        Flourite Web
      </h1>
      <p class="text-base pb-4 text-center">
        Here you can test <a
          href="https://github.com/teknologi-umum/flourite"
          class="hover:(underline text-indigo-700) dark:hover:(underline text-indigo-300)"
        >Flourite</a>
      </p>
      <textarea
        v-model="code"
        @change="detectLanguage()"
        class="w-full min-h-40 p-4 my-4 font-code text-sm md:text-base ring-dark-400 bg-light-500 ring-0 focus:bg-light-300 dark:(bg-dark-400 focus:bg-dark-300)"
      />
      <p
        class="text-base py-2 text-center"
        v-if="language"
      >
        Language: <strong>{{ language }}</strong>
      </p>
      <p
        class="text-base py-2 text-center"
        v-else
      >
        Insert some code on the text area above first.
      </p>
      <p class="text base py-4 text-center">
        Made with 😘 in Indonesia
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import flourite from 'flourite';

export default defineComponent({
  name: 'App',
  data() {
    return {
      code: '',
      language: '',
      codemirror: null,
      cmInstance: null,
    };
  },
  watch: {
    code: 'detectLanguage',
  },
  methods: {
    detectLanguage() {
      const generated = flourite(this.code);
      this.language = generated as string;
    },
  },
});
</script>

<style>
</style>
