<template>

  <section class="container mb-5">
    <hr><br>
    <div class="row align-items-stretch" style="row-gap: 40px;">
      <BundleCard v-for="bundle in bundles" :key="bundle.id" :bundle="bundle" class="col-md-3 d-flex" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useValorantStore } from "../stores/valorantStore.js";
import BundleCard from "./cards/BundleCard.vue";
export default {
  name: "BundlePage",
  components: {
    BundleCard
  },
  computed: {
    ...mapState(useValorantStore, ["bundles"]),
  },
  methods: {
    ...mapActions(useValorantStore, ["fetchBundles"])
  },
  created() {
    this.fetchBundles()
  }
};
</script>

<style></style>
