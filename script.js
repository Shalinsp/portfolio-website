// about section
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-list");
    document.getElementById(tabname).classList.add("active-tab");
}

// sidemenu (open and close menu)
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// better way is go with email id forms 
// document.querySelector('form[action="https://api.web3forms.com/submit"]').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
    
//     // Serialize form data
//     const formData = new FormData(this);
    
//     // Store reference to the form
//     const form = this;
    
//     // Send form data to the API
//     fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             // Reset form fields on successful submission
//             form.reset(); // Reset the form
//             alert('Form submitted successfully!');
//         } else {
//             alert('Form submission failed!');
//         }
//     })
//     .catch(error => {
//         console.error('Error submitting form:', error);
//         alert('An error occurred while submitting the form. Please try again later.');
//     });
// });

// =========================================================================================== //

// with pop card 

document.querySelector('form[action="https://api.web3forms.com/submit"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Serialize form data
    const formData = new FormData(this);

    // Send form data to the API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Show success modal
            document.getElementById('successModal').style.display = 'block';
        } else {
            alert('Form submission failed!');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
    });
});

// Close the modal when clicking the close button
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});

// Go back to home page when clicking the "Go Back" button
document.getElementById('goBackBtn').addEventListener('click', function() {
    window.location.href = '/'; // Replace '/' with your home page URL
});














// =========================================================================================== //


//contact form using google sheet 
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwrbcw4SuTwO1WmIxVb6C9aL0paJw90DSGOuxDxSoDE9a5NoBi9dkMUmf2faTl__0RNRw/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg") 

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {msg.innerHTML = "Message sent successfully"
//     setTimeout(function(){
//         msg.innerHTML = ""
//     }, 5000)
//     form.reset()
//    })
//     .catch(error => console.error('Error!', error.message))
// })

// =========================================================================================== //