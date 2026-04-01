import { createRouter, createWebHashHistory } from 'vue-router';
import Home     from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import CarrotOne from '@/pages/CarrotOne.vue';
import Contact  from '@/pages/Contact.vue';

const routes = [
  { path: '/',            component: Home,      meta: { title: 'Home' } },
  { path: '/products',    component: Products,  meta: { title: 'Carrots' } },
  { path: '/carrot/:id',  component: CarrotOne, meta: { title: 'Carrot Variety' } },
  { path: '/contact',     component: Contact,   meta: { title: 'Contact Us' } }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Agridera Seeds & Agriculture';
});

export default router;
