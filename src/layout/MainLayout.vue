<template>
    <v-layout>
        <DrawerMenu />
        <v-main>
            <router-view />
        </v-main>
        <FloatingButton />
    </v-layout>
</template>

<script>
import { defineComponent } from 'vue';
import DrawerMenu from '../components/DrawerMenu.vue';
import FloatingButton from '../components/FloatingButton.vue';

export default defineComponent({
    name: 'MainLayout',
    components: {
        DrawerMenu,
        FloatingButton
    }
});
</script>