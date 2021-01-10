<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-800 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link to="/" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-white flex items-center">
          <img class="object-cover object-center rounded-full w-8 h-8" alt="hero" src="@/assets/images/profile.jpg">
          <span class="ml-3 text-xl">ReinFajar</span>
        </router-link>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" @click.prevent="toggleNavbar">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center ml-10">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link to="/skill" class="mr-5 text-white hover:text-indigo-200">Skill</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" class="mr-5 text-white hover:text-indigo-200">Project</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="mr-5 text-white hover:text-indigo-200">Experience</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="mr-5 text-white hover:text-indigo-200">Certificate</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="mr-5 text-white hover:text-indigo-200">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>

</style>
