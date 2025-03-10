<template>
  <div class="form-field" :class="{ 'has-error': error, 'is-focused': isFocused, 'has-value': hasValue }">
    <label :for="id" class="form-label">{{ label }}</label>
    
    <input 
      v-if="type !== 'textarea'"
      :id="id" 
      :type="type" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="handleBlur"
      class="form-input"
      :placeholder="placeholder"
    />
    
    <textarea
      v-else
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="handleBlur"
      class="form-textarea"
      :placeholder="placeholder"
      :rows="rows"
    ></textarea>
    
    <transition name="fade">
      <p v-if="error" class="error-message">{{ error }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 5
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocused: false,
      hasValue: false
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.hasValue = !!val;
      }
    }
  },
  methods: {
    handleBlur(event) {
      this.isFocused = false;
      this.$emit('blur', event);
    }
  }
}
</script>

<style scoped>
.form-field {
  margin-bottom: 1.5rem;
  position: relative;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
  transition: color 0.3s ease;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
}

.is-focused .form-label {
  color: var(--color-primary);
}

.has-error .form-input,
.has-error .form-textarea {
  border-color: #e74c3c;
}

.has-error .form-label {
  color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

/* Animation for error message */
.fade-enter-active, 
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from, 
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
