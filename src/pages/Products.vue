<template>
  <div>
    <AppHeader variant="product" />

    <section class="product-hero">
      <img src="/img/mmain.jpg" alt="Agridera Carrot Field" class="product-hero-photo" />
    </section>

    <article>
      <section class="product-content-section">
        <div class="container">

          <h2 class="product-main-title">Agridera Fresh Market Carrot Hybrids</h2>
          <div class="dots-decor product-dots">
            <span></span><span></span><span></span><span></span><span></span>
          </div>

          <div class="product-text-block">
            <p>
              Agridera aims to be one of the world's leading companies in the breeding, production, and
              marketing of carrot seeds. <strong>We invest intensively in research and development to
              provide solutions to growers and consumers in numerous countries around the world.</strong><br>
              In particular, we breed improved disease-resistant cultivars adapted to different markets globally.
            </p>
            <p>
              Currently, emphasis is placed on combining resistance to Alternaria Leaf Blight and
              Cavity Spot with other soil-borne diseases into superior carrot breeding lines and hybrids.
              Comparative efforts are also undertaken to develop varieties resistant to root-knot nematodes.
            </p>
            <p>
              In terms of horticultural traits, breeding focuses on root shape, uniform color, core size,
              sweetness, firmness, crack resistance, shelf life, and high/low temperature adaptation.
              Varieties range from Nantes, Chantenay, Danvers, Imperator, and Paris Market types.
            </p>
            <div class="product-highlight-box">
              <p>
                Agridera Carrot breeding programs focus on three main segments: Fresh Market Carrots,
                Processing Carrots, and Specialty / Baby Carrots.
              </p>
            </div>
          </div>

          <div class="breeding-programs">
            <div class="row g-0">
              <div class="col-12 col-md-4">
                <div class="bp-card">
                  <h3 class="bp-title">Fresh Market Carrot Program</h3>
                  <hr class="bp-divider" />
                  <p class="bp-desc">
                    <strong>Aimed at European and Middle Eastern markets.</strong>
                    Focus on Nantes and Chantenay types with excellent color uniformity,
                    high sugar content, and resistances to Alternaria and Cavity Spot.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="bp-card">
                  <h3 class="bp-title">Processing Carrot Program</h3>
                  <hr class="bp-divider" />
                  <p class="bp-desc">
                    <strong>For industrial processing in Northern and Eastern Europe.</strong>
                    Imperator and Danvers types with high dry matter content,
                    deep orange color, strong vigor, and excellent post-harvest shelf life.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="bp-card">
                  <h3 class="bp-title">Specialty &amp; Baby Carrot Program</h3>
                  <hr class="bp-divider" />
                  <p class="bp-desc">
                    <strong>For premium and gourmet markets worldwide.</strong>
                    Paris Market round types and mini Nantes for containers, raised beds, and
                    specialty retail. High sweetness, tender flesh, and attractive appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div class="product-notice-bar-wrap">
        <div class="container">
          <div class="product-notice-bar-inner">
            <p>Agridera operates through international and local distributers around the world.</p>
          </div>
        </div>
      </div>

      <section class="product-grid-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4" v-for="p in products" :key="p.id">
              <div class="product-item">
                <div class="product-item-img-wrap">
                  <router-link :to="'/carrot/' + p.id">
                    <img :src="'./img/' + p.image" :alt="p.title" class="product-item-img" />
                  </router-link>
                </div>
                <div class="product-item-info">
                  <router-link :to="'/carrot/' + p.id" style="text-decoration:none; color:inherit;">
                    <span class="product-item-code">{{ p.title }}</span>
                    <span class="product-item-name">{{ p.short_text }}</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader  from '@/components/AppHeader.vue';
import AppFooter  from '@/components/AppFooter.vue';
import products   from '@/data/products.js';

export default {
  name: 'ProductsPage',
  components: { AppHeader, AppFooter },
  data() {
    return { products };
  }
};
</script>

<style scoped>
.product-content-section,
.product-grid-section,
.product-notice-bar-wrap {
  background: #FFF3E6 !important;
}
.product-notice-bar-inner {
  background: rgba(232, 119, 34, 0.45) !important;
}
.product-item-img-wrap {
  height: 200px;
  overflow: hidden;
}
.product-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
