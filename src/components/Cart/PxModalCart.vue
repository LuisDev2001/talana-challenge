<template>
  <div :class="{ modal__cart: true, active: openCart }">
    <div class="modal__cart-header">
      <h3>Resumen de compra</h3>
      <div class="modal__cart-close" @click="handleCloseModalCart">
        <font-awesome-icon icon="times" />
      </div>
    </div>
    <div class="modal__cart-information" v-if="getCartProducts.length == 0">
      <p>Su carro esta vacío</p>
    </div>
    <div
      class="modal__cart-information"
      v-else
      v-for="(product, index) in getCartProducts"
      :key="index"
    >
      <div class="modal__cart-detail">
        <p>{{ product.productName }}</p>
        <p>Precio: ${{ product.productPrice }}</p>
      </div>

      <div class="modal__cart-qty">
        <p>1</p>
      </div>

      <div class="modal__cart-price">
        <p>${{ product.productPrice }}</p>
      </div>
    </div>

    <div class="modal__cart-total" v-if="getCartProducts.length !== 0">
      <p>Total:</p>
      <p>${{ totalProducts }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTimes);

export default {
  name: "PxModalCart",
  props: {
    openCart: Boolean,
  },
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore();

    const getCartProducts = computed(() => store.getters["getCartProducts"]);

    const totalProducts = computed(() => store.getters["getTotalProducts"]);

    const handleCloseModalCart = () => {
      store.commit("setHideModalMiniCart");
    };

    return {
      getCartProducts,
      totalProducts,
      handleCloseModalCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxModalCart.scss";
</style>
