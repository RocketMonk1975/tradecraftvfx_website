<template>
  <div class="contact-form-container">
    <transition name="fade" mode="out-in">
      <div v-if="formSubmitted" class="success-message">
        <div class="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M7 13l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3>Thank you for your message</h3>
        <p>We'll be in touch with you shortly.</p>
        <button class="btn" @click="resetForm">Send another message</button>
      </div>
      
      <form v-else @submit.prevent="submitForm" class="contact-form" ref="form">
        <div class="form-field" :class="{ 'has-error': errors.name, 'is-active': activeField === 'name' }">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            @focus="setActiveField('name')" 
            @blur="validateField('name')"
            autocomplete="name"
          >
          <span class="error" v-if="errors.name">{{ errors.name }}</span>
        </div>
        
        <div class="form-field" :class="{ 'has-error': errors.email, 'is-active': activeField === 'email' }">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            @focus="setActiveField('email')" 
            @blur="validateField('email')"
            autocomplete="email"
          >
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>
        
        <div class="form-field" :class="{ 'has-error': errors.subject, 'is-active': activeField === 'subject' }">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            @focus="setActiveField('subject')" 
            @blur="validateField('subject')"
          >
          <span class="error" v-if="errors.subject">{{ errors.subject }}</span>
        </div>
        
        <div class="form-field" :class="{ 'has-error': errors.message, 'is-active': activeField === 'message' }">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            rows="5" 
            @focus="setActiveField('message')" 
            @blur="validateField('message')"
          ></textarea>
          <span class="error" v-if="errors.message">{{ errors.message }}</span>
        </div>
        
        <button 
          type="submit" 
          class="submit-button" 
          :disabled="isSubmitting"
          :class="{ 'is-loading': isSubmitting }"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else class="loading-dots"><span>.</span><span>.</span><span>.</span></span>
        </button>
      </form>
    </transition>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'ContactForm',
  data() {
    return {
      activeField: null,
      formSubmitted: false,
      isSubmitting: false,
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
    };
  },
  mounted() {
    // Animate form fields on initial load
    this.$nextTick(() => {
      const formFields = this.$refs.form.querySelectorAll('.form-field');
      gsap.fromTo(
        formFields, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    });
  },
  methods: {
    setActiveField(field) {
      this.activeField = field;
      // Clear error when field is focused
      if (this.errors[field]) {
        this.errors[field] = '';
      }
    },
    validateField(field) {
      this.activeField = null;
      
      switch (field) {
        case 'name':
          if (!this.form.name.trim()) {
            this.errors.name = 'Please enter your name';
          }
          break;
        case 'email':
          if (!this.form.email.trim()) {
            this.errors.email = 'Please enter your email address';
          } else if (!this.isValidEmail(this.form.email)) {
            this.errors.email = 'Please enter a valid email address';
          }
          break;
        case 'subject':
          if (!this.form.subject.trim()) {
            this.errors.subject = 'Please enter a subject';
          }
          break;
        case 'message':
          if (!this.form.message.trim()) {
            this.errors.message = 'Please enter your message';
          }
          break;
      }
    },
    validateForm() {
      let isValid = true;
      
      // Validate all fields
      if (!this.form.name.trim()) {
        this.errors.name = 'Please enter your name';
        isValid = false;
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Please enter your email address';
        isValid = false;
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      if (!this.form.subject.trim()) {
        this.errors.subject = 'Please enter a subject';
        isValid = false;
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Please enter your message';
        isValid = false;
      }
      
      return isValid;
    },
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      // First validate the form
      if (!this.validateForm()) {
        // Animate invalid fields
        const errorFields = document.querySelectorAll('.form-field.has-error');
        gsap.fromTo(
          errorFields,
          { x: -10 },
          { x: 0, duration: 0.3, ease: "elastic.out(1, 0.3)" }
        );
        return;
      }
      
      // Show loading state
      this.isSubmitting = true;
      
      // Simulate form submission (replace with actual API call in production)
      setTimeout(() => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        
        // In a real implementation, you would send this data to your backend
        console.log('Form submitted:', this.form);
        
        // Emit event with form data
        this.$emit('form-submitted', this.form);
      }, 1500);
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
      
      // Animate form fields when form is reset
      this.$nextTick(() => {
        const formFields = this.$refs.form.querySelectorAll('.form-field');
        gsap.fromTo(
          formFields, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        );
      });
    }
  }
};
</script>

<style scoped>
.contact-form-container {
  margin-bottom: var(--spacing-xl);
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.form-field {
  position: relative;
  margin-bottom: var(--spacing-md);
  transition: transform 0.3s ease;
}

/* Make message field full width */
.form-field:nth-child(4) {
  grid-column: 1 / -1;
}

.form-field label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  transition: color 0.3s ease;
}

.form-field.is-active label {
  color: var(--color-primary);
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-field.is-active input,
.form-field.is-active textarea {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(44, 62, 80, 0.1);
}

.form-field.has-error input,
.form-field.has-error textarea {
  border-color: #e74c3c;
}

.form-field .error {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 0.8rem;
  color: #e74c3c;
}

.submit-button {
  grid-column: 1 / -1;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button:hover {
  background-color: var(--color-secondary);
}

.submit-button:active {
  transform: translateY(1px);
}

.submit-button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.submit-button.is-loading {
  color: transparent;
}

.loading-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
}

.loading-dots span {
  animation: dotFade 1.5s infinite;
  opacity: 0;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.5s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 1s;
}

@keyframes dotFade {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.success-message {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.success-icon {
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.success-message h3 {
  margin-bottom: var(--spacing-sm);
}

.success-message p {
  margin-bottom: var(--spacing-md);
  color: var(--color-secondary);
}

.success-message .btn {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.success-message .btn:hover {
  background-color: var(--color-secondary);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-form {
    grid-template-columns: 1fr;
  }
}
</style>
