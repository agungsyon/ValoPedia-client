<template>
  <div class="mt-5">
    <div class="container-inventory" v-for="inventory in inventories" :key="inventory.id">
      <img :src="inventory.imgUrl" alt="" class="img-inventory" />
      <div class="overlay">
        <h3>{{ inventory.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useValorantStore } from "../stores/valorantStore";
export default {
  name: "InventoryPage",
  computed: {
    ...mapState(useValorantStore, ["inventories"]),
  },
  methods: {
    ...mapActions(useValorantStore, ["fetchInventories"]),
  },
  created() {
    this.fetchInventories();
  },
};
</script>

<style scoped>
.container-inventory {
  border-radius: 10px;
  margin: 4% 0 0 36%;
  position: relative;
  width: 25%;
}

.img-inventory {
  border-radius: 10px;
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.container-inventory:hover .overlay {
  height: 100%;
}

h3 {
  width: 100%;
  color: white;
  font-size: 2.5vw;
  position: absolute;
  text-align: center;
  /* transform: rotate(-5deg) skewx(-5deg); */
}
</style>
