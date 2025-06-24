<template>
  <div class="container mt-5">
    <!-- Multi-step form wizard -->
    <div v-if="currentStep <= totalSteps">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            Pengisian Data Penumpang - Step {{ currentStep }} / {{ totalSteps }}
          </h4>

          <!-- Progress bar -->
          <div class="mb-3">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: progressBar + '%' }"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <!-- Form Fields -->
          <form @submit.prevent="submitForm">
            <div v-if="currentStep === 1">
              <div class="row">
                <div class="mb-3 col-6">
                  <label for="class" class="form-label"
                    >Umur Anda Saat Ini</label
                  >
                  <input
                    v-model="form.Age"
                    type="number"
                    class="form-control"
                    id="age"
                    required
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="age" class="form-label">Jenis Kelamin</label>
                  <select
                    v-model="form.Gender"
                    class="form-control"
                    id="class"
                    required
                  >
                    <option value="Male">Laki - Laki</option>
                    <option value="Female">Perempuan</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label for="class" class="form-label"
                    >Anda Tipe Pelanggan Yang Apa</label
                  >
                  <select
                    v-model="form.Customer_Type"
                    class="form-control"
                    id="class"
                    required
                  >
                    <option value="Loyal">Pelanggan Loyal</option>
                    <option value="Disloyal">Pelanggan Tidak Loyal</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label for="class" class="form-label"
                    >Tipe Penerbangan Anda</label
                  >
                  <select
                    v-model="form.Type_of_Travel"
                    class="form-control"
                    id="type"
                    required
                  >
                    <option value="Personal Travel">
                      Penerbangan Personal
                    </option>
                    <option value="Business travel">Penerbangan Bisnis</option>
                  </select>
                </div>
              </div>
            </div>

            <div v-if="currentStep === 2">
              <div class="row">
                <div class="mb-3 col-6">
                  <label for="class" class="form-label"
                    >Kelas Penerbangan</label
                  >
                  <select
                    v-model="form.Class"
                    class="form-control"
                    id="type"
                    required
                  >
                    <option value="Eco">Ekonomi</option>
                    <option value="Eco Plus">Ekonomi Plus</option>
                    <option value="Business">Bisnis</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label for="flightDistance" class="form-label"
                    >Jarak Penerbangan (km)</label
                  >
                  <input
                    v-model="form.Flight_Distance"
                    type="number"
                    class="form-control"
                    id="flightDistance"
                    required
                  />
                </div>
              </div>
            </div>

            <div v-if="currentStep === 3">
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Inflight_wifi_service"
                    title="Layanan wifi dalam pesawat"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Departure_Arrival_time_convenient"
                    title="Waktu keberangkatan/kedatangan yang nyaman"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Ease_of_Online_booking"
                    title="Kemudahan Pemesanan Online"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card v-model="form.Gate_location" title="Lokasi gerbang" />
                </div>
              </div>
            </div>

            <div v-if="currentStep === 4">
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Food_and_drink"
                    title="Makanan dan minuman"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Online_boarding"
                    title="Online Boarding"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card v-model="form.Seat_comfort" title="Kenyamanan kursi" />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Inflight_entertainment"
                    title="Hiburan dalam pesawat"
                  />
                </div>
              </div>
            </div>

            <div v-if="currentStep === 5">
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.On_board_service"
                    title="Layanan di saat penerbangan"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Leg_room_service"
                    title="Kelegaan Ruang Kaki"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Baggage_handling"
                    title="Penanganan Bagasi"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Checkin_service"
                    title="Layanan check-in"
                  />
                </div>
              </div>
            </div>

            <div v-if="currentStep === 6">
              <div class="card question-card">
                <div class="card-body">
                  <Card
                    v-model="form.Inflight_service"
                    title="Layanan di dalam pesawat"
                  />
                </div>
              </div>
              <div class="card question-card">
                <div class="card-body">
                  <Card v-model="form.Cleanliness" title="Kebersihan" />
                </div>
              </div>
            </div>

            <div v-if="currentStep === 7">
              <div class="mb-3">
                <label for="class" class="form-label"
                  >Berapa Lama Anda Mengunggu Keterlambatan Keberangkatan</label
                >
                <div class="row">
                  <div class="col-9">
                    <input
                      v-model="form.Departure_Delay_in_Minutes"
                      type="number"
                      class="form-control"
                      id="age"
                      required
                    />
                  </div>
                  <div class="col-3">
                    <span>Menit</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="class" class="form-label"
                  >Berapa Lama Anda Mengalamai Keterlambatan Untuk Sampai Lokasi
                  Tujuan</label
                >
                <div class="row">
                  <div class="col-9">
                    <input
                      v-model="form.Arrival_Delay_in_Minutes"
                      type="number"
                      class="form-control"
                      id="age"
                      required
                    />
                  </div>
                  <div class="col-3">
                    <span>Menit</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Add additional fields for each step here (3-25) -->

            <!-- Navigation Buttons -->
            <div class="mt-4">
              <button
                v-if="currentStep > 1"
                type="button"
                class="btn btn-secondary"
                @click="prevStep"
              >
                Sebelumnya
              </button>
              <button
                v-if="currentStep < totalSteps"
                type="button"
                class="btn btn-primary"
                @click="nextStep"
              >
                Selanjutnya
              </button>
              <button
                v-if="currentStep === totalSteps"
                type="submit"
                class="btn btn-success"
              >
                Kirim Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Confirmation message -->
    <div v-if="currentStep > totalSteps">
      <div class="alert alert-success mt-4" role="alert">
        Data berhasil dikirim! Terima kasih.
      </div>
    </div>

    <!-- <div class="container">
      <div class="alert alert-success mt-4" role="alert">
        Terimakasih Telah Memberikan Penilaian!! Kami Telah Melakukan Pengolahan
        Data Penilaian Anda. Berdasarkan Penilaian Anda, Kami Mendapatkan Hasil
        Berikut:
        <br />
        <br />
        <h1>Status Kepuasan Anda : Sangat Puas</h1>
        <h1>Akurasi Penilaian Anda : 87%</h1>
      </div>
    </div> -->
  </div>

  <!-- <div class="container">
    <div class="alert alert-success mt-4" role="alert">
      Terimakasih Telah Memberikan Penilaian!! Kami Telah Melakukan Pengolahan
      Data Penilaian Anda. Berdasarkan Penilaian Anda, Kami Mendapatkan Hasil
      Berikut:
      <br />
      <br />
      <h1>Status Kepuasan Anda : Sangat Puas</h1>
      <h1>Akurasi Penilaian Anda : 87%</h1>
    </div>
  </div> -->
