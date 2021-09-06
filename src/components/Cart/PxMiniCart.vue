<template>
  <div class="minicart">
    <div class="minicart__icon">
      <font-awesome-icon icon="shopping-cart" />
      <span class="minicart__count-items">{{ getCartProducts.length }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
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
  setup() {
    const store = useStore();

    const getCartProducts = computed(() => store.getters["getCartProducts"]);

    return {
      getCartProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxMiniCart.scss";
</style>
