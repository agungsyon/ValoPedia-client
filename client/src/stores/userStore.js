import { defineStore } from "pinia";
import axios from "../helpers/axios";
import Swal from "sweetalert2";

export const useUserStore = defineStore("user", {
  state() {
    return {
      access_token: localStorage.access_token,
    };
  },
  getters: {},
  actions: {
    async handleLogin(inputLogin) {
      try {
        const { data } = await axios({
          method: "POST",
          url: "/login",
          data: inputLogin,
        });
        localStorage.access_token = data.access_token;
        this.access_token = data.access_token;

        setTimeout(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfuly Login",
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.push("/");
        }, 300);
      } catch (error) {
        setTimeout(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        }, 300);
      }
    },
    async loginGoogle(response) {
      const { credential } = response
      try {
        const { data } = await axios({
          method: 'POST',
          url: `/login/google`,
          headers: {
            google_token: credential
          }
        })
        localStorage.access_token = data.access_token;
        this.access_token = data.access_token;

        console.log(data)

        setTimeout(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfuly Login',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.push("/");
        }, 300)
      } catch (error) {
        console.log(error)
      }
    },
    async handleRegister(inputRegister) {
      try {
        await axios({
          method: "POST",
          url: "/register",
          data: inputRegister,
        });

        setTimeout(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success Register",
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.push("/login");
        }, 300);
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        }, 300);
      }
    },

    handleLogout() {
      localStorage.clear();

      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfuly Logout",
          showConfirmButton: false,
          timer: 1500,
        });
        this.access_token = null;
        this.router.push("/login");
    }, 200);
    },
  },
});