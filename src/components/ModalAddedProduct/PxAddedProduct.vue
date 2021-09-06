<template>
  <div :class="{ added: true, active: openModalAdded }">
    <div class="added__information">
      <div class="added__header">
        <h2>Producto agregado</h2>
        <div class="added__close-action" @click="handleCloseModalAdded">
          <font-awesome-icon icon="times" />
        </div>
      </div>

      <div class="added__details">
        <img :src="productUrl" :alt="productName" />
        <div>
          <span>Nombre del producto:</span>
          <p>{{ productName }}</p>

          <span>Código del producto:</span>
          <p>{{ productCode }}</p>

          <span>Precio del producto:</span>
          <p>${{ productPrice }}</p>

          <span>Cantidad del producto:</span>
          <p>{{ productQty }}</p>
        </div>
      </div>
      <div class="added__description">
        <p>{{ productDescription }}</p>
      </div>
      <div class="added__actions">
        <button @click="handleCloseModalAdded">Seguir comprando</button>
        <button class="btn btn-add" @click="handleAddProduct">
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onUpdated } from "vue";
import { useStore } from "vuex";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTimes);
export default {
  name: "PxAddedProduct",
  props: {
    openModalAdded: Boolean,
  },
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore();

    const productUrl = ref("");
    const productName = ref("");
    const productCode = ref("");
    const productPrice = ref("");
    const productQty = ref("");
    const productDescription = ref("");

    const getInfoProductSelected = computed(
      () => store.getters["getInformationProduct"]
    );

    const handleCloseModalAdded = () => {
      store.commit("setModalAddedProduct");
    };

    const objInfoProduct = ref({
      productUrl: "",
      productName: "",
      productCode: "",
      productPrice: "",
      productQty: "",
      productDescription: "",
    });

    onUpdated(() => {
      productUrl.value = getInfoProductSelected.value.image;
      productName.value = getInfoProductSelected.value.name;
      productCode.value = getInfoProductSelected.value.productCode;
      productPrice.value = getInfoProductSelected.value.productPrice;
      productQty.value = getInfoProductSelected.value.productQty;
      productDescription.value =
        getInfoProductSelected.value.productDescription;

      objInfoProduct.value = {
        productUrl: getInfoProductSelected.value.image,
        productName: getInfoProductSelected.value.name,
        productCode: getInfoProductSelected.value.productCode,
        productPrice: getInfoProductSelected.value.productPrice,
        productQty: getInfoProductSelected.value.productQty,
        productDescription: getInfoProductSelected.value.productDescription,
      };
    });

    const handleAddProduct = () => {
      store.commit("setCartProducts", objInfoProduct.value);
      store.commit("setModalAddedProduct");
      store.commit("setTotalProducts", productPrice.value);
      store.commit("setShowModalMiniCart");
    };

    return {
      productUrl,
      productName,
      productCode,
      productPrice,
      productQty,
      productDescription,
      handleCloseModalAdded,
      handleAddProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxAddedProduct.scss";
</style>
