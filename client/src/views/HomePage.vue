<template>
  <!-- class="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-white fs-1" -->
  <section class="container mb-5">
    <div class="row mt-5">
      <div v-if="!agents">
        <CustomLoading/>
      </div>
      <AgentCard v-else v-for="agent in agents" :key="agent.id" :agent="agent" class="col-md d-flex" />
    </div>
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
    CustomLoading
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
