<template>
  <section class="container mb-5">
    <hr />
    <br />
    <div class="row align-items-stretch" style="row-gap: 40px">
      <BundleCard
        v-for="bundle in bundles"
        :key="bundle.id"
        :bundle="bundle"
        class="col-md-3 d-flex"
      />
    </div>
    <hr class="text-white pt-3">
    <nav aria-label="Page navigation example pt-5">
      <ul class="pagination justify-content-center">
        <li class="page-item bg-dark">
          <a
            v-if="params.page > 1"
            @click.prevent="params.page--"
            class="page-link bg-dark text-white"
            href="#"
            tabindex="-1"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a
            @click.prevent="params.page = 1"
            class="page-link bg-dark text-white"
            href="#"
            >1</a
          >
        </li>
        <li class="page-item">
          <a
            @click.prevent="params.page = 2"
            class="page-link bg-dark text-white"
            href="#"
            >2</a
          >
        </li>
        <li class="page-item">
          <a
            @click.prevent="params.page = 3"
            class="page-link bg-dark text-white"
            href="#"
            >3</a
          >
        </li>
        <li class="page-item">
          <a
            @click.prevent="params.page = 4"
            class="page-link bg-dark text-white"
            href="#"
            >4</a
          >
        </li>
        <li class="page-item">
          <a
            @click.prevent="params.page = 5"
            class="page-link bg-dark text-white"
            href="#"
            >5</a
          >
        </li>
        <li class="page-item">
          <a
            @click.prevent="params.page = 6"
            class="page-link bg-dark text-white"
            href="#"
            >6</a
          >
        </li>
        <li class="page-item">
          <a
            v-if="bundles.length >= 16"
            @click.prevent="params.page++"
            class="page-link bg-dark text-white"
            href="#"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useValorantStore } from "../stores/valorantStore.js";
import BundleCard from "./cards/BundleCard.vue";
export default {
  name: "BundlePage",
  components: {
    BundleCard,
  },
  data() {
    return {
      params: {
        page: 1,
      },
    };
  },
  watch: {
    ["params.page"]() {
      this.fetchBundles(this.params);
    },
  },
  computed: {
    ...mapState(useValorantStore, ["bundles"]),
  },
  methods: {
    ...mapActions(useValorantStore, ["fetchBundles"]),
  },
  created() {
    this.fetchBundles();
  },
};
</script>

<style></style>
