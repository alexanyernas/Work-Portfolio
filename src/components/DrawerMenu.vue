<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          nav
          :prepend-avatar="photo"
          title="Alexanyer Naranjo"
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>
        
        <v-list nav>
            <v-list-item prepend-icon="mdi-face-man" :title="$t('menu.hi')" value="presentation" to="presentation"></v-list-item>
            <v-list-item prepend-icon="mdi-xml" :title="$t('menu.about')" value="about" to="about"></v-list-item>
            <v-list-item prepend-icon="mdi-medal-outline" :title="$t('menu.skills')" value="skills" to="skills"></v-list-item>
            <v-list-item prepend-icon="mdi-briefcase-outline" :title="$t('menu.work')" value="work" to="work"></v-list-item>
            <v-list-item prepend-icon="mdi-email-outline" :title="$t('menu.contact')" value="contact" to="contact"></v-list-item>
        </v-list>

      </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';
import photo from '../assets/me.jpg';

export default defineComponent({
    name: 'DraweMenu',
    data() {
        return {
            photo,
            drawer: true,
            rail: true
        }
    }
});
</script>