<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="column-6 column-tablet-12">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? Fill out the form and we'll be in touch soon.</p>
            
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
          
          <div class="column-6 column-tablet-12">
            <div class="contact-info">
              <h2>Contact Information</h2>
              
              <div class="contact-method">
                <h3>Email</h3>
                <p>info@tradevfx.com</p>
              </div>
              
              <div class="contact-method">
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              
              <div class="contact-method">
                <h3>Address</h3>
                <p>123 Visual FX Lane<br>Digital City, DC 10101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      alert('Thank you for your message! We will be in touch soon.')
      this.form = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: var(--color-primary);
  color: white;
  padding: calc(var(--header-height) + 50px) 0 50px;
  text-align: center;
}

.contact-form {
  margin-top: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

label {
  display: block;
  margin-bottom: var(--spacing-xs);
}

input, textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: var(--font-body);
}

.contact-info {
  background-color: var(--color-light-bg);
  padding: var(--spacing-lg);
  border-radius: 8px;
  height: 100%;
}

.contact-method {
  margin-bottom: var(--spacing-md);
}

.contact-method h3 {
  margin-bottom: var(--spacing-xs);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .contact-info {
    margin-top: var(--spacing-lg);
  }
}
</style>
