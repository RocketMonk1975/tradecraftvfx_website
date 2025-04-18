<template>
  <div class="contact-page">
    <!-- Orange hero section with animated title -->
    <div class="orange-hero-wrapper">
      <section class="dream-big-hero">
        <div class="container dream-big-container">
          <ScrollReveal direction="left" :distance="100" :duration="1.2">
            <h1 class="dream-big-text">GET IN TOUCH</h1>
            <p>Let's Create Something Amazing Together</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="column-5 column-tablet-12">
            <ScrollReveal direction="left">
              <div class="contact-info">
                <h2>Let's Talk</h2>
                <p>Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.</p>
                
                <div class="info-list">
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                    </div>
                    <div class="info-content">
                      <h4>Email</h4>
                      <p><a href="mailto:info@TradeCraft VFX.com">info@TradeCraft VFX.com</a></p>
                    </div>
                  </div>
                  
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                    </div>
                    <div class="info-content">
                      <h4>Location</h4>
                      <p>Los Angeles, California<br>United States</p>
                    </div>
                  </div>
                  
                  <div class="info-item">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" fill="currentColor"/></svg>
                    </div>
                    <div class="info-content">
                      <h4>Phone</h4>
                      <p><a href="tel:+13235550199">+1 (323) 555-0199</a></p>
                    </div>
                  </div>
                </div>
                
                <div class="social-links">
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill="currentColor"/></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.38 4.38 0 0 0 1.91-2.41 8.76 8.76 0 0 1-2.78 1.06 4.37 4.37 0 0 0-7.44 3.99 12.38 12.38 0 0 1-8.99-4.56 4.37 4.37 0 0 0 1.35 5.83 4.34 4.34 0 0 1-1.97-.55v.05a4.37 4.37 0 0 0 3.5 4.28 4.4 4.4 0 0 1-2 .07 4.37 4.37 0 0 0 4.07 3.03 8.76 8.76 0 0 1-5.44 1.87 8.73 8.73 0 0 1-1.04-.06 12.38 12.38 0 0 0 6.7 1.97c8.04 0 12.45-6.66 12.45-12.45 0-.19 0-.38-.01-.57a8.9 8.9 0 0 0 2.17-2.27z" fill="currentColor"/></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" fill="currentColor"/></svg>
                  </a>
                  <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/></svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div class="column-7 column-tablet-12">
            <ScrollReveal direction="right">
              <div class="contact-form-container">
                <transition name="fade-slide" mode="out-in">
                  <!-- Success Message -->
                  <div v-if="formSubmitted" class="success-message" key="success">
                    <div class="success-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/></svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for contacting us. Our team will get back to you shortly.</p>
                    <AnimatedButton @click="resetForm" buttonClass="secondary">Send Another Message</AnimatedButton>
                  </div>
                  
                  <!-- Contact Form -->
                  <form v-else @submit.prevent="submitForm" class="contact-form" key="form">
                    <h3>Send Us a Message</h3>
                    
                    <div class="form-row">
                      <div class="form-col">
                        <FormInput
                          id="name"
                          label="Name"
                          v-model="form.name"
                          placeholder="Your name"
                          :error="errors.name"
                          @blur="validateField('name')"
                        />
                      </div>
                      <div class="form-col">
                        <FormInput
                          id="email"
                          label="Email"
                          type="email"
                          v-model="form.email"
                          placeholder="Your email address"
                          :error="errors.email"
                          @blur="validateField('email')"
                        />
                      </div>
                    </div>
                    
                    <FormInput
                      id="subject"
                      label="Subject"
                      v-model="form.subject"
                      placeholder="What is this regarding?"
                      :error="errors.subject"
                      @blur="validateField('subject')"
                    />
                    
                    <FormInput
                      id="message"
                      label="Message"
                      type="textarea"
                      v-model="form.message"
                      placeholder="Tell us about your project..."
                      :error="errors.message"
                      @blur="validateField('message')"
                      :rows="6"
                    />
                    
                    <div class="form-submit">
                      <AnimatedButton 
                        type="submit" 
                        :loading="isSubmitting"
                        :disabled="!isFormValid"
                      >
                        Send Message
                      </AnimatedButton>
                    </div>
                  </form>
                </transition>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollReveal from '../components/ScrollReveal.vue';
