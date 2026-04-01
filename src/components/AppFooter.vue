<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-main">
        <nav class="footer-nav">
          <a href="#">Profile</a>
          <a href="#">Management</a>
          <router-link to="/products">Products</router-link>
          <a href="#">R&amp;D</a>
          <a href="#">Links</a>
          <a href="#">Sitemap</a>
          <router-link to="/contact">Contact</router-link>
        </nav>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div class="footer-copy">
        <p>Agridera Seeds &amp; Agriculture Ltd. &copy; 2020</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>
