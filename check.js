function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_gzcatwf";
  const templateID = "template_0p4hanq";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Success;  Your Balance Request was sent successfully 💸 Please Check Your Email.")

    })
    .catch(err=>console.log(err));

}