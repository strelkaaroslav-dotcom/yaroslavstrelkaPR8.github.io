<template>
  <div>
    <AppHeader variant="home">
      <template #hero>
        <div class="hero-content">
          <h1>Agridera Seeds and Agriculture Ltd</h1>
          <a href="#" class="btn-readmore">Read More</a>
        </div>
      </template>
    </AppHeader>

    <main>

      <section class="crop-strip">
        <div class="container">
          <div class="crop-row">
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/8.png" alt="Wheat" /></div>
              <span class="crop-label">Wheat</span>
            </div>
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/14.png" alt="Confection Watermelon" /></div>
              <span class="crop-label">Confection Watermelon</span>
            </div>
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/13.png" alt="Clover" /></div>
              <span class="crop-label">Clover</span>
            </div>
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/12.png" alt="Confection Sunflower" /></div>
              <span class="crop-label">Confection Sunflower</span>
            </div>
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/11.png" alt="Tomato" /></div>
              <span class="crop-label">Tomato</span>
            </div>
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/10.png" alt="Eggplant P/O" /></div>
              <span class="crop-label">Eggplant P/O</span>
            </div>
            <div class="crop-item">
              <div class="crop-icon"><img src="/images/9.png" alt="Ornamental Sunflower" /></div>
              <span class="crop-label">Ornamental Sunflower</span>
            </div>
          </div>
        </div>
      </section>

      <section class="vm-section">
        <div class="blob-left"></div>
        <div class="blob-right"></div>
        <div class="blob-center"></div>
        <div class="container">

          <div class="vm-row vision-row">
            <div class="vm-text">
              <h2 class="vm-heading">Vision</h2>
              <div class="dots-decor">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <p class="vm-desc">
                We believe in long-term growth with an emphasis on
                the potential of emerging markets. We also support
                the global need of feeding the growing population.
              </p>
            </div>
            <div class="vm-image">
              <img src="/images/2.png" alt="Vision" />
            </div>
          </div>

          <div class="vm-row mission-row">
            <div class="vm-image">
              <img src="/images/4.png" alt="Mission" />
              <div class="play-btn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="vm-text">
              <h2 class="vm-heading">Mission</h2>
              <div class="dots-decor">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <p class="vm-desc">
                Breeding and marketing seeds via advanced field
                crops and vegetable varieties that provide an added
                value to all supply chain partners.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section class="activities-section">
        <div class="activities-inner">
          <div class="container">

            <h2 class="section-heading">Agridera's main activities</h2>
            <div class="dots-wrap">
              <div class="dots-decor center">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            <div class="row g-0">
              <div class="col-12 col-md-4">
                <div class="act-card">
                  <img src="/images/6.png" alt="Open field crop seeds" class="act-img" />
                  <p class="act-name">Open field crop seeds</p>
                  <div class="act-line"></div>
                  <p class="act-desc">wheat, cotton, legumes,<br>hybrid confection sunflower</p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="act-card">
                  <img src="/images/5.png" alt="Vegetable seeds" class="act-img" />
                  <p class="act-name">Vegetable seeds</p>
                  <div class="act-line"></div>
                  <p class="act-desc">hybrid open field tomatoes,<br>eggplant, onion, paprika, etc.</p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="act-card">
                  <img src="/images/3.png" alt="Ornamental seeds" class="act-img" />
                  <p class="act-name">Ornamental seeds</p>
                  <div class="act-line"></div>
                  <p class="act-desc">hybrid cut sunflowers, hybrid<br>patio tomatoes, Bells of Irland, etc.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'HomePage',
  components: { AppHeader, AppFooter }
};
</script>
