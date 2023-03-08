<template>
  <div class="floating-container">
    <div 
      @click="openWhatsAppTab"
      class="floating-button"
    >
        <v-icon icon="mdi-whatsapp" />
        <v-tooltip
            activator="parent"
            location="start"
        >
            WhatsApp
        </v-tooltip>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FloatingButton',
    setup() {
      
      const openWhatsAppTab = () => {
        window.open('https://wa.me/+584120283147', '_blank');
      }

      return {
        openWhatsAppTab
      }

    }
});
</script>

<style scoped>
.floating-container {
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 0;
  right: 0;
  margin: 20px;
}
.floating-container .floating-button {
  position: absolute;
  width: 55px;
  height: 55px;
  background: #128C7E;
  bottom: 0;
  border-radius: 50%;
  right: 0;
  color: #FFF;
  line-height: 55px;
  text-align: center;
  font-size: 21px;
  z-index: 100;
  cursor: pointer;
}
</style>