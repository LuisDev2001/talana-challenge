<template>
  <div class="breadcrumb">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <span class="separator"> / </span>
      <li>
        <router-link to="/">Products</router-link>
      </li>
      <span class="separator"> / </span>
      <li class="active">
        {{ nameCategory }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PxBreadcrumb",
  props: {
    nameCategory: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxBreadcrumb.scss";
</style>
