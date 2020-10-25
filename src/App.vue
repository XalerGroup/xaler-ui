<template>
  <div id="app">
    <component :is="switchComponent()">
      <router-view/>
    </component>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

export default {
  name: 'App',
  components: {
    BaseLayout,
    AdminLayout,
  },
  methods: {
    switchComponent() {
      return `${this.$route.meta.layout || 'base'}-layout`;
    },
  },
};
</script>

<style lang="scss">
@import 'assets/styles/style';

</style>
