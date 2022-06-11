<template>
  <div class="about">
    <h1 v-if="!isView">Component Detail View</h1>
    <component :is="asyncComp" :isView="isView" />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import { useRoute } from 'vue-router';

  import LoadingComponent from '@/components/app/LoadingComponent.vue';
  import ErrorComponent from '@/components/app/ErrorComponent.vue';

  export default {
    name: 'ComponentDetailView', 
    props: {},
    data() {
      return {
        isView: false,
      }
    },
    methods: {
    },
  
    components: {
    },
    created() {

    },
    computed: {
        asyncComp() {
          const route = useRoute();
          const params = route.params;
          const componentPath = params.id.join('/'); 

          this.isView = route?.meta.isView

          try {
            return defineAsyncComponent({
              loader: () => import (`@/components/development/${componentPath}/Component.vue`),
              loadingComponent: LoadingComponent,
              errorComponent: ErrorComponent,
              delay: 1000,
              timeout: 3000,
              onError(error, retry, fail, attempts) {
              }
            })
          } catch(e) {
            console.log(e)
          }
        }
    },
    mounted() {}
}
</script>

<style scoped></style>