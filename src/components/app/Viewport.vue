<script>
import Iframe from "@/components/app/Iframe.vue";
export default {
  name: "Viewport",
  components: {
    Iframe
  },
  props: {
    iFrameSrc: {
      default: null,
      type: String,
    },
    width: {
      default: '360px',
      type: String,
    },
    height: {
      default: '640px',
      type: String,
    },
    backgroundColor: {
      default: '#fff',
      type: String,
    }
  },
};
</script>

<template>
  <div class="viewport">
    <div class="viewport__head"></div>
    <div class="viewport__body">
      <Iframe
        :width="width"
        :height="height"
        :backgroundColor="backgroundColor"
        class="viewport__iframe"
        :src="iFrameSrc"
      ></Iframe>
    </div>
  </div>
</template>

<style scoped>


.viewport__body {
  background: #f7f8f8;
  border-radius: 10px;
  padding: 20px;
  display: block;
}
</style>
