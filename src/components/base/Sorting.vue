<template>
  <div class="flex items-center justify-between mb-5">
    <p class="text-sm text-gray-500">
      <span class="hidden sm:inline"> Cars For Sale </span>
    </p>

    <div class="ml-4 flex flex-row gap-4">
      <div class="ml-4">
        <label for="sort_by" class="text-gray-400"> Sort By: </label>
        <select
          id="SortBy"
          name="sort_by"
          class="border-gray-100 rounded"
          v-model="sortings.sortType"
        >
          <option value="price">Price</option>
          <option value="date">Listing Date</option>
          <option value="year">Car Age</option>
        </select>
      </div>
      <div class="ml-4">
        <label for="sort_dir" class="text-gray-400"> Sort Direction: </label>
        <select
          id="SortDirection"
          name="sort_dir"
          class="border-gray-100 rounded"
          v-model="sortings.sortDirection"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="ml-4">
        <label for="num_of_item" class="text-gray-400"> Items: </label>
        <select
          id="NumberOfItem"
          name="num_of_item"
          class="border-gray-100 rounded"
          v-model="sortings.numberOfItem"
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { Sortings } from "../../types/sortings"

export default defineComponent({
  setup(_, { emit }) {
    const sortings = ref<Sortings>({
      sortType: "date",
      sortDirection: "ascending",
      numberOfItem: "20",
    })

    watch(sortings.value, () => {
      emit("sortChanged", sortings.value)
    })

    return { sortings }
  },
})
</script>
