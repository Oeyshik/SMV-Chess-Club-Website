// Function to validate the form fields
function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const emailId = document.getElementById("emailId").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const department = document.getElementById("department").value;
    const course = document.getElementById("course").value;
    const collegeId = document.getElementById("collegeId").value;
  
    if (firstName.trim() === "") {
      alert("First Name cannot be empty");
      return false;
    }
  
    if (lastName.trim() === "") {
      alert("Last Name cannot be empty");
      return false;
    }
  
    if (phoneNumber.length !== 10) {
      alert("Phone Number must contain 10 digits");
      return false;
    }
  
    if (department.length !== 4) {
      alert("Enter Valid Department ID");
      return false;
    }
  
    if (collegeId.length !== 6) {
      alert("Enter Valid College ID");
      return false;
    }
  
    return true;
  }
  
  // Add an event listener to the form submission
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      // Prevent the form from submitting if validation fails
      event.preventDefault();
    }
  });
  