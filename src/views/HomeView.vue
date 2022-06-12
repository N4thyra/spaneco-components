<script>
import Viewport from "@/components/app/Viewport.vue";

export default {
  name: "HomeView",
  components: {
    Viewport,
  },
};
</script>

<template>
    <Viewport iFrameSrc="/views/buttons/button-epic" :width="1000" :height="200" />
    <Viewport iFrameSrc="/views/headers/fun" :width="1000" :height="200" />
</template>
