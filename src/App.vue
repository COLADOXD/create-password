<script setup>
import Copy from './assets/copy-two-paper-sheets-interface-symbol.png'
</script>

<template class="bg-primary py-5 h-screen w-screen px-2">
  <p class="text-primary text-center">Password Generator</p>
  <section class="bg-secondary my-2 py-3 px-4 flex flex-row justify-between">
    <p class="text-secondary">Hoy se come familia</p>
    <img class="h-[24px] " :src="Copy" alt="">
  </section>
  <section class="bg-secondary my-4 py-3 px-4 flex flex-col">
    <div class="flex flex-row justify-between items-center">
      <p class="text-md text-secondary">Character Length</p>
      <p class="text-3xl text-cuarto">10</p>
    </div>
    <input class="range bg-primary accent-yellow-200 rounded-full my-6" type="range" value="0" min="0" max="1000"
      onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)"></input>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <div class="h-[25px] w-[25px] border-[3px] border-primary mr-5"></div>
      <p>Include Uppercase Letters</p>
    </div>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <div class="h-[25px] w-[25px] border-[3px] border-primary mr-5"></div>
      <p>Include Lowercase Letters</p>
    </div>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <div class="h-[25px] w-[25px] border-[3px] border-primary mr-5"></div>
      <p>Include Numbers</p>
    </div>
    <div class="text-secondary mb-3 flex flex-row my-2">
      <div class="h-[25px] w-[25px] border-[3px] border-primary mr-5"></div>
      <p>Include Symbols</p>
    </div>
    <div class="bg-cuarto flex flex-row py-3 px-4 justify-between items-center">
      <div class="text-primary">STRENGTH</div>
      <div class="text-secondary flex flex-row items-center">
        <p class="mr-3 ">MEDIUM</p>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
        <div class="h-[30px] w-[13px] border-primary border-[3px] mr-[5px]"></div>
      </div>
    </div>
  </section>
</template>