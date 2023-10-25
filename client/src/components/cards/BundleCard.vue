<template>
  <div class="text-white bundle-card px-2 d-flex">
    <!-- <h2>Card Images</h2> -->
    <div class="card align-self-stretch" style="width: 15rem">
      <img :src="bundle.image" class="card-img-top" alt="img" />
      <div class="card-body bg-dark text-white">
          <div style="height: 70px">
        <h4 class="card-title bundle-name">{{ bundle.name }}</h4>

        </div>
        <button @click.prevent="payment" id="pay-button" type="button" class="btn mt-3">Buy It</button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { usePaymentStore } from "../../stores/paymentStore";

export default {
  name: "BundleCard",
  components: {},
  props: ["bundle"],
  methods: {
    ...mapActions(usePaymentStore, ["payBundle"]),
    payment() {
      const data = {
        bundleId: this.bundle.id,
        name: this.bundle.name,
        imgUrl: this.bundle.image,
      };
      this.payBundle(data);
    },
  },
};
</script>

<style scoped>
button {
    background: linear-gradient(10deg,#bd3944 ,#53212b );
  display: block;
  margin: 0 auto;
  color: black;
  transition: background-color 0.3s; 
}

button:hover {
  background-color: maroon; 
  box-shadow: 0 0 5px #fd3556, 0 0 10px #fd3556, 0 0 10px #fd3556, 0 0 10px #fd3556;
  color: white; 
}

.card {
  transition: all 0.3s;
  border: 0;
}
.card:hover {
  transform: scale(1.15);
}

.logo-role {
  width: 25px; /* Adjust the width to your desired size */
  height: auto; /* This maintains the aspect ratio */
  margin-right: 10px; /* Add margin for spacing */
  border-radius: 5px;
}
</style>
