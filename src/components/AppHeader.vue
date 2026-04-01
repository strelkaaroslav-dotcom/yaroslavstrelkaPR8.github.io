<template>
  <header :class="['site-header', headerClass]">
    <div :class="['header-bg', bgClass]"></div>
    <div class="header-inner">
      <div class="container">
        <div class="top-row">
          <router-link to="/" class="logo-link">
            <img src="/images/7.png" alt="Agridera Seeds & Agriculture" :class="['logo-img', logoClass]" />
          </router-link>
          <div class="right-col">
            <form class="search-form" @submit.prevent>
              <input type="text" name="q" placeholder="Search" />
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            <nav class="main-nav">
              <router-link to="/">Home</router-link>
              <a href="#">Company Profile</a>
              <router-link to="/products">Products</router-link>
              <a href="#">Services</a>
              <a href="#">R &amp; D</a>
              <router-link to="/contact">Contact</router-link>
            </nav>
            <button
              class="hamburger-btn"
              :class="{ open: menuOpen }"
              aria-label="Menu"
              :aria-expanded="String(menuOpen)"
              @click.stop="toggleMenu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>

      <slot name="hero" />
    </div>

    <Teleport to="body">
      <transition name="mobile-menu">
        <div class="mobile-overlay" v-if="menuOpen" @click.self="closeMenu">
          <div class="mobile-overlay-panel" ref="mobilePanel">

            <button class="mobile-close-btn" aria-label="Close menu" @click="closeMenu">
              &times;
            </button>

            <div class="mobile-logo-wrap">
              <router-link to="/" @click="closeMenu">
                <img src="/images/7.png" alt="Agridera" class="mobile-logo-img" />
              </router-link>
            </div>

            <form class="mobile-search-form" @submit.prevent>
              <input type="text" placeholder="Search" />
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>

            <nav class="mobile-nav-links">
              <router-link to="/"        @click="closeMenu">Home</router-link>
              <a href="#"                @click="closeMenu">Company Profile</a>
              <router-link to="/products" @click="closeMenu">Products</router-link>
              <a href="#"                @click="closeMenu">Services</a>
              <a href="#"                @click="closeMenu">R &amp; D</a>
              <router-link to="/contact"  @click="closeMenu">Contact</router-link>
            </nav>

          </div>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  props: {
    variant: {
      type: String,
      default: 'product'
    }
  },

  data() {
    return { menuOpen: false };
  },

  computed: {
    headerClass() {
      if (this.variant === 'home')   return 'home-header';
      if (this.variant === 'carrot') return 'product-page-header carrot-header';
      return 'product-page-header';
    },
    bgClass() {
      return this.variant !== 'home' ? 'product-header-bg' : '';
    },
    logoClass() {
      return this.variant !== 'home' ? 'product-logo' : '';
    }
  },

  watch: {
    menuOpen(val) {
      document.body.style.overflow = val ? 'hidden' : '';
    }
  },

  beforeUnmount() {
    document.body.style.overflow = '';
  },

  methods: {
    toggleMenu() { this.menuOpen = !this.menuOpen; },
    closeMenu()  { this.menuOpen = false; }
  }
};
</script>

<style scoped>
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: flex-end;
}

.mobile-overlay-panel {
  position: relative;
  width: 100%;
  max-width: 460px;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  padding: 24px 0 40px;
  box-shadow: -4px 0 24px rgba(0,0,0,0.18);
}

.mobile-close-btn {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 32px;
  line-height: 1;
  color: #333;
  cursor: pointer;
  padding: 0 4px;
  z-index: 1;
}
.mobile-close-btn:hover { color: #57984C; }

.mobile-logo-wrap {
  text-align: center;
  padding: 8px 24px 20px;
}
.mobile-logo-img {
  max-height: 80px;
  width: auto;
}

.mobile-search-form {
  display: flex;
  align-items: center;
  margin: 0 0 8px;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 24px 12px;
}
.mobile-search-form input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  background: transparent;
}
.mobile-search-form input::placeholder { color: #999; }
.mobile-search-form button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #555;
  padding: 0 0 0 8px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
}
.mobile-nav-links a {
  display: block;
  padding: 18px 24px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #2a2a2a;
  text-decoration: none;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.15s, color 0.15s;
}
.mobile-nav-links a:hover,
.mobile-nav-links a.router-link-active {
  background: #f4faf3;
  color: #57984C;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease;
}
.mobile-menu-enter-active .mobile-overlay-panel,
.mobile-menu-leave-active .mobile-overlay-panel {
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
.mobile-menu-enter-from .mobile-overlay-panel,
.mobile-menu-leave-to  .mobile-overlay-panel {
  transform: translateX(100%);
}

@media (min-width: 992px) {
  .mobile-overlay { display: none !important; }
}
</style>
