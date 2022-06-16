<script>
  export default { 
    props: [ 'label', 'nodes', 'depth', 'nodePath'],
    name: 'Nav', 
    data() {
      return {
        componentPath: '',
      }
    },
    watch: {
    },
    methods: {
      isDetail(node) {
        return node?.detail;
      },
      getUrl(node) { 
        return `/components/${this.isDetail(node) ? 'detail/' : ''}${node.nodePath}`;
      },
      g(d) {
        console.log(d)
      }
    },
    created() {
    this.$watch(
      () => this.$route.params, (toParams, previousParams) => {
         try {
            const componentPath = this.$route.params.id.join("/");
            this.componentPath = componentPath;
          } catch (e) {
            console.log(e);
          }
      }
    );
  },
    mounted() {
    }
  }
</script>

<template>
  <ul 
      v-for="node, key in nodes" 
      :key="key"
      :class="['nav-menu', `level-${depth}`, {'is-active': componentPath.startsWith(node.nodePath)}]"
  >
    <li>
      <router-link 
        class="nav-menu__link"
        :to="getUrl(node)"
        @click="currentPath = node.nodePath"
      >
        {{ node.label }} {{ isDetail(node)  ? '(d)' : '(c)' }} {{ node.nodePath }}
      </router-link>
      <Nav v-if="node.children" :nodes="node.children" :depth="depth + 1"/>
    </li>
  </ul>
</template>

<style scoped>

</style>
