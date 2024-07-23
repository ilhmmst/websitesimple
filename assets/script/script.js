function sendMessageToWhatsapp() {
    // console.log(nama.value)
    // console.log(pesan.value)
    const urlToWhatsApp = `https://wa.me/?text=Hallo, 
    Nama Saya ${nama.value}, ${pesan.value} `;
    window.open(urlToWhatsApp, "_blank");
}