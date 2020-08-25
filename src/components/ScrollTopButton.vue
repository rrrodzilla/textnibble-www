<template>
  <ScrollTopComponent class="w-10">
    <a class="btn-light bg-banana bg-opacity-30 rounded-md pt-8 px-2 pb-2">
      <lottie-animation
        class="opacity-90 h-auto w-auto inline-block"
        path="10345-up-arrows.json"
        :autoPlay="true"
        :speed=".4"
        :renderer="svg"
      />
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from "./ScrollTop";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  components: {
    LottieAnimation,
    ScrollTopComponent
  },
  data() {
    return {
      svg: ""
    };
  }
};
</script>

<style>
.btn {
  padding-top: 27px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
}
</style>