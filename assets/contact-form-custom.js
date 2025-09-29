//logic for our custom contact form
document.addEventListener("DOMContentLoaded", function() {
  // Your code here
  const businessAccountCheckbox = document.getElementById('businessAccount');
  const companyInfo = document.getElementById('companyInfo');

    businessAccountCheckbox.addEventListener('change', toggleCompanyInfo);


   function toggleCompanyInfo() {
    if (businessAccountCheckbox.checked) {
      companyInfo.classList.remove('hidden');
    } else {
      companyInfo.classList.add('hidden');
    }
    }

  // Show Product Name only when Reason for Contact === 'Product Question' (value 'product')
  const contactReasonSelect = document.getElementById('contactReason');
  const productNameField = document.getElementById('productNameField');
  const orderNumberField = document.getElementById('orderNumberField');

  function updateProductNameVisibility() {
    if (!contactReasonSelect || !productNameField) return;
    // The option for Product Question uses value="product" in the markup
    if (contactReasonSelect.value === 'product') {
      productNameField.classList.remove('hidden');
    } else {
      productNameField.classList.add('hidden');
    }
    // The option for Question Regarding an Order uses value="question regarding an order" in the markup
    if (contactReasonSelect.value === 'order') {
      orderNumberField.classList.remove('hidden');
    } else {
      orderNumberField.classList.add('hidden');
    }
  }

  if (contactReasonSelect) {
    toggleCompanyInfo()
    // Initialize visibility on page load
    updateProductNameVisibility();
    // Update when the select value changes
    contactReasonSelect.addEventListener('change', updateProductNameVisibility);
  }




}

); 