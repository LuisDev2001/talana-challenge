<template>
  <div class="category">
    <PxBreadcrumb :nameCategory="view" />
    <GenericView :titleGeneric="view">
      <div class="grid">
        <PxCardProduct
          v-for="(product, index) in infoProducts"
          :key="index"
          :productUrl="product.photo"
          :productName="product.name"
          :productPrice="product.price"
        />
      </div>
    </GenericView>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
//UI
import GenericView from "@/Layout/GenericView";
import PxBreadcrumb from "@/components/Breadcrumb/PxBreadcrumb";
import PxCardProduct from "@/components/CardProduct/PxCardProduct";
export default {
  name: "Category",
  components: {
    GenericView,
    PxBreadcrumb,
    PxCardProduct,
  },
  setup() {
    const store = useStore();

    const view = computed(() => store.getters["getView"]);

    const infoProducts = ref([]);

    onMounted(async () => {
      await getProducts();
    });

    const getProducts = async () => {
      try {
        const response = await fetch("http://sva.talana.com:8000/api/product/");
        const data = await response.json();
        infoProducts.value = data;
      } catch (error) {
        console.log(`Error ${error}`);
      }
    };

    return {
      view,
      infoProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  .grid {
    margin: 1rem 0 0 0;
  }
}
</style>
