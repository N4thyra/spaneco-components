<script>
  import Prism from "prismjs"; 
  import "prismjs/themes/prism.css";

  export default {
    name: 'Component', 
    data() {
      return {
        contentHtml: '', 
        contenCss: '',
        contentJs: '',
        iFrameSrc: '',
        isView: false,
      }
    },
    methods: {
      loadData(componentPath) {
        import(`@/components/development/${componentPath}/component.css`).then( result => this.contenCss = result.default )
        const promiseHtml = import(`!raw-loader!@/components/development/${componentPath}/component.html`).then( result => this.contentHtml = result.default)
        const promiseCss = import(`!raw-loader!@/components/development/${componentPath}/component.css`).then( result => this.contenCss = result.default)
        const promiseJs = import(`!raw-loader!@/components/development/${componentPath}/component.js`).then( result =>  { 
          this.contentJs = result.default
          const script = document.createElement("script")
          script.innerHTML = this.contentJs
          document.head.appendChild(script)
        });

        this.iFrameSrc = `/views/${componentPath}`

        Promise.all([promiseHtml, promiseCss, promiseJs]).then( _ => Prism.highlightAll())

      }
    },
    created() {
      this.$watch(() => this.$route.params, (toParams, previousParams) => {
        if (this.$route.params.id) {
          const componentPath = this.$route.params.id.join('/')
          this.loadData(componentPath)
        }
      })
    },
    mounted() {
      this.isView = this.$route.meta.isView
      const params = this.$route.params
      const componentPath = params.id.join('/')
      this.loadData(componentPath)
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
      <pre class="markup__language language-css"><code>{{ contenCss }}</code></pre>
    </div>
  </div>

  <iframe :src="iFrameSrc" frameborder="0" v-if="!isView"></iframe>
</template>

<style scoped>
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