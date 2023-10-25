<template>
  <a :href="`https://playvalorant.com/en-us/agents/${agent.name}`" target="blank">
    <!-- <h2>Card Images</h2> -->
    <div class="card card-agent mb-5" style="width: 18rem">
      <img :src="agent.image" class="card-img-top" alt="img" />
      <div class="card-body bg-dark text-white">
        <h4 class="card-title pb-2">{{ agent.name }}</h4>
        <h6 class="card-title pb-2">
          <img :src="agent.roleIcon" class="logo-role" />
          {{ agent.role }}
        </h6>

        <p class="card-text">
          {{ agent.description }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "AgentCard",
  components: {},
  props: ["agent"],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.card {
  transition: all 0.3s;
  border: 0;
}
.card-agent:hover {
  transform: scale(1.15);
}

.logo-role {
  width: 25px; /* Adjust the width to your desired size */
  height: auto; /* This maintains the aspect ratio */
  margin-right: 10px; /* Add margin for spacing */
  border-radius: 5px;
}
</style>
