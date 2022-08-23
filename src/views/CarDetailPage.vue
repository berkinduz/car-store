<template>
  <div
    class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4"
    v-if="product"
  >
    <div class="xl:w-2/6 lg:w-2/5 md:block" :key="photo">
      <Carousel :photos="product.photos" :key="photo" />
    </div>

    <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      <div class="border-b border-gray-200 pb-6">
        <p class="text-sm leading-none">{{ product.modelName }}</p>
        <h1
          class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 mt-2"
        >
          {{ product.title }}
        </h1>
      </div>
      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4">KM:</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none font-bold">
            {{ getProperty("km", product.properties) }}
          </p>
        </div>
      </div>
      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4">Year:</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none font-bold">
            {{ getProperty("year", product.properties) }}
          </p>
        </div>
      </div>
      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4">Fuel:</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none font-bold">
            {{ getProperty("fuel", product.properties) }}
          </p>
        </div>
      </div>
      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4">Gear:</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none font-bold">
            {{ getProperty("gear", product.properties) }}
          </p>
        </div>
      </div>
      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4">Color:</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none font-bold">
            {{ getProperty("color", product.properties) }}
          </p>
        </div>
      </div>
      <button
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-400 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-red-600 focus:outline-none"
      >
        <i class="mr-2 fas fa-solid fa-money-bill"></i>
        {{
          product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "TRY",
          })
        }}
      </button>
      <div>
        <p class="text-base leading-4 mt-7">
          Seller:
          <span class="font-bold">{{ product.userInfo.nameSurname }}</span>
        </p>
        <p class="text-base leading-4 mt-7">
          Phone:
          <span class="font-bold">+{{ product.userInfo.phone }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { carGetters } from "../services/carGetters"
import { useProperties } from "../utils/useProperties"

import Carousel from "../components/base/Carousel.vue"

export default defineComponent({
  components: {
    Carousel,
  },
  setup() {
    const { getCarById } = carGetters()
    const { getProperty } = useProperties()
    const router = useRouter()
    const product = ref()

    onMounted(async () => {
      product.value = await getCarById(router.currentRoute.value.params.id)
      document.title = product.value.title
    })

    return {
      product,
      getProperty,
    }
  },
})
</script>
