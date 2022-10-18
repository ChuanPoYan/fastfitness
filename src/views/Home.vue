<template>
    <img id= "pic" src="../assets/homepage.png" alt="homepage">
    <!-- include Booking Successful Popup -temporary -->
    <div>
        <SavedModal v-show="showModal" @close-modal="showModal = false" />
      </div>
    <div class="save-btn">
        <button @click="showModal = true">Booking Successful Popup</button>
    </div>
</template>

<script>
import SavedModal from '@/components/SavedModal.vue'

export default {
    name: "App",
    components: {
      SavedModal,
    },
    data() {
      return {
      showModal: false,
    }
  },
};
</script>


<style scoped>
#pic {
    text-align: center;
    padding-top: 120px;
}
</style>