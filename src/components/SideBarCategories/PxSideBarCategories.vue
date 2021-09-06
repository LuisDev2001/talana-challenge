<template>
  <section class="sidebar">
    <h2>Categorias</h2>
    <ul class="siderbar__list">
      <li
        class="sidebar__item"
        v-for="category in categories"
        :key="category.id"
      >
        <router-link
          class="sidebar__link"
          :to="'/category/' + category.name.toLowerCase() + '/' + category.id"
          @click="handleUpdateView(category.name, category.id)"
        >
          {{ category.name }}
          <font-awesome-icon icon="chevron-right" />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faChevronRight);

export default {
  name: "PxSideBarCategories",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore();

    const categories = ref([]);

    const products = computed(() => store.getters["getProducts"]);

    const result = ref([]);

    onMounted(async () => {
      await getCategories();
    });

    const getCategories = async () => {
      categories.value.push({
        id: 0,
        name: "All",
        order: 0,
      });
      try {
        const response = await fetch(
          "http://sva.talana.com:8000/api/product-category/"
        );
        const data = await response.json();
        data.forEach((category) => categories.value.push(category));
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    const handleUpdateView = async (view, code) => {
      store.commit("setView", view);
      store.commit("setViewCode", code);
      if (view == "All") {
        const products = await getProducts();
        store.commit("setProducts", products);
      } else {
        const products = await getProducts();
        const result = products.filter(
          (product) => product.category.name === view
        );
        store.commit("setProducts", result);
      }
    };

    const getProducts = async () => {
      try {
        const response = await fetch("http://sva.talana.com:8000/api/product/");
        const products = await response.json();
        return products;
      } catch (error) {
        console.log(`Error ${error}`);
      }
    };

    return {
      categories,
      handleUpdateView,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxSideBarCategories.scss";
</style>
