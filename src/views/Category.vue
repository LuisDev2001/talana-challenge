<template>
  <div class="category">
    <PxBreadcrumb :nameCategory="view" />
    <GenericView :titleGeneric="view">
      <p>Cards</p>
    </GenericView>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import GenericView from "@/Layout/GenericView";
import PxBreadcrumb from "@/components/Breadcrumb/PxBreadcrumb";

export default {
  name: "Category",
  components: {
    GenericView,
    PxBreadcrumb,
  },
  setup() {
    const store = useStore();

    const view = computed(() => store.getters["getView"]);

    return {
      view,
    };
  },
};
</script>
