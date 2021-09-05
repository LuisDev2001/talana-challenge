<template>
  <div class="minicart">
    <div class="minicart__icon">
      <font-awesome-icon icon="shopping-cart" />
      <span class="minicart__count-items">0</span>
    </div>
  </div>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faShoppingCart);

export default {
  name: "PxMiniCart",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxMiniCart.scss";
</style>
