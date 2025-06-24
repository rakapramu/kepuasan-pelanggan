<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">
        <i class="fas fa-plane me-2"></i> SkyFeedback
      </a> -->
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <i class="fas fa-plane me-2"></i> SkyFeedback
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <!-- <a class="nav-link active" href="#">Penilaian Penerbangan</a> -->
            <router-link class="nav-link" :to="{ name: 'Penilaian' }">
              Penilaian Penerbangan
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
