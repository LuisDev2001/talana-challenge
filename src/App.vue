<template>
  <PxHaeader />
  <PxSideBarCategories />
  <router-view v-slot="{ Component }" class="view">
    <transition name="mode-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <PxFooter />
</template>

<script>
import PxHaeader from "@/components/Header/PxHaeader";
import PxFooter from "@/components/Footer/PxFooter";
import PxSideBarCategories from "@/components/SideBarCategories/PxSideBarCategories";

export default {
  components: {
    PxHaeader,
    PxFooter,
    PxSideBarCategories,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_base.scss";
@import "~@/assets/scss/App.scss";
</style>
