"use strict";

function hubspotForm(){
    $("#contactForm").submit(event=>{
        event.preventDefault();
        $("#formResponse").removeClass("hidden").text("Form Submitted")

    })
    

}

function createApp(){
    hubspotForm();
}

$(createApp);