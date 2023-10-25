import { defineStore } from "pinia";
import axios from "../helpers/axios";
// import Swal from "sweetalert2";

export const usePaymentStore = defineStore("payment", {
  state() {
    return {};
  },
  getters: {},
  actions: {
    async postInventory(params) {
      try {
        const { data } = axios({
          method: "POST",
          url: "/inventories",
          data: params,
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (error) {}
    },
    async payBundle(params) {
      try {
        const { data } = await axios({
          method: "POST",
          url: "/generate-midtrans-token",
          data: params,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        const cb = this.postInventory

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            cb(params)
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
