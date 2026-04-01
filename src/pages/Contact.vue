<template>
  <div>
    <AppHeader variant="product" />

    <div class="contact-hero-banner">
      <img src="/images/c1.jpg" alt="Agridera Fields" class="contact-hero-img">
    </div>

    <main class="contact-page-main">
      <div class="container contact-container">

        <h1 class="contact-title">Contact us</h1>
        <div class="dots-decor contact-dots">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div class="cart-section" v-if="cart.length > 0">
          <h2>Your selected products</h2>
          <table class="table table-bordered cart-table">
            <thead>
              <tr>
                <th style="width:70px;">Image</th>
                <th>Name</th>
                <th>Short description</th>
                <th style="width:50px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>
                  <img :src="'./img/' + item.image" :alt="item.title" class="cart-thumb">
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.short_text }}</td>
                <td>
                  <button class="cart-remove-btn" @click="removeFromCart(item.id)" title="Remove">
                    &times;
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="order-confirmation" v-if="orderSubmitted">
          <i class="fa fa-check-circle check-icon"></i>
          <h2>Thank you! Your message has been sent.</h2>
          <p style="margin-bottom:20px;color:#555;">Here is a summary of your submission:</p>
          <table>
            <tbody>
              <tr><th>Name:</th>         <td>{{ contactFields.name }}</td></tr>
              <tr><th>Company:</th>      <td>{{ contactFields.company }}</td></tr>
              <tr><th>Position:</th>     <td>{{ contactFields.position }}</td></tr>
              <tr><th>City:</th>         <td>{{ contactFields.city }}</td></tr>
              <tr><th>Country:</th>      <td>{{ contactFields.country }}</td></tr>
              <tr><th>Telephone:</th>    <td>{{ contactFields.tel }}</td></tr>
              <tr><th>Email:</th>        <td>{{ contactFields.email }}</td></tr>
              <tr><th>You are a:</th>    <td>{{ contactFields.role }}</td></tr>
              <tr v-if="contactFields.role === 'other'">
                <th>Specify:</th><td>{{ contactFields.other }}</td>
              </tr>
              <tr><th>Interested in:</th><td>{{ contactFields.interest }}</td></tr>
            </tbody>
          </table>
        </div>

        <form
          class="contact-form"
          id="contactForm"
          @submit.prevent="makeOrder"
          v-if="!orderSubmitted"
        >
          <div class="row custom-gx">

            <div class="col-md-5">

              <div class="form-group">
                <label for="f-name">Name *</label>
                <input
                  type="text" id="f-name" class="form-control"
                  autocomplete="name" required
                  v-model="contactFields.name"
                >
              </div>

              <div class="form-group">
                <label for="f-company">Company Name *</label>
                <input
                  type="text" id="f-company" class="form-control"
                  autocomplete="organization" required
                  v-model="contactFields.company"
                >
              </div>

              <div class="form-group">
                <label for="f-position">Position *</label>
                <input
                  type="text" id="f-position" class="form-control"
                  required
                  v-model="contactFields.position"
                >
              </div>

              <div class="form-group">
                <label for="f-city">City *</label>
                <input
                  type="text" id="f-city" class="form-control"
                  autocomplete="address-level2" required
                  v-model="contactFields.city"
                >
              </div>

              <div class="form-group">
                <label for="f-country">Country *</label>
                <input
                  type="text" id="f-country" class="form-control"
                  autocomplete="country-name" required
                  v-model="contactFields.country"
                >
              </div>

              <div class="form-group">
                <label for="f-tel">Telephone *</label>
                <input
                  type="tel" id="f-tel" class="form-control"
                  autocomplete="tel" required
                  pattern="\+[0-9]{7,}"
                  title="Please enter a phone number starting with + and at least 7 digits (e.g. +380671234567)"
                  v-model="contactFields.tel"
                >
              </div>

              <div class="form-group">
                <label for="f-email">Email *</label>
                <input
                  type="email" id="f-email" class="form-control"
                  autocomplete="email" required
                  v-model="contactFields.email"
                >
              </div>

            </div>

            <div class="col-md-7">

              <div class="form-group">
                <label for="f-role">You are a *</label>
                <select
                  id="f-role" class="form-select"
                  required
                  v-model="contactFields.role"
                >
                  <option value="">— please select —</option>
                  <option value="seed producer">seed producer</option>
                  <option value="distributor">distributor</option>
                  <option value="farmer">farmer</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div class="form-group" v-show="contactFields.role === 'other'">
                <label for="f-other">If other, please specify *</label>
                <input
                  type="text" id="f-other" class="form-control"
                  v-model="contactFields.other"
                >
              </div>

              <div class="form-group">
                <label for="f-interest">You are interested in *</label>
                <textarea
                  id="f-interest" class="form-control interested-textarea"
                  required
                  v-model="contactFields.interest"
                ></textarea>
              </div>

              <div class="form-group captcha-container">
                <label for="f-captcha">Please type this code *</label>
                <div class="captcha-row">
                  <img src="/images/c2.png" alt="Captcha" class="captcha-img">
                  <input
                    type="text" id="f-captcha" class="form-control captcha-input"
                    required
                    placeholder="Please enter the code"
                    v-model="contactFields.captcha"
                    @input="captchaError = false"
                  >
                  <button type="submit" class="btn-send-message">Send Message</button>
                </div>
                <span v-if="captchaError" class="field-error" style="display:block;color:#c0392b;font-size:12px;">
                  Incorrect code. Please enter the code exactly as shown.
                </span>
              </div>

            </div>
          </div>
        </form>

      </div>

      <div class="address-section">
        <h3 class="address-title">Our Address</h3>
        <p class="address-details">
          AGRIDERA Seeds &amp; Agriculture Ltd.<br>
          P.O Box 103,<br>
          Gedera 70750, Israel.<br>
          Telephone: <a href="tel:+97289449222" class="text-green" style="text-decoration:none;">+972 8 944 9222</a>
        </p>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import products  from '@/data/products.js';

