<template>
  <PxHaeader />
  <router-view />
  <PxFooter />
</template>

<script>
import PxHaeader from "@/components/Header/PxHaeader";
import PxFooter from "@/components/Footer/PxFooter";

export default {
  components: {
    PxHaeader,
    PxFooter,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_base.scss";
</style>
