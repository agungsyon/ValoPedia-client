<template>
  <!-- class="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-white fs-1" -->
  <section class="container mb-5">
    <div class="row mt-5">
      <div v-if="!agents">
        <CustomLoading />
      </div>
      <AgentCard
        v-else
        v-for="agent in agents"
        :key="agent.id"
        :agent="agent"
        class="col-md d-flex"
      />
    </div>
    <nav aria-label="Page navigation example">
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
            v-if="agents.length >= 8"
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
import AgentCard from "../components/cards/AgentCard.vue";
import CustomLoading from "../components/loading/CustomLoading.vue";
export default {
  name: "HomePage",
  components: {
    AgentCard,
    CustomLoading,
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
      this.fetchAgents(this.params);
    },
  },
  computed: {
    ...mapState(useValorantStore, ["agents"]),
  },
  methods: {
    ...mapActions(useValorantStore, ["fetchAgents"]),
  },
  created() {
    this.fetchAgents();
  },
};
</script>
