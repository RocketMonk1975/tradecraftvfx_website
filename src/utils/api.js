// Simple API utility for form submission and other API calls

/**
 * Submit form data to a serverless function or API endpoint
 * @param {Object} formData - The form data to submit
 * @returns {Promise} - Response from the API
 */
export const submitContactForm = async (formData) => {
  // In production, replace this URL with your actual form handling endpoint
  // Example services: Netlify Forms, AWS Lambda, Google Cloud Functions, FormSpree, etc.
  const API_URL = 'https://formspree.io/f/your-formspree-id';
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

/**
 * Mock API call for development
 * @param {Object} data - Data to "submit"
 * @returns {Promise} - Simulated response
 */
export const mockApiCall = async (data) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate successful response
  return {
    success: true,
    message: 'Data received successfully',
    data: data
  };
};
