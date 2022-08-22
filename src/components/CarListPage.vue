<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
      <Filtering />
      <div class="lg:col-span-3">
        <Sorting />
        <Card :products="products" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"

import Card from "./base/Card.vue"
import Filtering from "./base/Filtering.vue"
import Sorting from "./base/Sorting.vue"
import { carGetters } from "../services/carGetters"

export default defineComponent({
  components: {
    Card,
    Filtering,
    Sorting,
  },
  setup() {
    const { getCarBySorting } = carGetters()
    const products = ref({})

    onMounted(async () => {
      products.value = await getCarBySorting(0, 0, 10)
    })

    return {
      products,
    }
  },
})
</script>

<style scoped></style>
