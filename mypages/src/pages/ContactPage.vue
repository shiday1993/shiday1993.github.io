<script lang="ts">

</script>
<script setup lang="ts">
import { Icon } from '@iconify/vue'

const email = "shiday1993@email.com"

function copyEmail() {
    navigator.clipboard.writeText(email)
}
</script>

<template>
    <section id="kontak" class="py-20">
        <div class="container md:container-fluid mx-auto px-6">
            <div class="card bg-base-200 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-3xl">
                        Ada project atau ide?
                    </h2>

                    <p class="max-w-xl text-base-content/70">
                        Saya terbuka untuk diskusi seputar pengembangan aplikasi,
                        integrasi sistem, backend, maupun kebutuhan digital lainnya.
                        Silakan hubungi saya melalui kontak berikut.
                    </p>

                    <div class="card-actions mt-4 flex flex-wrap justify-center gap-3">
                        <a :href="`mailto:${email}`" class="btn btn-primary">
                            {{ email }}
                        </a>
                        <button @click="copyEmail" class="btn btn-outline btn-primary">
                            Copy Email
                        </button>
                    </div>

                    <div class="divider">
                        atau
                    </div>

                    <div class="flex gap-5">
                        <a href="https://github.com/shiday1993" target="_blank" class="tooltip" data-tip="GitHub">
                            <Icon icon="mdi:github" class="text-4xl hover:text-primary transition" />
                        </a>

                        <a href="https://wa.me/6285870000408" target="_blank" class="tooltip" data-tip="WhatsApp">
                            <Icon icon="mdi:whatsapp" class="text-4xl hover:text-success transition" />
                        </a>

                        <a href="https://t.me/nsdigital2017" target="_blank" class="tooltip" data-tip="Telegram">
                            <Icon icon="line-md:telegram" class="text-4xl hover:text-info transition" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>