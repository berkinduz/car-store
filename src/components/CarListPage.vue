<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
      <Filtering />
      <div class="lg:col-span-3">
        <Sorting @sort-changed="updateList" />
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
import { useFilters } from "../utils/useFilters"

export default defineComponent({
  components: {
    Card,
    Filtering,
    Sorting,
  },
  setup() {
    const { getCars } = useFilters()
    const products = ref({})

    onMounted(async () => {
      products.value = await getCars("date", "ascending", 10)
    })

    const updateList = async (sort: any) => {
      const sortType = sort.sortType
      const sortDirection = sort.sortDirection

      products.value = await getCars(sortType, sortDirection, 20)
    }

    return {
      products,
      updateList,
    }
  },
})
</script>

<style scoped></style>
