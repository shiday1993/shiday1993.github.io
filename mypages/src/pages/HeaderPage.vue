<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue"

const themes = ref([
  { label: "Default", value: "default" },
  { label: "Dark", value: "dark" },
  { label: "Night", value: "night" },
  { label: "Retro", value: "retro" },
  { label: "Aqua", value: "aqua" }
])


const currentTheme = ref("default")

function setTheme(theme: string) {
  currentTheme.value = theme
  document.documentElement.setAttribute("data-theme", theme)
}
</script>

<template>
  <div class="drawer md:sticky top-0 sm:relative">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="navbar bg-base-300 w-full">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>

        <div class="mx-2 flex-1 px-2">
          <a to="/" class="hover:text-primary transition text-xl">Syamsul Hidayat</a>
        </div>

        <div class="flex-1 hidden lg:block">
          <ul class="menu menu-horizontal">
            <li><a href="#tentang" class="nav-link">Tentang</a></li>
            <li><a href="#pengalaman" class="nav-link">Pengalaman</a></li>
            <li><a href="#studi-kasus" class="nav-link">Studi Kasus</a></li>
            <li><a href="#proyek" class="nav-link">Proyek</a></li>
            <li><a href="#kontak" class="nav-link">Kontak</a></li>
          </ul>
        </div>

        <div class="flex-1 sm:hidden md:block">
          <input type="text" placeholder="Search" class="input input-bordered w-55 lg:w-auto" />
           <div class="flex-1 sm:hidden md:block">
          <div class="dropdown dropdown-end relative">
            <div tabindex="0" role="button" class="btn m-1">
              Theme
              <svg width="12px" height="12px" class="inline-block h-2 w-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul tabindex="-1" class="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl">
              <li v-for="theme in themes" :key="theme.value">
                <button class="theme-controller btn btn-sm btn-block btn-ghost justify-start">
                  {{ theme.label }}
                </button>
              </li>
            </ul>
          </div>
        </div>

        </div>

      </div>

      <main>
        <RouterView />
      </main>

    </div>

    <div class="drawer-side">
      
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-50 p-4">
        <li><a href="#tentang" class="nav-link">Tentang</a></li>
        <li><a href="#pengalaman" class="nav-link">Pengalaman</a></li>
        <li><a href="#studi-kasus" class="nav-link">Studi Kasus</a></li>
        <li><a href="#proyek" class="nav-link">Proyek</a></li>
        <li><a href="#kontak" class="nav-link">Kontak</a></li>
      </ul>
    </div>
  </div>

</template>

<style scoped></style>
