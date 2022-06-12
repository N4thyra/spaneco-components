<script>
  export default { 
    props: [ 'label', 'nodes', 'depth', 'nodePath'],
    name: 'Nav', 
    computed: {},
    methods: {
      isDetail(node) {
        return node?.detail;
      },
      getUrl(node) { 
        return `/components/${this.isDetail(node) ? 'detail/' : ''}${node.nodePath}`;
      }
    },
    mounted() {}
  }
</script>

<template>
  <div 
      v-for="node, key in nodes" 
      :key="key"
      :class="['nav-menu', `level-${depth}`]"
  >
    <router-link 
      class="nav-menu__link"
      :to="getUrl(node)"
    >
      {{ node.label }} {{ isDetail(node)  ? 'detail' : 'category' }}
    </router-link>
  </div>
</template>

<style scoped>

</style>