import FormInput from '../components/FormInput.vue';
import AnimatedButton from '../components/AnimatedButton.vue';

export default {
  name: 'ContactPage',
  components: {
    ScrollReveal,
    FormInput,
    AnimatedButton
  },
  data() {
    return {
      isSubmitting: false,
      formSubmitted: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  computed: {
    isFormValid() {
      return (
        this.form.name.trim() !== '' && 
        this.form.email.trim() !== '' &&
        this.validateEmail(this.form.email) &&
        this.form.subject.trim() !== '' &&
        this.form.message.trim() !== ''
      );
    }
  },
  methods: {
    validateField(field) {
      switch (field) {
        case 'name':
          this.errors.name = this.form.name.trim() === '' ? 'Please enter your name' : '';
          break;
        case 'email':
          if (this.form.email.trim() === '') {
            this.errors.email = 'Please enter your email address';
          } else if (!this.validateEmail(this.form.email)) {
            this.errors.email = 'Please enter a valid email address';
          } else {
            this.errors.email = '';
          }
          break;
        case 'subject':
          this.errors.subject = this.form.subject.trim() === '' ? 'Please enter a subject' : '';
          break;
        case 'message':
          this.errors.message = this.form.message.trim() === '' ? 'Please enter your message' : '';
          break;
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
    validateForm() {
      this.validateField('name');
      this.validateField('email');
      this.validateField('subject');
      this.validateField('message');
      
      return Object.values(this.errors).every(error => error === '');
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        // In a real application, you would send the form data to a server here
        // For example:
        // await fetch('https://api.example.com/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(this.form)
        // });
        
        // Simulate API call with a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        this.formSubmitted = true;
        
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (could show an error message to the user)
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.formSubmitted = false;
    }
  }
}
</script>

<style scoped>
/* Orange hero styles */
.orange-hero-wrapper {
  background-color: #ff8243;
  width: 100%;
  color: white;
}

.dream-big-hero {
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  padding-top: calc(var(--header-height) + 2rem);
  padding-bottom: 4rem;
}

.dream-big-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dream-big-text {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  line-height: 1.1;
}

.dream-big-container p {
  font-size: 2rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .dream-big-text {
    font-size: 2.5rem;
  }
  
  .dream-big-container p {
    font-size: 1.5rem;
  }
}

.contact-info {
  padding-right: var(--spacing-xl);
}

.contact-info h2 {
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
}

.contact-info h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--color-primary);
}

.contact-info p {
  margin-bottom: var(--spacing-lg);
  color: var(--color-secondary);
}

.info-list {
  margin-top: var(--spacing-xl);
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(44, 62, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
  color: var(--color-primary);
  flex-shrink: 0;
}

.info-content h4 {
  margin: 0 0 var(--spacing-xs);
  font-size: 1rem;
}

.info-content p {
  margin: 0;
  color: var(--color-secondary);
}

.info-content a {
  color: var(--color-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  margin-top: var(--spacing-xl);
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(44, 62, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

/* Form Styles */
.contact-form-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: var(--spacing-xl);
  height: 100%;
}

.contact-form h3 {
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.form-row {
  display: flex;
  margin: 0 -10px;
}

.form-col {
  flex: 1;
  padding: 0 10px;
}

.form-submit {
  text-align: center;
  margin-top: var(--spacing-lg);
}

/* Success Message */
.success-message {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.success-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #2ecc71;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
}

.success-message h3 {
  margin-bottom: var(--spacing-md);
  color: #2ecc71;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media (max-width: 768px) {
  .contact-info {
    margin-bottom: var(--spacing-xl);
    padding-right: 0;
  }
  
  .form-row {
    flex-direction: column;
  }
  
  .contact-form-container {
    padding: var(--spacing-lg);
  }
}
</style>

