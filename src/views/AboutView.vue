<template>
  <v-container>
    <p>{{ $t('menu.about') }}</p>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutView'
});
</script>