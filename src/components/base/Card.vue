<template>
  <section
    class="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2 lg:grid-cols-3 lg:mt-0 relative"
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="relative w-full h-full border shadow shadow-black-300"
    >
      <router-link :to="{ name: 'CarDetail', params: { id: product.id } }">
        <button
          type="button"
          name="wishlist"
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
        <img
          loading="lazy"
          alt="Build Your Own Drone"
          class="object-contain w-full h-52 lg:h-72"
          :src="setImageResolution(product.photo)"
        />
        <div class="p-2">
          <span
            class="inline-block px-3 py-1 text-xs font-medium text-white bg-red-500"
          >
            {{ product.modelName }}
          </span>
          <h5
            class="mt-4 text-md max-h-14 font-medium text-gray-600 overflow-hidden"
          >
            {{ product.title }}
          </h5>
          <p class="mt-2 text-md font-bold">
            {{
              product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "TRY",
              })
            }}
          </p>
          <button
            name="add"
            type="button"
            class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span class="text-sm font-medium"> Details </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right ml-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useImage } from "../../utils/useImage"

export default defineComponent({
  props: {
    products: {
      type: Object,
    },
  },
  setup() {
    const { setImageResolution } = useImage()

    return { setImageResolution }
  },
})
</script>
