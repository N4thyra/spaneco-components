<script>
import Iframe from "@/components/app/Iframe.vue";

import { list } from "@/components/development/list";
import { getViewUrl } from "@/utils/helpers";

export default {
  name: "HomeView",
  components: {
    Iframe,
  },
  data() {
    return {
      list,
    };
  },
  methods: {
    getViewUrl(url) {
      return getViewUrl(url);
    }
  },
  computed: {
    categories() {
      const params = this.$route.params;
      const currentPath = params.id.join("/");

      const regex = new RegExp(`^${currentPath}\/?[a-z0-9]+?[/]?$`, 'i');

      return list.filter(item => regex.test(item.nodePath));
    }
  },
  created() {
  }
};
</script>

<template>
  Categories
  <div v-for="category, key in categories" :key="key">
    <router-link :to="category.nodePath">
      {{ category }}
    </router-link>
    <Iframe
      v-if="category.detail"
      :src="getViewUrl(category.nodePath)"
      :width="'100%'"
      :height="'auto'"
    />
  </div>

</template>
