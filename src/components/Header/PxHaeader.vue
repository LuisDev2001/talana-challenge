<template>
  <header class="header">
    <div class="header__logo">
      <h1>Logo</h1>
    </div>

    <section class="header__actions">
      <PxSearch />
      <PxMiniCart />
    </section>
  </header>
</template>

<script>
import PxMiniCart from "../Cart/PxMiniCart";
import PxSearch from "../Search/PxSearch";

export default {
  name: "PxHeader",
  components: {
    PxMiniCart,
    PxSearch,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxHeader.scss";
</style>
