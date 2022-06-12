<script>
import Prism from "prismjs"
import "prismjs/themes/prism.css"

import CopyButton from "@/components/app/CopyButton.vue"
import Viewport from "@/components/app/Viewport.vue"

export default {
  name: "Component",
  components: {
    CopyButton,
    Viewport,
  },
  data() {
    return {
      contentHtml: "",
      contenCss: "",
      contentJs: "",
      iFrameSrc: "",
      isViewHidden: false,
      isMarkupHidden: true,
      dynamicElementClassname: "js-dynamically-created",
    };
  },
  computed: {
    isMarkupPanelVisible() {
      return this.$store.state.isMarkupPanelVisible;
    },
    isIframeView() {

    }
  },
  methods: {
    loadData(componentPath) {
      const promiseHtml = import(`!raw-loader!@/components/development/${componentPath}/component.html`).then((result) => (this.contentHtml = result.default))
      const promiseCss = import(`!raw-loader!@/components/development/${componentPath}/component.css`).then((result) =>  {
        this.contenCss = result.default

        const style = document.createElement("style");
        style.innerHTML = this.contenCss;
        style.classList.add(`${this.dynamicElementClassname}`);
        document.head.appendChild(style);
      })
      const promiseJs = import(`!raw-loader!@/components/development/${componentPath}/component.js`).then((result) => {
        this.contentJs = result.default;

        const script = document.createElement("script");
        script.innerHTML = this.contentJs;
        script.classList.add(`${this.dynamicElementClassname}`);
        document.body.appendChild(script);
      })

      this.iFrameSrc = `/views/${componentPath}`

      Promise.all([promiseHtml, promiseCss, promiseJs]).then((_) =>
        Prism.highlightAll()
      )
    },
  },
  created() {
    this.$watch(() => this.$route.params, (toParams, previousParams) => {
      document.querySelectorAll(`.${this.dynamicElementClassname}`).forEach(item => item.remove());
        if (this.$route.params.id) {
          const componentPath = this.$route.params.id.join("/");
          this.loadData(componentPath);
        }
      }
    );
  },
  mounted() {
    this.isViewHidden = this.$route.meta.isViewHidden;
    const params = this.$route.params;
    const componentPath = params.id.join("/");
    this.loadData(componentPath);
  },
};
</script>

<template>
  <div class="component js-component" v-html="contentHtml"></div>

  <Viewport :iFrameSrc="iFrameSrc" v-if="!isViewHidden"/>

  <transition name="slide" v-if="!isViewHidden">
    <div
      :class="['markups', { slide: isMarkupPanelVisible }]"
      v-show="isMarkupPanelVisible"
    >
      <div class="markup__col">
        <CopyButton text="Copy <HTML>" :copy-data="contentHtml" />
        <pre class="js-language-html markup__language language-html"><code>{{ contentHtml }}</code></pre>
      </div>

      <div class="markup__col">
        <CopyButton text="Copy JS" :copy-data="contentJs" />
        <pre class="markup__language language-javascript"><code>{{ contentJs }}</code></pre>
      </div>

      <div class="markup__col">
        <CopyButton text="Copy CSS" :copy-data="contenCss" />
        <pre class="markup__language language-css"><code>{{ contenCss }}</code></pre>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.component {
  margin-bottom: 50px;
}

.slide-enter {
  transform: translateY(0);
}
.slide-enter-active {
  transform: translateY(100%);
}

.slide-leave {
  transform: translateY(0);
}
.slide-leave-active {
  transform: translateY(100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 750ms ease-in-out;
}

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
  width: 360px;
  border: none;
  background-color: #fff;
  overflow-x: hidden;
}

</style>