</template>

<script setup>
import Card from "@/components/Card.vue";
import { ref, reactive, onMounted } from "vue";
import { Client } from "@gradio/client";

// Reactive variables
const currentStep = ref(1);
const totalSteps = ref(7); // Change to 25 for your actual data
const progressBar = ref(0);

// Form data as reactive object
const form = reactive({
  Gender: "",
  Customer_Type: "",
  Age: "",
  Type_of_Travel: "",
  Class: "",
  Flight_Distance: "",
  Inflight_wifi_service: "",
  Departure_Arrival_time_convenient: "",
  Ease_of_Online_booking: "",
  Gate_location: "",
  Food_and_drink: "",
  Online_boarding: "",
  Seat_comfort: "",
  Inflight_entertainment: "",
  On_board_service: "",
  Leg_room_service: "",
  Baggage_handling: "",
  Checkin_service: "",
  Inflight_service: "",
  Cleanliness: "",
  Departure_Delay_in_Minutes: "",
  Arrival_Delay_in_Minutes: "",
});

// Function to move to the next step
const nextStep = () => {
  if (currentStep.value < totalSteps.value) {
    currentStep.value++;
    updateProgressBar();
  }
};

// Function to go to the previous step
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    updateProgressBar();
  }
};

// Function to update progress bar
const updateProgressBar = () => {
  progressBar.value = (currentStep.value / totalSteps.value) * 100;
};

// Function to handle form submission
const submitForm = async () => {
  alert(form.Gender);
  try {
    const client = await Client.connect(
      "RaTech0/airline_passenger_satisfaction"
    );
    const result = await client.predict("/predict", {
      Gender: form.Gender,
      Customer_Type: form.Customer_Type,
      Type_of_Travel: form.Type_of_Travel,
      Class: form.Class,
      Age: form.Age,
      Flight_Distance: form.Flight_Distance,
      Inflight_wifi_service: form.Inflight_wifi_service,
      Departure_Arrival_time_convenient: form.Departure_Arrival_time_convenient,
      Ease_of_Online_booking: form.Ease_of_Online_booking,
      Gate_location: form.Gate_location,
      Food_and_drink: form.Food_and_drink,
      Online_boarding: form.Online_boarding,
      Seat_comfort: form.Seat_comfort,
      Inflight_entertainment: form.Inflight_entertainment,
      On_board_service: form.On_board_service,
      Leg_room_service: form.Leg_room_service,
      Baggage_handling: form.Baggage_handling,
      Checkin_service: form.Checkin_service,
      Inflight_service: form.Inflight_service,
      Cleanliness: form.Cleanliness,
      Departure_Delay_in_Minutes: form.Departure_Delay_in_Minutes,
      Arrival_Delay_in_Minutes: form.Arrival_Delay_in_Minutes,
    });

    console.log(result.data);
    currentStep.value = totalSteps.value + 1; // Show confirmation step
  } catch (error) {
    console.error("Error:", error);
  }
};

// Initialize the component
onMounted(() => {
  updateProgressBar();
});
</script>

<style scoped>
.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  transition: width 0.4s ease;
}

.question-card {
  margin-bottom: 20px;
  border-left: 4px solid #0d6efd;
}
.rating-options {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.rating-option {
  text-align: center;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s;
}
.rating-option:hover {
  background-color: #f8f9fa;
}
.rating-option.selected {
  background-color: #e7f1ff;
  border: 1px solid #0d6efd;
}
.rating-option i {
  font-size: 24px;
  margin-bottom: 5px;
  color: #6c757d;
}
.rating-option.selected i {
  color: #0d6efd;
}
</style>
