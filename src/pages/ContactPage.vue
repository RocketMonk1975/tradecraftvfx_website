<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? We'd love to hear from you!</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <h3>Email</h3>
                <p>info@tradevfx.com</p>
              </div>
              
              <div class="contact-item">
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              
              <div class="contact-item">
                <h3>Address</h3>
                <p>123 Visual FX Lane<br>Digital City, DC 10101</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <h2>Send Us A Message</h2>
            <form @submit.prevent="submitForm">
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
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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
    submitForm() {
      alert('Form submitted! This would connect to a backend service in production.')
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>

<style scoped>
.page-header {
  background-color: var(--background-dark);
  color: var(--light-text);
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-2xl);
  text-align: center;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
}

.contact-details {
  margin-top: var(--spacing-xl);
}

.contact-item {
  margin-bottom: var(--spacing-lg);
}

.contact-item h3 {
  margin-bottom: var(--spacing-xs);
  color: var(--accent-color);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: var(--font-body);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    margin-bottom: var(--spacing-xl);
  }
}
</style>
