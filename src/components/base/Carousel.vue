<template>
  <div class="carousel relative rounded relative overflow-hidden shadow-xl">
    <div class="carousel-inner relative overflow-hidden w-full">
      <div>
        <input
          class="carousel-open"
          type="radio"
          :id="'carousel-1'"
          name="carousel"
          aria-hidden="true"
          hidden="true"
          checked="true"
        />
        <div
          class="carousel-item absolute opacity-0 bg-cover h-[600px]"
          :key="photoIndex"
          :style="{
            backgroundImage:
              'url(' + setImageResolution(photos[photoIndex] || noImage) + ')',
          }"
        ></div>
        <button
          class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"
          @click="changePhoto('increase')"
        >
          <i class="fas fa-angle-left"></i>
        </button>
        <button
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          @click="changePhoto('decrease')"
        >
          <i class="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useImage } from "../../utils/useImage"
export default defineComponent({
  props: {
    photos: { type: Array, default: ["../assets/no_image.png"] },
  },
  setup(props) {
    const { setImageResolution } = useImage()
    const photoIndex = ref(0)
    const photoCount = props.photos?.length || 2
    const noImage: string = "../assets/no_image.png"
    const changePhoto = (type: string) => {
      if (type === "decrease") {
        if (photoIndex.value < photoCount - 1) {
          photoIndex.value++
        }
      } else if (type === "increase") {
        if (photoIndex.value > 0) {
          photoIndex.value--
        }
      }
    }

    return { setImageResolution, photoIndex, changePhoto, noImage }
  },
})
</script>

<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
