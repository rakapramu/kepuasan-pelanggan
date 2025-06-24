<template>
  <div>
    <h5 class="card-title">{{ title }}</h5>
    <div class="rating-options">
      <div
        class="rating-option"
        :data-value="1"
        :class="{ selected: selectedRating === 1 }"
        @click="selectRating(1)"
      >
        <i class="fas fa-frown"></i>
        <div>Tidak Puas</div>
      </div>
      <div
        class="rating-option"
        :data-value="2"
        :class="{ selected: selectedRating === 2 }"
        @click="selectRating(2)"
      >
        <i class="fas fa-meh"></i>
        <div>Kurang Puas</div>
      </div>
      <div
        class="rating-option"
        :data-value="3"
        :class="{ selected: selectedRating === 3 }"
        @click="selectRating(3)"
      >
        <i class="fas fa-meh"></i>
        <div>Cukup Puas</div>
      </div>
      <div
        class="rating-option"
        :data-value="4"
        :class="{ selected: selectedRating === 4 }"
        @click="selectRating(4)"
      >
        <i class="fas fa-smile"></i>
        <div>Puas</div>
      </div>
      <div
        class="rating-option"
        :data-value="5"
        :class="{ selected: selectedRating === 5 }"
        @click="selectRating(5)"
      >
        <i class="fas fa-laugh"></i>
        <div>Sangat Puas</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

// Define props to receive the v-model value from parent
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
});

// Emit value when user selects a rating
const emit = defineEmits(["update:modelValue"]);

// Manage the selected rating
const selectedRating = ref(props.modelValue);

// Update the selected rating and emit the change to the parent
const selectRating = (value) => {
  selectedRating.value = value;
  emit("update:modelValue", selectedRating.value); // Emit the value back to parent
};
</script>

<style scoped>
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
