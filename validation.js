document.addEventListener("DOMContentLoaded", function() {
  
    let inputs = document.querySelectorAll("input");
    let fnameInput = document.getElementById("fname");
    let lnameInput = document.getElementById("lname");
    let addressInput = document.getElementById("address");
    let cityInput = document.getElementById("city");
    let stateInput = document.getElementById("state");
    let zipInput = document.getElementById("zip");
    let phoneInput = document.getElementById("phone");
    let emailInput = document.getElementById("email");
    let radioInput = document.getElementsByClassName("radio");

    let  form = document.getElementById("myForm");
    for (let i = 0; i < inputs.length; ++i) {
       
         inputs[i].addEventListener("change", function(ev){
           let el = ev.currentTarget;
           el.classList.add('was-validated');
           console.log(`element ${el.name} was changed!`);
         });
      
     }
     
    fnameInput.addEventListener("input", ev=>{validatefName(ev.currentTarget)});
    lnameInput.addEventListener("input", ev=>{validatelName(ev.currentTarget)});
    addressInput.addEventListener("input", ev=>{validateAddress(ev.currentTarget)});
    cityInput.addEventListener("input", ev=>{validateCity(ev.currentTarget)});
    stateInput.addEventListener("input", ev=>{validateState(ev.currentTarget)});
    zipInput.addEventListener("input", ev=>{validateZip(ev.currentTarget)});
    phoneInput.addEventListener("input", ev=>{validatePhone(ev.currentTarget)});
    emailInput.addEventListener("input", ev=>{validateEmail(ev.currentTarget)});

    
    for(let i = 0; i < radioInput.length; i++){
        radioInput[i].addEventListener("input", ev=>{validateSelection(ev.currentTarget)});
    }

    
         
   form.addEventListener("submit", function(ev){
     console.log("in submit");
 
     ev.preventDefault();  //for now so we don't redirect
     ev.stopPropagation();
 
     //Call custom validation here
     validateState(stateInput);
     validatefName(fnameInput);
     validatelName(lnameInput);
     validateAddress(addressInput);
     validateCity(cityInput);
     validateZip(zipInput);
     validatePhone(phoneInput);
     validateEmail(emailInput);
     validateSelection();
 
     //DOM checkValidity function tells you current status of form according to html5
     //'this' keyword will refer to the form since 'this' always refers to element that captured the event
     let formValid = this.checkValidity();
     
     if (!formValid) {
       console.log("form not valid");
       ev.preventDefault();
       ev.stopPropagation();
     }  
     else{
       console.log("form is valid!!");
       //if you don't preventDefault and stopPropagation
       //the default form action would be to redirect to the url in the 'action' attribute of the form
       //https://wp.zybooks.com/form-viewer.php
     } 
     form.classList.add('was-validated');
   });
       
       
 });

 function validateState(stateInput){
    //This should be called from the change and submit events
    let stateAbreviations = ["AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    stateInput.value = stateInput.value.toUpperCase();

    for(let i = 0; i < stateAbreviations.length; i++){
        if(stateInput.value != stateAbreviations[i]){
            stateInput.setCustomValidity('Must be a valid U.S. state.');
            document.getElementById("stateerror").innerHTML = "- Please enter a valid U.S. state";
            //console.log("must be u.s. state!");
        }
        else{
            stateInput.setCustomValidity('');
            document.getElementById("stateerror").innerHTML = "";
            //console.log('');
            break;
        }
    }
 }

 function validatefName(fnameInput){
    if(fnameInput.value === ""){
        fnameInput.setCustomValidity('Must enter first name.');
        document.getElementById("fnameerror").innerHTML = "- Please enter your first name";
    }
    else{
        fnameInput.setCustomValidity('');
        document.getElementById("fnameerror").innerHTML = "";
    }
 }

 function validatelName(lnameInput){
    if(lnameInput.value === ""){
        lnameInput.setCustomValidity('Must enter last name.');
        document.getElementById("lnameerror").innerHTML = "- Please enter your last name";
    }
    else{
        lnameInput.setCustomValidity('');
        document.getElementById("lnameerror").innerHTML = "";
    }
 }

 
 function validateAddress(addressInput){
    if(addressInput.value === ""){
        addressInput.setCustomValidity('Must enter address.');
        document.getElementById("addresserror").innerHTML = "- Please enter your address";
    }
    else{
        addressInput.setCustomValidity('');
        document.getElementById("addresserror").innerHTML = "";
    }
 }

 function validateCity(cityInput){
    if(cityInput.value === ""){
        cityInput.setCustomValidity('Must enter city.');
        document.getElementById("cityerror").innerHTML = "- Please enter your city";
    }
    else{
        cityInput.setCustomValidity('');
        document.getElementById("cityerror").innerHTML = "";
    }
 }

 function validateZip(zipInput){
    zipInput.addEventListener('invalid', function(event){
        if ( ! event.target.validity.valid ) {
            document.getElementById("ziperror").innerHTML = "- Please enter a valid zip code";
        }
        else{
            document.getElementById("ziperror").innerHTML = "";
        }
    });

    zipInput.addEventListener('input', function(event){
        if(document.getElementById("ziperror").innerHTML == "- Please enter a valid zip code"){
            document.getElementById("ziperror").innerHTML = "";
        }
        else{
            document.getElementById("ziperror").innerHTML = "- Please enter a valid zip code";
        }
    });
    
 }

 function validatePhone(phoneInput){
    phoneInput.addEventListener('invalid', function(event){
        if ( ! event.target.validity.valid ) {
            document.getElementById("phoneerror").innerHTML = "- Please enter a valid phone number";
        }
        else{
            document.getElementById("phoneerror").innerHTML = "";
        }
    });

    phoneInput.addEventListener('input', function(event){
        if(document.getElementById("phoneerror").innerHTML == "- Please enter a valid phone number"){
            document.getElementById("phoneerror").innerHTML = "";
        }
    });
 }

 function validateEmail(emailInput){
    emailInput.addEventListener('invalid', function(event){
        if ( ! event.target.validity.valid ) {
            document.getElementById("emailerror").innerHTML = "- Please enter a valid email address";
        }
        else{
            document.getElementById("emailerror").innerHTML = "";
        }
    });

    emailInput.addEventListener('input', function(event){
        if(document.getElementById("emailerror").innerHTML == "- Please enter a valid email address"){
            document.getElementById("emailerror").innerHTML = "";
        }
    });
 }

 function validateSelection(){
    var radios = document.getElementsByClassName("radio");

    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            document.getElementById("radioerror").innerHTML = "";
            break;
        }
        else{
            document.getElementById("radioerror").innerHTML = "- Please select one of the following";
        }
    }
 }
 