(function () {
    const form = document.getElementById("my-form");
      
      async function handleSubmit(event) {
        const email = document.getElementById('mail');
        email.addEventListener('input', function (event){
         if (email.validity.typeMismatch){
          email.setCustomValidity('Write correct email!');
        } else { 
          email.setCustomValidity("");
        }
      });
        event.preventDefault();
        const status = document.getElementById("my-form-status");
        const data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          status.innerHTML = "";
          form.reset()
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
      form.addEventListener("submit", handleSubmit);
})(); 