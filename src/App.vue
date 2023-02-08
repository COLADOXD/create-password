<script setup>
import Copy from './assets/copy-two-paper-sheets-interface-symbol.png'
import { passwordStrength } from 'check-password-strength'

import { reactive } from 'vue';

const state = reactive({
  value: 0,
  Uppercase: false,
  Lowercase: false,
  Number: false,
  Symbol: false,
  password: '',
  difficulty: "",
})
console.log(state.value)
// const value = ref('')
function generatePassword() {
  let password = '';
  let possibleCharacters = '';

  if (state.Uppercase) {
    possibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (state.Lowercase) {
    possibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (state.Number) {
    possibleCharacters += '1234567890343416634543';
  }
  if (state.Symbol) {
    possibleCharacters += '!@#$%^&*()_+-=[]{};:,.<>/?\\|';
  }


  for (let i = 0; i < state.value; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  state.password = password;
  console.log(passwordStrength(state.password).value)
}

state.difficulty = passwordStrength(state.password).value


</script>

<template class="bg-primary py-5 h-screen w-screen px-2">


  <p class="text-primary text-center">Password Generator</p>
  <section class="bg-secondary my-2 py-3 px-4 flex flex-row justify-between">
    <p class="text-secondary">{{ state.password }}</p>
    <img class="h-[24px] " :src="Copy" alt="">
  </section>
  <code class="text-white">
  Longitud: {{ state.value }}
  es mayuscula: {{ state.Uppercase }}
  es miniscula: {{ state.Lowercase }}
  incluye numeros: {{ state.Number }}
  incluye simbolos: {{ state.Symbol }}
</code>
  <section class="bg-secondary my-4 py-3 px-4 flex flex-col">
    <div class="flex flex-row justify-between items-center">
      <p class="text-md text-secondary">Character Length</p>
      <p class="text-3xl text-cuarto">{{ state.value }}</p>
    </div>
    <input id="default-range" type="range" min="0" max="50" v-model="state.value"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 my-8" />
    <div class="text-secondary mb-3 flex flex-row my-2">
      <input v-model="state.Uppercase" v-on:click="!state.Uppercase" type="checkbox"
        class="h-[25px] w-[25px] border-[3px] border-primary mr-5 bg-primary" />
      <p>Include Uppercase Letters</p>
    </div>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <input v-model="state.Lowercase" v-on:click="!state.Lowercase" type="checkbox"
        class="h-[25px] w-[25px] border-[3px] border-primary mr-5" />
      <p>Include Lowercase Letters</p>
    </div>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <input v-model="state.Number" v-on:click="!state.Number" type="checkbox"
        class="h-[25px] w-[25px] border-[3px] border-primary mr-5" />
      <p>Include Numbers</p>
    </div>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <input v-model="state.Symbol" v-on:click="!state.Symbol" type="checkbox"
        class="h-[25px] w-[25px] border-[3px] border-primary mr-5" />
      <p>Include Symbols</p>
    </div>
    <div class="bg-cuarto flex flex-row py-3 px-4 justify-between items-center">
      <div class="text-primary">STRENGTH</div>
      <div class="text-secondary flex flex-row items-center">
        <p class="mr-3 ">{{ passwordStrength(state.password).value }}</p>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
      </div>
    </div>
    <button v-on:click="generatePassword" class="text-white">
      <p>Gerate</p>
    </button>
  </section>
</template>