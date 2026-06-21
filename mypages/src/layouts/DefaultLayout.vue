<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import FooterPage from '@/pages/FooterPage.vue'
import FooterMinimal from '@/pages/FooterMinimal.vue'

const route = useRoute()

const isMinimal = computed(() => route.meta.layout === 'minimal')
</script>

<template>
  <div class="drawer min-h-screen flex flex-col">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col min-h-screen">
      <div class="navbar sticky top-0 z-50 bg-base-300/80 backdrop-blur-md">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 px-2">
          <router-link to="/" class="hover:text-primary transition text-xl">Syamsul Hidayat</router-link>
        </div>
        <div class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <li><a href="#tentang" class="nav-link">Tentang</a></li>
            <li><a href="#pengalaman" class="nav-link">Pengalaman</a></li>
            <li><a href="#studi-kasus" class="nav-link">Studi Kasus</a></li>
            <li><a href="#proyek" class="nav-link">Proyek</a></li>
            <li><a href="#kontak" class="nav-link">Kontak</a></li>
          </ul>
        </div>
        <div class="hidden md:block">
          <input type="text" placeholder="Search" class="input input-bordered w-65 lg:w-auto" />
        </div>
      </div>

      <main>
        <RouterView />
      </main>
      
      <FooterPage v-if="!isMinimal" />
      <FooterMinimal v-else />

    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200/80 backdrop-md min-h-full w-50 p-4">
        <li><a href="#tentang" class="nav-link">Tentang</a></li>
        <li><a href="#pengalaman" class="nav-link">Pengalaman</a></li>
        <li><a href="#studi-kasus" class="nav-link">Studi Kasus</a></li>
        <li><a href="#proyek" class="nav-link">Proyek</a></li>
        <li><a href="#kontak" class="nav-link">Kontak</a></li>
      </ul>
    </div>
  </div>

</template>
