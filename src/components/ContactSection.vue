<script setup lang="ts">
import { reactive, computed } from 'vue'
interface Contact {
  name: string
  email: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

const state = reactive<{
  form: Contact
  touched: boolean
  sent: boolean
  sentName: string
}>({
  form: { name: '', email: '', message: '' },
  touched: false,
  sent: false,
  sentName: '',
})

function validate(): Errors {
  const e: Errors = {}
  if (!state.form.name.trim()) e.name = 'Nama wajib diisi'
  if (!state.form.email.trim()) e.email = 'Email wajib diisi'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.form.email.trim())) e.email = 'Format email tidak valid'
  if (!state.form.message.trim()) e.message = 'Pesan wajib diisi'
  return e
}

const errors = computed<Errors>(() => {
  return state.touched ? validate() : {}
})

function isBad(field: keyof Errors): string {
  return errors.value[field] ? '#5a2a1f' : '#2a2a2a'
}

function submit() {
  const errs = validate()
  if (Object.keys(errs).length) {
    state.touched = true
    return
  }
  state.sent = true
  state.sentName = state.form.name.trim().split(' ')[0]
}

function reset() {
  state.form = { name: '', email: '', message: '' }
  state.touched = false
  state.sent = false
  state.sentName = ''
}

const contacts = [
  { label: 'Email', value: 'anggadwikurniawan6@gmail.com', href: 'mailto:anggadwikurniawan6@gmail.com' },
  { label: 'LinkedIn', value: 'in/anggadwk', href: 'https://www.linkedin.com/in/anggadwk/' },
  { label: 'GitHub', value: '@Angga2k', href: 'https://github.com/Angga2k' },
  { label: 'Instagram', value: '@a.nggadwk_', href: 'https://www.instagram.com/a.nggadwk_' },
]
</script>

<template>
  <section id="contact" class="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
    <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-[54px] border-b lg:border-b-0 lg:border-r border-border">
      <div class="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[.12em] text-accent">06 — KONTAK</div>
      <h2 class="font-bricolage font-extrabold text-[28px] sm:text-[34px] md:text-[38px] lg:text-[46px] tracking-[-.03em] leading-[.98] mt-4 md:mt-[18px] mb-4 md:mb-[18px]">
        Mari membangun sesuatu bersama.
      </h2>
      <p class="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.65] md:leading-[1.6] text-muted m-0 mb-6 md:mb-[30px] max-w-[380px]">
        Terbuka untuk magang dan kolaborasi di bidang backend engineering, software, dan machine learning.
      </p>
      <div class="flex flex-col gap-[2px]">
        <a
          v-for="c in contacts"
          :key="c.label"
          :href="c.href"
          :target="c.href.startsWith('http') ? '_blank' : undefined"
          class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 py-3 sm:py-3.75 border-t border-border text-text transition-colors duration-200 hover:text-accent"
          :class="{ 'border-b border-border': c === contacts[contacts.length - 1] }"
        >
          <span class="font-bricolage font-bold text-[16px] sm:text-[17px] md:text-[19px]">{{ c.label }}</span>
          <span class="font-mono text-[11px] sm:text-[12px] md:text-[13px] text-subtle">{{ c.value }} ↗</span>
        </a>
      </div>
    </div>

    <div class="px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-[54px]">
      <!-- Sent state -->
      <div v-if="state.sent" class="border border-border-light bg-card-bg p-8 md:p-[44px_40px] text-center animate-pop">
        <div class="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[.14em] text-accent">PESAN TERKIRIM</div>
        <h3 class="font-bricolage font-extrabold text-[26px] sm:text-[30px] md:text-[34px] tracking-[-.02em] text-text mt-3 md:mt-3.5 mb-2 md:mb-2.5">
          Terima kasih, {{ state.sentName }}.
        </h3>
        <p class="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-muted m-0 mx-auto max-w-[380px]">
          Pesan Anda sudah tercatat. Saya akan membalas ke email Anda secepatnya.
        </p>
        <button
          @click="reset"
          class="mt-6 md:mt-[26px] font-mono text-[12px] md:text-[13px] tracking-[.08em] bg-transparent text-text border border-border-hover px-5 md:px-[22px] py-2.5 md:py-3 cursor-pointer transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          KIRIM LAGI ↗
        </button>
      </div>

      <!-- Form state -->
      <div v-else class="flex flex-col gap-5 md:gap-[22px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[22px]">
          <div>
            <label class="block font-mono text-[10px] sm:text-[11px] md:text-[12px] tracking-[.1em] text-subtle mb-2 md:mb-[9px]">NAMA *</label>
            <input
              v-model="state.form.name"
              placeholder="Nama Anda"
              :style="{ borderColor: isBad('name') }"
              class="w-full bg-card-bg text-text font-bricolage text-[14px] md:text-[16px] px-3 md:px-[15px] py-3 md:py-3.5 outline-none border transition-colors duration-200 focus:border-accent"
            />
            <div v-if="errors.name" class="font-mono text-[10px] md:text-[11px] text-error mt-2 md:mt-[7px]">{{ errors.name }}</div>
          </div>
          <div>
            <label class="block font-mono text-[10px] sm:text-[11px] md:text-[12px] tracking-[.1em] text-subtle mb-2 md:mb-[9px]">EMAIL *</label>
            <input
              v-model="state.form.email"
              placeholder="anda@email.com"
              :style="{ borderColor: isBad('email') }"
              class="w-full bg-card-bg text-text font-bricolage text-[14px] md:text-[16px] px-3 md:px-[15px] py-3 md:py-3.5 outline-none border transition-colors duration-200 focus:border-accent"
            />
            <div v-if="errors.email" class="font-mono text-[10px] md:text-[11px] text-error mt-2 md:mt-[7px]">{{ errors.email }}</div>
          </div>
        </div>
        <div>
          <label class="block font-mono text-[10px] sm:text-[11px] md:text-[12px] tracking-[.1em] text-subtle mb-2 md:mb-[9px]">PESAN *</label>
          <textarea
            v-model="state.form.message"
            rows="5"
            placeholder="Ceritakan peluang atau proyek Anda…"
            :style="{ borderColor: isBad('message') }"
            class="w-full bg-card-bg text-text font-bricolage text-[14px] md:text-[16px] px-3 md:px-[15px] py-3 md:py-3.5 outline-none border transition-colors duration-200 focus:border-accent resize-vertical"
          />
          <div v-if="errors.message" class="font-mono text-[10px] md:text-[11px] text-error mt-2 md:mt-[7px]">{{ errors.message }}</div>
        </div>
        <button
          @click="submit"
          class="w-full sm:w-auto self-start font-mono font-bold text-[12px] sm:text-[13px] md:text-[14px] tracking-[.06em] bg-accent text-surface border-none px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 cursor-pointer transition-colors duration-200 hover:bg-[#ff80b0]"
        >
          KIRIM PESAN →
        </button>
      </div>
    </div>
  </section>
</template>
