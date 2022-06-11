<script>
  import { useRoute } from 'vue-router';

  import Prism from "prismjs"; 
  import "prismjs/themes/prism.css";

  import contentHtml from '!raw-loader!./component.html' 
  import contenCss   from '!raw-loader!./component.css';
  import contentJs   from '!raw-loader!./component.js'

  export default {
    name: 'Component', 
    props: {
      isView: false,
    },
    data() {
      return {
        contentHtml, 
        contenCss,
        contentJs,
        iFrameSrc: '',
      }
    },
    methods: {
    },
    mounted() {
      const script = document.createElement("script");
      script.innerHTML = contentJs;
      document.head.appendChild(script);

      const route = useRoute();
      const params = route.params;
      const componentPath = params.id.join('/'); 

      this.iFrameSrc = `/views/${componentPath}`;

      Prism.highlightAll(); // highlight your code on mount
    }
  }
</script>

<template>
  <div class="component js-component" v-html="contentHtml"></div>  

  <div class="markups" v-if="!isView">
    <div class="markup__col">
      <p class="markup__title">HTML</p>
      <pre class="markup__language language-html"><code>{{ contentHtml }}</code></pre>
    </div>  

    <div class="markup__col">
      <p class="markup__title">JS</p>
      <pre class="markup__language language-javascript"><code>{{ contentJs }}</code></pre>
    </div>

    <div class="markup__col">
      <p class="markup__title">CSS</p>
      <pre class="markup__language language-css"><code v-html="contenCss"></code></pre>
    </div>
  </div>

  <iframe :src="iFrameSrc" frameborder="0" v-if="!isView"></iframe>
</template>

<style scoped>
  @import './component.css';

  .component {
    margin-bottom: 50px;
  }

  .markups {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .markup__col {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .markup__language {
    flex: 1;
  }
</style>
