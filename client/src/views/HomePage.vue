<template>
  <!-- class="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-white fs-1" -->
  <section >
    <h1 style="font-size: 1.5em;">homepage</h1>
    <h1 style="font-size: 1.5em;">homepage</h1>
    <AgentCard/>
    <AgentCard/>
    <AgentCard/>
    <AgentCard/>
  </section>
</template>

<script>
import AgentCard from "../components/cards/AgentCard.vue";

export default {
  name: "HomePage",
  components: {
    AgentCard
  }
};

</script>
