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
          <option readonly>Direction</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, watch, defineEmits } from "vue"

export default defineComponent({
  setup(_, { emit }) {
    const sortings = ref({
      sortType: "date",
      sortDirection: "ascending",
    })

    watch(sortings.value, () => {
      emit("sortChanged", sortings.value)
    })

    return { sortings }
  },
})
</script>
