function enviar() {
  var nome= document.getElementById("in_nome").value;
  console.log(`${nome}`);
  if(nome==""){
    alert("por favor, preencha seu nome e quantas presenças");
  }
  else{
    Email.send({
      Host: "smtp.gmail.com",
      Username: "semsocorro@gmail.com",
      Password: "sem@socorro99",
      To: 'doxrigor@gmail.com',
      From: "festa1ano@gmail.com",
      Subject: `${nome} confirmou presença`,
      Body: `${nome} Confirmaram presenças`,
    })
      .then(function (message) {
        document.getElementById("in_nome").value="";
      alert("confirmado")
      });
  }
}


function sendEmail(a,b) {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "semsocorro@gmail.com",
		Password: "sem@socorro99",
		To: 'doxrigor@gmail.com',
		From: "festa1ano@gmail.com",
		Subject: `${a} confirmou presença`,
		Body: `${a} Confirmou ${b} presenças`,
	})
		.then(function (message) {
		alert("mail sent successfully")
		});
	}
