<template>
    <v-layout>
        <DrawerMenu />
        <v-main>
            <router-view v-slot="{ Component }">
                <transition 
                    enter-active-class="animate__animated animate__faster animate__fadeInRight"
                    leave-active-class="animate__animated animate__faster animate__fadeOutRight"
                    mode="out-in"    
                >
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>
        <FloatingButton />
    </v-layout>
</template>

<script>
import { defineComponent } from 'vue';
import DrawerMenu from '../components/DrawerMenu.vue';
import FloatingButton from '../components/FloatingButton.vue';
import 'animate.css';

export default defineComponent({
    name: 'MainLayout',
    components: {
        DrawerMenu,
        FloatingButton
    }
});
</script>