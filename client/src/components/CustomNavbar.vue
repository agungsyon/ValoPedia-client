<template>
    <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div class="container">
    <!-- logo -->
    
    <a class="navbar-brand fs-4">
        <img src="../assets/ValoPediaLogo.png" class="logo-img" alt="logo ValoPedia">
        Valo<span style="color: #fd3556;">Pedia</span></a>
    <!-- toggle btn -->
    <button class="navbar-toggler shadow-none berder-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- sidebar -->
    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <!-- sidebar header -->
        <div class="offcanvas-header text-white border-bottom">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Valo<span style="color: #fd3556;">Pedia</span></h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <!-- sidebar body -->
      <div class="offcanvas-body d-flex flex-column flex-lg-row p-lg-0 p-4">
        <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
          <li class="nav-item mx-2">
            <a class="nav-link" aria-current="page" href="#" active-class="active">Home</a>
          </li>
          <li class="nav-item mx-2">
            <RouterLink to="/" class="nav-link" active-class="active">Agent</RouterLink>
          </li>
          <li class="nav-item mx-2">
            <RouterLink to="/bundle" class="nav-link" active-class="active">Bundle</RouterLink>
          </li>
          <li class="nav-item mx-2">
            <RouterLink to="/inventory" class="nav-link" active-class="active">Inventory</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">ahmatagung645@gmail.com</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <!-- login/regis -->
        <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
            <a href="#" class="text-white">Login</a>
            <a href="#" class="text-white text-decoration-none px-3 py-1 rounded-4" style="background-color: maroon;">Sign Up</a>

        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "CustomNavbar"
}
</script>

<style>
@media(max-width: 991px) {
    .sidebar{
        /* background-color: #010204; */
        background-color: rgba(48, 16, 16, 0.15);
        backdrop-filter: blur(10px);
    }
}

.logo-img {
  width: 40px; /* Adjust the width to your desired size */
  height: auto; /* This maintains the aspect ratio */
  margin-right: 10px; /* Add margin for spacing */
  border-radius: 5px;
}
</style>