export default {
  name: 'ContactPage',
  components: { AppHeader, AppFooter },

  data() {
    return {
      products,

      cart: [],

      contactFields: {
        name:     '',
        company:  '',
        position: '',
        city:     '',
        country:  '',
        tel:      '',
        email:    '',
        role:     '',
        other:    '',
        interest: '',
        captcha:  ''
      },

      orderSubmitted: false,
      captchaError:   false
    };
  },

  mounted() {
    this.getCart();
  },

  methods: {

    getCart() {
      this.cart = [];
      const stored = window.localStorage.getItem('cart');
      if (stored) {
        const ids = stored.split(',');
        this.products.forEach(p => {
          if (ids.indexOf(String(p.id)) !== -1) {
            this.cart.push(p);
          }
        });
      }
    },

    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id);

      const stored = window.localStorage.getItem('cart');
      if (stored) {
        const ids = stored.split(',').filter(i => i !== String(id));
        if (ids.length > 0) {
          window.localStorage.setItem('cart', ids.join(','));
        } else {
          window.localStorage.removeItem('cart');
        }
      }
    },

    makeOrder() {
      if (this.contactFields.captcha !== '7CJ3') {
        this.captchaError = true;
        return;
      }
      this.captchaError = false;

      this.orderSubmitted = true;

      this.cart = [];
      window.localStorage.removeItem('cart');
    }
  }
};
</script>

<style scoped>
.cart-section {
  margin-bottom: 32px;
}
.cart-section h2 {
  font-family: 'Roboto Slab', serif;
  font-size: 20px;
  color: #2d5a27;
  margin-bottom: 12px;
}
.cart-table th {
  background: #57984C;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
}
.cart-table td {
  vertical-align: middle;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
}
.cart-thumb {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 4px;
}
.cart-remove-btn {
  background: none;
  border: none;
  color: #c0392b;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 0 6px;
  transition: color 0.15s;
}
.cart-remove-btn:hover { color: #8e1a10; }

.contact-form label { cursor: pointer; transition: color 0.18s; }
.contact-form label:hover { color: #57984C; }

.order-confirmation {
  background: #f4faf3;
  border: 1px solid #57984C;
  border-radius: 8px;
  padding: 28px 32px;
  margin-bottom: 32px;
  font-family: 'Open Sans', sans-serif;
}
.order-confirmation h2 {
  font-family: 'Roboto Slab', serif;
  color: #2d5a27;
  font-size: 22px;
  margin-bottom: 18px;
}
.check-icon {
  color: #57984C;
  font-size: 36px;
  margin-bottom: 12px;
  display: block;
}
.order-confirmation table th {
  width: 160px;
  font-weight: 600;
  color: #555;
  padding-right: 16px;
}
.order-confirmation table td { color: #222; }
</style>
