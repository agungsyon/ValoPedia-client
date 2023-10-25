import { defineStore } from "pinia";
import axios from "../helpers/axios";

export const useValorantStore = defineStore("valorant", {
  state() {
    return {
      agents: [],
      bundles: [],
    };
  },
  getters: {},
  actions: {
    async fetchAgents() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "/agents",
        });
        console.log(data);
        this.agents = data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchBundles() {
        try {
            const { data } = await axios({
              method: "GET",
              url: "/bundles",
            });
            console.log(data);
            this.bundles = data
          } catch (error) {
            console.log(error);
          }
    },
  },
});
