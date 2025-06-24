import MainLayouts from "@/views/layouts/MainLayouts.vue";
import Home from "@/views/pages/Home.vue";
import Survey from "@/views/pages/Survey.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayouts,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home,
        },
        {
          path: "/penilaian",
          name: "Penilaian",
          component: Survey,
        },
      ],
    },
  ],
});

export default router;
