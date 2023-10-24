<template>
  <div>
    <h2>Card Images</h2>
    <div class="card" style="width: 18rem">
      <img
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png"
        class="card-img-top"
        alt="img"
      />
      <div class="card-body">
        <h5 class="card-title">Angular JS</h5>

        <p class="card-text">
          AngularJS is a Javascript open-source front-end framework that is mainly used to
          develop single-page web applications(SPAs).
        </p>
        <p class="card-text">
          <small class="text-muted"> GeeksforGeeks </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgentCard",
};
</script>

<style>
.card {
  transition: all 0.3s;
}
.card:hover {
  transform: scale(1.15);
}
</style>
