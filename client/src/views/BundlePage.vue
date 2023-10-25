<template>
  <h1 class="text-white">bundle page</h1>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useValorantStore } from "../stores/valorant.js";

export default {
  name: "BundlePage",
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
