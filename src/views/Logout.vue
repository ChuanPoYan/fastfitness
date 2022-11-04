<template>
    <h1> Logout Page</h1>
<div>
    <SavedModalLogout v-show="showModal" @close-modal="showModal = false" />
</div>
<div class="save-btn">
    <button @click="showModal = true">Logout Popup</button>
</div>
</template>

<script>
import SavedModalLogout from '@/components/SavedModalLogout.vue'
  export default {
      components: {
      SavedModalLogout,
    },
    data() {
      return {
      showModal: false,
    }
  },
};
</script>

<style scoped>
.save-btn {
    padding-top: 50px;
}
</style>

