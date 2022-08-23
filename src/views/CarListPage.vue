<template>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
      <Filtering @filterApplied="filterList" />
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

import Card from "../components/base/Card.vue"
import Filtering from "../components/base/Filtering.vue"
import Sorting from "../components/base/Sorting.vue"
import { useFilters } from "../utils/useFilters"
import { carGetters } from "../services/carGetters"

export default defineComponent({
  components: {
    Card,
    Filtering,
    Sorting,
  },
  setup() {
    const { getCars } = useFilters()
    const { getFilteredCars } = carGetters()
    const products = ref({})

    onMounted(async () => {
      products.value = await getCars("date", "ascending", 10)
    })

    const updateList = async (sort: any) => {
      const sortType = sort.sortType
      const sortDirection = sort.sortDirection

      products.value = await getCars(sortType, sortDirection, 20)
    }

    const filterList = async (filters) => {
      products.value = await getFilteredCars(filters, 50)
    }

    return {
      products,
      updateList,
      filterList,
    }
  },
})
</script>

<style scoped></style>
