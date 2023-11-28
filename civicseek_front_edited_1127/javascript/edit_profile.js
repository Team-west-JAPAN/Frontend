document.querySelectorAll('input[type=checkbox][name="edit-option"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      let inputField = document.getElementById(this.value);
      if (this.checked) {
        inputField.style.display = 'block';
      } else {
        inputField.style.display = 'none';
      }
    });
  });