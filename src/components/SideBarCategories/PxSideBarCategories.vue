<template>
  <section class="sidebar">
    <h2>Categorias</h2>
    <ul class="siderbar__list">
      <li class="sidebar__item">
        <router-link class="sidebar__link" to="/">
          Categorias 1
          <font-awesome-icon icon="chevron-right" />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxSideBarCategories.scss";
</style>
