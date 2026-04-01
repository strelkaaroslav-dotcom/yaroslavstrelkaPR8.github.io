<template>
  <div>
    <AppHeader variant="carrot" />

    <article>
      <main class="pd-main">
        <div class="container pd-container">

          <router-link to="/products" class="pd-back-link">
            <span class="pd-back-arrow">&#8592;</span> Return to all carrots
          </router-link>

          <div class="row pd-top-row" v-if="product">

            <div class="col-12 col-lg-6 pd-left-col">

              <h1 class="pd-title-code">{{ product.title }}</h1>
              <h2 class="pd-title-name">Carrot Hybrid Variety</h2>

              <div class="dots-decor pd-dots">
                <span></span><span></span><span></span><span></span><span></span>
              </div>

              <div class="pd-badge-row">
                <p class="pd-badge-text">{{ product.short_text }}</p>
              </div>

              <div class="pd-chars">
                <h3 class="pd-chars-heading">DESCRIPTION</h3>
                <div class="pd-char-block pd-resistance">
                  <p class="pd-char-value">{{ product.desc }}</p>
                </div>
              </div>

              <div class="cart-btn-wrap">
                <a
                  class="btn-add-cart"
                  href="#"
                  @click.prevent="addToCart(product.id)"
                  v-if="!inCart"
                >
                  <i class="fas fa-cart-plus"></i> Add to cart
                </a>
                <router-link class="btn-go-cart" to="/contact" v-if="inCart">
                  <i class="fas fa-shopping-cart"></i> Go to cart
                </router-link>
              </div>

            </div>

            <div class="col-12 col-lg-6 pd-right-col">
              <div class="pd-photo-wrap">
                <img :src="'./img/' + product.image" :alt="product.title" class="pd-photo" />
              </div>
            </div>

          </div>

          <div v-else style="padding: 40px 0; text-align:center;">
            <p style="font-size:18px; color:#666;">
              Please select a carrot variety from the
              <router-link to="/products">products page</router-link>.
            </p>
          </div>

        </div>
      </main>
    </article>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import products  from '@/data/products.js';

export default {
  name: 'CarrotOnePage',
  components: { AppHeader, AppFooter },

  data() {
    return {
      products,
      inCart: false
    };
  },

  computed: {
    product() {
      const id = parseInt(this.$route.params.id);
      return this.products.find(p => p.id === id) || null;
    }
  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.checkInCart();
      }
    }
  },

  methods: {
    addToCart(id) {
      let cart = [];
      const stored = window.localStorage.getItem('cart');
      if (stored) cart = stored.split(',');

      if (cart.indexOf(String(id)) === -1) {
        cart.push(id);
        window.localStorage.setItem('cart', cart.join(','));
        this.inCart = true;
      }
    },

    checkInCart() {
      if (!this.product) return;
      const stored = window.localStorage.getItem('cart');
      if (stored) {
        this.inCart = stored.split(',').indexOf(String(this.product.id)) !== -1;
      } else {
        this.inCart = false;
      }
    }
  }
};
</script>

<style scoped>
.cart-btn-wrap {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.btn-add-cart {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #E87722;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-add-cart:hover {
  background: #c4621a;
  color: #fff;
  text-decoration: none;
}
.btn-go-cart {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #57984C;
  color: #fff;
  border-radius: 30px;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-go-cart:hover {
  background: #467b3c;
  color: #fff;
  text-decoration: none;
}
</style>
