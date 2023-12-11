// function showdoctor(){
//     var patient = 'HormoneandMetabolism';
//     if(patient= HormoneandMetabolism){
//        document.write("Dr.avail")
//     }
//     document.getElementById()
// }


function handleSubmit () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var number = document.getElementById('number').value;
    var slot = document.getElementById('slot').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    const doctor = document.getElementById('doctor').value;


    // to set into local storage

    localStorage.setItem("NAME", name);
    localStorage.setItem("EMAIL", email );
    localStorage.setItem("DATE", date );
    localStorage.setItem("NUMBER", number );
    localStorage.setItem("SLOT", slot );
    localStorage.setItem("AGE", age );
    localStorage.setItem("GENDER", gender );
    localStorage.setItem("DOCTOR", doctor );
    
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email );
    sessionStorage.setItem("DATE", date );
    sessionStorage.setItem("NUMBER", number );
    sessionStorage.setItem("SLOT", slot );
    sessionStorage.setItem("AGE", age );
    sessionStorage.setItem("GENDER", gender );
    sessionStorage.setItem("DOCTOR", doctor );
    
    return;
    alert("Appointment Booked ")
     // Display the form data history
     displayFormDataHistory();
}


function storeFormData() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var number = document.getElementById('number').value;
    var slot = document.getElementById('slot').value;
    var age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const doctor = document.getElementById('doctor').value;
  
    // Create an object to store current form submission
    var formData = {
      'name': name,
      'email': email,
    //   'message': message
    };
  
    // Retrieve existing form data history from local storage or initialize an empty array
    var formDataHistory = JSON.parse(localStorage.getItem('formDataHistory')) || [];
  
    // Add the current form submission to the history array
    formDataHistory.push(formData);
  
    // Store updated form data history in local storage
    localStorage.setItem('formDataHistory', JSON.stringify(formDataHistory));
  
    alert('Form data saved as history in local storage.');
    
    // Display the form data history
    displayFormDataHistory();
  }
  
  function displayFormDataHistory() {
    // Retrieve the form data history from local storage
    var formDataHistory = JSON.parse(localStorage.getItem('formDataHistory'));
  
    // Get the display area element
    var displayArea = document.getElementById('formDataHistoryDisplay');
  
    // Clear the previous content in the display area
    displayArea.innerHTML = '';
  
    // Display the form data history
    if (formDataHistory && formDataHistory.length > 0) {
      var historyHTML = '<h3>Form Data History:</h3><ul>';
  
      formDataHistory.forEach(function(data, index) {
        historyHTML += '<li><strong>Entry ' + (index + 1) + ':</strong> Name: ' + data.name + ', Email: ' + data.email + ', Message: ' + data.message + '</li>';
      });
  
      historyHTML += '</ul>';
      displayArea.innerHTML = historyHTML;
    } else {
      displayArea.innerHTML = '<p>No form data history found.</p>';
    }
  }
  
  // Call the displayFormDataHistory function when the page loads to display any existing form data history
  displayFormDataHistory();