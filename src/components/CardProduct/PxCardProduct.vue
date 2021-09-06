<template>
  <div class="product">
    <div v-if="productStock > 0" class="product__available">
      Disponible
    </div>
    <img :src="productUrl" alt="" class="product__image" />
    <section class="product__information">
      <p class="product__name">{{ productName }}</p>
      <p class="product__price"><b>Precio:</b> ${{ productPrice }}</p>
    </section>
    <section class="product__actions">
      <PxInputQty />
      <button class="btn btn-add" @click="openModalDetailsProduct">
        <font-awesome-icon icon="cart-plus" />
      </button>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";
//UI
import PxInputQty from "./PxInputQty";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "@vue/reactivity";
library.add(faCartPlus);

export default {
  name: "PxCardProduct",
  props: {
    productUrl: String,
    productName: String,
    productPrice: Number,
    productStock: Number,
    productCode: String,
    productDescription: String,
  },
  components: {
    PxInputQty,
    FontAwesomeIcon,
  },
  setup(props) {
    const store = useStore();
    const objInfoProduct = ref({
      name: props.productName,
      image: props.productUrl,
      productCode: props.productCode,
      productPrice: props.productPrice,
      productQty: 1,
      productDescription: props.productDescription,
    });
    const openModalDetailsProduct = () => {
      store.commit("setModalAddedProduct");
      store.commit("setInformationProduct", objInfoProduct.value);
    };

    return {
      openModalDetailsProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxCardProduct.scss";
</style>
