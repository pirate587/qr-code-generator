let qr;
function makeQR(){
    var text = $("#text").val();
    const qrDiv = document.getElementById("qrdiv");
    if(qr){
        qr.clear();
        qrDiv.innerHTML = "";
    }
    qr = new QRCode(qrDiv, {text:text, width:200,height:200});
    alert("qr code generated sucesfully");
  

}));
