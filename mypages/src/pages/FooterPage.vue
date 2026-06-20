<script setup lang="ts">
  import ContactPage from './ContactPage.vue';
  const year = new Date().getFullYear()
</script>

<template>
  <ContactPage />
  <footer
    class="footer md:footer-horizontal bg-neutral text-neutral-content md:justify-around sm:justify-center items-center p-4">
    <aside class="grid-flow-col items-center">
      <p>Copyright &copy; {{ year }} Syamsul Hidayat.</p>
    </aside>
    <nav class="grid-flow-col md:place-self-center md:justify-self-end items-center">
      <a href="https://github.com/shiday1993/shiday1993.github.io" target="_blank" rel="noopener"
        class="tooltip hover:text-primary transition" data-tip="GitHub/shiday1993">
        Source on <b>GitHub</b>
      </a>
    </nav>
  </footer>
</template>