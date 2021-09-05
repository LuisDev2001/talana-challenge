<template>
  <div class="search">
    <form class="search__form">
      <div class="search__input">
        <span class="search__icon">
          <font-awesome-icon icon="search" />
        </span>
        <input
          type="text"
          name="searchText"
          placeholder="Buscardor de productos y categorias"
        />
      </div>
    </form>
  </div>
</template>

<script>
//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);

export default {
  name: "PxSearch",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/_PxSearch.scss";
</style>
