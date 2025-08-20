const url = document.querySelector(`#url`);
const btn = document.querySelector(`#btn > input`)
const qrCode = document.querySelector(`#qr-code`)
const qrCodeImg = document.querySelector(`#qr-code img`)
console.log(qrCode)

btn.addEventListener("click", (e)=>{
    e.preventDefault();
  

    gerarQrCode();
    
})

function gerarQrCode (){
    if(!url.value) return;
    
    qrCode.style.display = `block`
    qrCodeImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${url.value}`

    console.log(!url)

}

url.addEventListener('keyup', ()=>{
    if(!url.value){
        qrCode.style.display = `none`
    }
})