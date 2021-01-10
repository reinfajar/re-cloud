<template>
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="MoneyTory" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded lg:block hidden" src="@/assets/images/moneytory.png">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">MoneyTory</h1>
        <div class="flex mb-4">
          <a @click.prevent="change('desc')" :class="status === 'desc' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'border-b-2 border-gray-300 hover:text-blue-500'" class="flex-grow py-2 text-lg px-1">Description</a>
          <a @click.prevent="change('detail')" :class="status === 'detail' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'border-b-2 border-gray-300 hover:text-blue-500'" class="flex-grow py-2 text-lg px-1">Details</a>
        </div>
        <p v-show="status === 'desc'" class="leading-relaxed mb-4">An Application to Track Money You Had</p>
        <p v-show="status === 'detail'" class="leading-relaxed mb-4">This application was builded when i was having a test to join Codepolitan, it was a nice change of pace trying TailwindCSS, since Codepolitan asked me to make mobile first, the site builded from scratch using Vue 2, TailwindCSS, and hosted at Firebase with db using Cloud Firestore and auth using Firebase Auth</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Deploy Link</span>
          <a class="ml-auto text-gray-900 hover:text-blue-600" target="_blank" href="https://codepolitanserver.web.app/"><span>https://codepolitanserver.web.app/</span></a>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Custom Hosting Link</span>
          <a class="ml-auto text-gray-900 hover:text-blue-600"><span>No Custom Link</span></a>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Stack</span>
          <span class="ml-auto text-gray-900">VueJs, TailwindCSS, Cloud Firestore</span>
        </div>
      </div>
      <img alt="MoneyTory" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded lg:hidden xl:hidden" src="@/assets/images/moneytory.png">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 'desc'
    }
  },
  methods: {
    change (x) {
      this.status = x
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
