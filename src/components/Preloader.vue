<template>
  <div class="progress">
    <div class="indeterminate"></div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
};
</script>

<style lang="scss" scoped>
.progress{
  margin: 0;
  position: fixed;

  & .indeterminate{

  }
}

</style>
