const qrInput=document.getElementById("qr-input")

const qrButton=document.getElementById("qr-button")

const qrImg=document.getElementById("qr-img")


qrButton.addEventListener('click', () => {
         const inputValue=qrInput.value;
       
         if(inputValue===''){
            alert('Please enter a valid URL');
            return;
         }
         else{
            qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
            qrImg.alt=`QR code for ${inputValue}`;
         }

});
