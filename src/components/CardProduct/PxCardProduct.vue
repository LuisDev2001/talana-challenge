<template>
  <div class="product">
    <img :src="productUrl" alt="" class="product__image" />
    <section class="product__information">
      <p class="product__name">{{ productName }}</p>
      <p class="product__price"><b>Precio:</b> ${{ productPrice }}</p>
    </section>
    <section class="product__actions">
      <PxInputQty />
      <button class="btn btn-add">
        <font-awesome-icon icon="cart-plus" />
      </button>
    </section>
  </div>
</template>

<script>
//UI
import PxInputQty from "./PxInputQty";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCartPlus);

export default {
  name: "PxCardProduct",
  props: {
    productUrl: String,
    productName: String,
    productPrice: Number,
  },
  components: {
    PxInputQty,
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxCardProduct.scss";
</style>
