<script>
export default {
  name: "Viewport",
  props: {
    iFrameSrc: {
      default: null,
      type: String,
    },
    width: {
      default: 360,
      type: Number,
    },
    height: {
      default: 640,
      type: Number,
    }
  },
};
</script>

<template>
  <div class="viewport">
    <div class="viewport__head"></div>
    <div class="viewport__body">
      <iframe
        :style="{ width: `${width}px`, height: `${height}px`}" 
        class="viewport__iframe"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-pointer-lock"
        :src="iFrameSrc"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.markups {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  border-top: 1px solid #e1e1e1;
  transition: all 300ms ease;
}

.markup__col {
  display: flex;
  flex-flow: column;
  flex: 1;
  border-right: 3px solid #e1e1e1;
  max-height: min(250px, 50vh);
  position: relative;
}

.markup__language {
  margin: 0;
  flex: 1;
  overflow: auto;
  font-size: 13px;
}

.viewport {
  width: 400px;
}

.viewport__body {
  background: #f7f8f8;
  border-radius: 10px;
  padding: 20px;
  display: block;
}

.viewport__iframe {
  border: none;
  background-color: #fff;
  overflow-x: hidden;
}
</style>
