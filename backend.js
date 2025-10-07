
if($("button").click(function(){
    var text = $("#text").val();
    const qr = $("#qr");
    qr.innerHtml = "";
    new QRCode(qrdiv, text || "Bharat!");
    alert("qr code generated sucesfully");
  
}));