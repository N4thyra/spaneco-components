<script>
export default {
  name: "Viewport",
  props: {
    src: {
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
  <iframe
        :style="{ width, height, backgroundColor}" 
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-pointer-lock"
        :src="src"
      ></iframe>
</template>

<style scoped>
iframe {
  border: none;
  overflow-x: hidden;
}
</style>
