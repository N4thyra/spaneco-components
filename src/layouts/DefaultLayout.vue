<script>
  import store from '@/store'

  export default {
    name: "DefaultLayout",
    methods: {
      toggleMarkupPanel() {
        store.commit('toggleMarkupPanel')
      }
    },
    computed: {
      isComponentDetailView() {
        return this.$store.getters.isComponentDetailView;
      }
    }
  }
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/components/buttons/button-epic">Epic Button</router-link> |
    <router-link to="/components/headers/fun">Fun Header</router-link>
  </nav>
  <button class="code-btn" @click="toggleMarkupPanel" v-if="isComponentDetailView">
    <svg class="code-btn__svg" fill="currentColor" viewBox="0 0 616.000000 548.000000"><g transform="translate(0.000000,548.000000) scale(0.100000,-0.100000)"><path d="M3673 5469 c-12 -4 -26 -16 -31 -26 -17 -32 -1512 -5280 -1512 -5307 0 -36 29 -52 172 -92 148 -41 192 -43 212 -11 18 29 1516 5274 1516 5309 0 37 -28 54 -137 84 -153 43 -197 51 -220 43z"></path> <path d="M1578 4151 c-14 -5 -1470 -1284 -1550 -1363 -32 -31 -35 -57 -10 -86 9 -11 247 -222 527 -469 281 -248 625 -552 765 -676 211 -188 260 -227 285 -227 26 0 45 17 143 127 73 82 112 134 112 149 0 18 -142 143 -650 574 -357 303 -650 555 -650 560 0 4 42 44 93 87 50 43 343 291 650 551 453 385 557 478 557 498 0 16 -34 61 -111 146 -112 125 -131 140 -161 129z"></path> <path d="M4504 4117 c-16 -19 -66 -75 -111 -125 -56 -62 -83 -100 -83 -116 0 -18 23 -44 93 -103 50 -43 343 -291 650 -551 306 -261 557 -477 557 -482 0 -5 -73 -71 -162 -147 -90 -75 -280 -237 -423 -358 -143 -121 -362 -308 -487 -414 -182 -153 -228 -197 -228 -217 0 -16 34 -61 111 -146 60 -68 118 -126 128 -129 9 -4 26 -2 38 5 39 20 1563 1370 1569 1388 3 10 3 27 -1 37 -3 11 -355 327 -781 703 -856 755 -813 723 -870 655z"></path></g></svg>
  </button>
  <router-view/>

  
</template>

<style>
  .code-btn {
    all: unset !important;
    color: #fff !important;
    padding: 8px 15px !important;
    background: #333 !important;
    border: none !important;
    cursor: pointer !important;
    font-size: 13px !important;
  }

  .code-btn__svg {
    width: 25px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
