<template>
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Codepolitan</h1>
        <div class="flex mb-4">
          <a @click.prevent="change('desc')" :class="status === 'desc' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'border-b-2 border-gray-300 hover:text-blue-500'" class="flex-grow py-2 text-lg px-1">Description</a>
          <a @click.prevent="change('detail')" :class="status === 'detail' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'border-b-2 border-gray-300 hover:text-blue-500'" class="flex-grow py-2 text-lg px-1">Details</a>
        </div>
        <p v-show="status === 'desc'" class="leading-relaxed mb-4">Main Landing Page of Codepolitan.com</p>
        <p v-show="status === 'detail'" class="leading-relaxed mb-4">I worked on this project from the start, creating project, slicing design, developing app to be reactive, implemented api and pwa to build this website</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Deploy Link</span>
          <a class="ml-auto text-gray-900 hover:text-blue-600" target="_blank" href="https://codepolitan-homepage.web.app"><span>https://codepolitan-homepage.web.app</span></a>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Custom Hosting Link</span>
          <a class="ml-auto text-gray-900 hover:text-blue-600" target="_blank" href="https://www.codepolitan.com"><span>https://www.codepolitan.com</span></a>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Stack</span>
          <span class="ml-auto text-gray-900">VueJs, Bootstrap-Vue</span>
        </div>
      </div>
      <img alt="Codepolitan" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="@/assets/images/codepolitan.png">
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
