import { defineStore } from "pinia";
import axios from "../helpers/axios";

export const useValorantStore = defineStore("valorant", {
  state() {
    return {
      agents: [],
      bundles: [],
      inventories: []
    };
  },
  getters: {},
  actions: {
    async fetchAgents(params) {
      try {
        const { data } = await axios({
          method: "GET",
          url: "/agents",
          params
        });
        console.log(data);
        this.agents = data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchBundles(params) {
        try {
            const { data } = await axios({
              method: "GET",
              url: "/bundles",
              params
            });
            console.log(data);
            this.bundles = data
          } catch (error) {
            console.log(error);
          }
    },
    async fetchInventories() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "/inventories",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.inventories = data
      } catch (error) {
        console.log(error);
      }
    }
  },
});
