<template>
  <!-- login section -->
  <div class="login-box">
    <div class="d-flex justify-content-center">
      <img src="../assets/ValoPediaLogo.png" alt="" class="logo-image" />
    </div>
    <h2>Login</h2>
    <form @submit.prevent="register">
      <div class="user-box">
        <input type="text" required v-model="inputRegister.email" />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" required v-model="inputRegister.password" />
        <label>Password</label>
      </div>
      <p class="text-white mt-2">
        don't have an account?
        <RouterLink to="/register" class="register-style">Register</RouterLink>
      </p>

      <div class="d-flex justify-content-center">
        <button type="submit">
          Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </form>
  </div>
  <!-- end login section -->
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/userStore";

export default {
  name: "RegisterPage",
  data() {
    return {
      inputRegister: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapActions(useUserStore, ["handleRegister"]),
    register() {
      this.handleRegister(this, inputRegister);
    },
  },
};
</script>

<style scoped>
.logo-image {
  border-radius: 50px;
  width: 70px; /* Adjust the width to your desired size */
  height: 70px; /* Adjust the height to your desired size */
}

button {
  border-radius: 10px;
  background: none;
  border: none;
}

.register-style {
  text-decoration: none;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #080d14;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #fd3556;
  font-size: 12px;
}

.login-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #fd3556;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box button:hover {
  background: maroon;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #fd3556, 0 0 25px #fd3556, 0 0 50px #fd3556, 0 0 100px #fd3556;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #fd3556);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #fd3556);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #fd3556);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #fd3556);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
