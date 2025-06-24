<template>
  <!-- Hero Section -->
  <section class="hero-section">
    <!-- Animated Clouds -->
    <div
      class="cloud"
      style="width: 150px; height: 60px; top: 20%; left: 10%"
    ></div>
    <div
      class="cloud"
      style="width: 200px; height: 80px; top: 30%; right: 15%"
    ></div>
    <div
      class="cloud"
      style="width: 180px; height: 70px; top: 50%; left: 25%"
    ></div>
    <div
      class="cloud"
      style="width: 220px; height: 90px; top: 60%; right: 20%"
    ></div>

    <!-- Airplane Animation -->
    <div class="airplane-container">
      <div class="contrail"></div>
      <img src="@/assets/pesawatNew.png" alt="Pesawat" class="airplane" />
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 hero-content">
          <h1
            class="display-4 fw-bold mb-4 animate__animated animate__fadeInUp"
          >
            Pengalaman Penerbangan Anda Adalah Prioritas Kami
          </h1>
          <p
            class="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s"
          >
            Bantu kami meningkatkan kualitas layanan dengan memberikan penilaian
            tentang pengalaman penerbangan Anda.
          </p>
          <div class="animate__animated animate__fadeInUp animate__delay-2s">
            <a href="survey.html" class="btn btn-primary-custom btn-lg me-3">
              <i class="fas fa-pencil-alt me-2"></i>Isi Survey Sekarang
            </a>
            <a href="#tentang" class="btn btn-outline-primary btn-lg">
              <i class="fas fa-info-circle me-2"></i>Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        <div
          class="col-lg-6 d-none d-lg-block animate__animated animate__fadeIn animate__delay-1s"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
            alt="Ilustrasi Penerbangan"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="tentang" class="py-5 bg-white">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://www.qiscus.com/id/wp-content/uploads/sites/2/2024/06/Contoh-kuesioner-kepuasan-pelanggan.webp"
            alt="Tentang Kami"
            class="img-fluid rounded animate__animated animate__fadeInLeft"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="section-title animate__animated animate__fadeInRight">
            Tentang SkyFeedback
          </h2>
          <p class="animate__animated animate__fadeInRight animate__delay-1s">
            SkyFeedback adalah sistem penilaian kepuasan pelanggan khusus untuk
            industri penerbangan yang dirancang untuk mengumpulkan umpan balik
            berharga dari penumpang tentang pengalaman penerbangan mereka.
          </p>
          <p class="animate__animated animate__fadeInRight animate__delay-2s">
            Dengan menggunakan data yang dikumpulkan, maskapai penerbangan dapat
            mengidentifikasi area yang perlu ditingkatkan dan memberikan layanan
            yang lebih baik kepada pelanggan.
          </p>
          <div class="row mt-4">
            <div
              class="col-md-6 mb-3 animate__animated animate__fadeInUp animate__delay-3s"
            >
              <div class="d-flex">
                <i class="fas fa-check-circle text-primary me-3 mt-1"></i>
                <div>
                  <h5>Analisis Real-time</h5>
                  <p class="text-muted">
                    Data langsung diproses untuk tindakan cepat
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 mb-3 animate__animated animate__fadeInUp animate__delay-4s"
            >
              <div class="d-flex">
                <i class="fas fa-check-circle text-primary me-3 mt-1"></i>
                <div>
                  <h5>Kustomisasi</h5>
                  <p class="text-muted">
                    Survey disesuaikan dengan kebutuhan maskapai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="fitur" class="py-5 bg-light">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h2
          class="section-title d-inline-block animate__animated animate__fadeInDown"
        >
          Fitur Unggulan
        </h2>
        <p class="lead animate__animated animate__fadeInDown animate__delay-1s">
          Mengapa memilih sistem penilaian kami?
        </p>
      </div>
      <div class="row g-4">
        <div class="col-md-4 animate__animated animate__fadeInUp">
          <div class="card h-100 border-0 shadow-sm card-hover-effect">
            <div class="card-body text-center p-4">
              <i class="fas fa-plane-departure feature-icon"></i>
              <h4>Penilaian Penerbangan</h4>
              <p class="text-muted">
                Kumpulkan feedback spesifik tentang pengalaman penerbangan, dari
                check-in hingga kedatangan.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 animate__animated animate__fadeInUp animate__delay-1s"
        >
          <div class="card h-100 border-0 shadow-sm card-hover-effect">
            <div class="card-body text-center p-4">
              <i class="fas fa-chart-line feature-icon"></i>
              <h4>Analisis Mendalam</h4>
              <p class="text-muted">
                Dapatkan insight berharga dengan laporan analisis yang
                komprehensif.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 animate__animated animate__fadeInUp animate__delay-2s"
        >
          <div class="card h-100 border-0 shadow-sm card-hover-effect">
            <div class="card-body text-center p-4">
              <i class="fas fa-mobile-alt feature-icon"></i>
              <h4>Responsif</h4>
              <p class="text-muted">
                Akses sistem dari perangkat apapun, kapan saja dan di mana saja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-5 bg-primary text-white">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2
            class="display-5 fw-bold mb-4 animate__animated animate__fadeInDown"
          >
            Siap Meningkatkan Pengalaman Penerbangan Anda?
          </h2>
          <p
            class="lead mb-5 animate__animated animate__fadeInDown animate__delay-1s"
          >
            Mulai koleksi feedback pelanggan sekarang dan dapatkan insight
            berharga untuk bisnis Anda.
          </p>
          <a
            href="survey.html"
            class="btn btn-light btn-lg px-5 py-3 animate__animated animate__fadeInUp animate__delay-2s"
          >
            <i class="fas fa-paper-plane me-2"></i>Mulai Survey Sekarang
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";

const clouds = ref([]);

onMounted(() => {
  const cloudContainer = document.querySelector(".hero-section");
  const cloudElements = [];

  for (let i = 0; i < 8; i++) {
    const size = Math.random() * 100 + 100;
    const top = Math.random() * 80;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.3;

    const duration = Math.random() * 60 + 60;

    cloudElements.push({
      style: {
        width: `${size}px`,
        height: `${size * 0.5}px`,
        top: `${top}%`,
        left: `${left}%`,
        opacity,
        animation: `float ${duration}s linear infinite`,
      },
    });
  }

  clouds.value = cloudElements;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes float {
        0% { transform: translateX(0) translateY(0); }
        50% { transform: translateX(50px) translateY(-20px); }
        100% { transform: translateX(0) translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Animate elements when scrolling
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate__animated");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        const animationClass = element.classList[1];
        element.classList.add(animationClass);
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load
});
</script>
