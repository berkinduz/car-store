<template>
  <div class="lg:sticky lg:top-4">
    <details open class="overflow-hidden border border-gray-200 rounded">
      <summary
        class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
      >
        <span class="text-sm font-medium"> Toggle Filters </span>

        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>

      <form action="" class="border-t border-gray-200 lg:border-t-0">
        <fieldset>
          <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
            Model Year
          </legend>

          <div class="px-5 py-6 space-y-2">
            <div class="flex items-center">
              <label for="minYear" class="mr-5 text-sm font-medium">
                Min
              </label>
              <input
                id="minYear"
                type="input"
                class="border border-gray-500 rounded ml-auto p-1"
                v-model="filters.minYear"
              />
            </div>

            <div class="flex items-center">
              <label for="minYear" class="mr-5 text-sm font-medium">
                Max
              </label>
              <input
                id="minYear"
                type="input"
                class="border border-gray-500 rounded ml-auto p-1"
                v-model="filters.maxYear"
              />
            </div>

            <div class="pt-2">
              <button
                type="button"
                class="text-xs text-gray-500 underline"
                @click="resetFilters"
              >
                Reset Type
              </button>
            </div>
          </div>
        </fieldset>

        <div class="flex justify-between px-5 py-3 border-t border-gray-200">
          <button
            name="commit"
            type="button"
            class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            @click="applyFilters"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </details>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import { Filters } from "../../types/filters"

export default defineComponent({
  setup(_, { emit }) {
    const filters = ref<Filters>({
      minYear: 0,
      maxYear: 2022,
    })

    const applyFilters = () => {
      emit("filterApplied", filters.value)
    }

    const resetFilters = () => {
      filters.value.maxYear = 2022
      filters.value.minYear = 0
      emit("filterApplied", filters.value)
    }

    return { filters, applyFilters, resetFilters }
  },
})
</script>
