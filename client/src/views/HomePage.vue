<template>
  <!-- class="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-white fs-1" -->
  <section class="container">
    <h1 style="font-size: 1.5em">homepage</h1>
    <h1 style="font-size: 1.5em">homepage</h1>
    <div class="row">
      <AgentCard v-for="agent in agents" :key="agent.id" :agent="agent" class="col-sm" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useValorantStore } from "../stores/valorant.js";
import AgentCard from "../components/cards/AgentCard.vue";

export default {
  name: "HomePage",
  components: {
    AgentCard,
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
