<template>
  <section class="generic">
    <h2>{{ titleGeneric }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "GenericView",
  props: {
    titleGeneric: String,
  },
};
</script>

<style lang="scss" scoped></style>
