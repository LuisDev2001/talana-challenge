<template>
  <header class="header">
    <div class="header__logo">
      <h1>Logo</h1>
    </div>

    <section class="header__actions">
      <PxSearch />
      <PxMiniCart @click="openModalMiniCart" />
      <PxModalCart :openCart="stateModalMiniCart" />
    </section>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
//UI
import PxMiniCart from "../Cart/PxMiniCart";
import PxModalCart from "../Cart/PxModalCart";
import PxSearch from "../Search/PxSearch";

export default {
  name: "PxHeader",
  components: {
    PxMiniCart,
    PxSearch,
    PxModalCart,
  },
  setup() {
    const store = useStore();

    const stateModalMiniCart = computed(
      () => store.getters["getModalMiniCart"]
    );

    const openModalMiniCart = () => {
      store.commit("setShowModalMiniCart");
    };

    return {
      openModalMiniCart,
      stateModalMiniCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxHeader.scss";
</style>
