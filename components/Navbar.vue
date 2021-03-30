<template>
  <nav
    class="h-screen w-44 fixed bg-gray-900 flex flex-col items-center text-white justify-between font-serif"
  >
    <div class="pt-4">
      <p class="text-3xl pl-6 pr-8">Aree</p>
      <div class="flex flex-col items-center">
        <NuxtLink class="text-lg mt-4" to="/exams"> Exams </NuxtLink>
        <NuxtLink class="text-lg mt-4" to="/candidates"> Candidates </NuxtLink>
      </div>
    </div>
    <div class="mb-10">
      <p class="px-6 text-lg">
        Ari Romero
      </p>
    </div>
  </nav>
</template>
