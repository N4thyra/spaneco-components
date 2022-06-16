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
  <ul 
      v-for="node, key in nodes" 
      :key="key"
      :class="['nav-menu', `level-${depth}`]"
  >
    <li>
      <router-link 
        class="nav-menu__link"
        :to="getUrl(node)"
      >
        {{ node.label }} {{ isDetail(node)  ? '(d)' : '(c)' }}
      </router-link>
      <Nav v-if="node.children" :nodes="node.children" :depth="depth + 1"/>
    </li>
  </ul>
</template>

<style scoped>

</style>
