<template>
  <div class="category">
    <PxBreadcrumb :nameCategory="view" />
    <GenericView :titleGeneric="view">
      <slot v-if="infoProducts.length > 0">
        <div class="grid">
          <PxCardProduct
            v-for="(product, index) in infoProducts"
            :key="index"
            :productUrl="product.photo"
            :productName="product.name"
            :productPrice="product.price"
            :productStock="product.stock"
            :productCode="product.code"
            :productDescription="product.description"
          />
        </div>
      </slot>
      <slot v-else>
        <p class="category__empty">No hay productos en esta categoría</p>
      </slot>
    </GenericView>
    <PxAddedProduct :openModalAdded="openModalAdded" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
//UI
import GenericView from "@/Layout/GenericView";
import PxBreadcrumb from "@/components/Breadcrumb/PxBreadcrumb";
import PxCardProduct from "@/components/CardProduct/PxCardProduct";
import PxAddedProduct from "@/components/ModalAddedProduct/PxAddedProduct";

export default {
  name: "Category",
  components: {
    GenericView,
    PxBreadcrumb,
    PxCardProduct,
    PxAddedProduct,
  },
  setup() {
    const store = useStore();

    const view = computed(() => store.getters["getView"]);

    const openModalAdded = computed(
      () => store.getters["getModalAddedProduct"]
    );

    const infoProducts = computed(() => store.getters["getProducts"]);

    return {
      view,
      infoProducts,
      openModalAdded,
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  .grid {
    margin: 1rem 0 0 0;
  }
  &__empty {
    margin: 1rem 0 0 0;
    font-size: 17px;
  }
}
</style>
