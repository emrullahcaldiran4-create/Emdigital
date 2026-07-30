function showMessage(text) {

    const old = document.querySelector(".toast");

    if (old) old.remove();

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = text;

    toast.style.position = "fixed";
    toast.style.left = "50%";
    toast.style.bottom = "30px";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#d4af37";
    toast.style.color = "#111";
    toast.style.padding = "14px 24px";
    toast.style.borderRadius = "12px";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = ".4s";

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 1800);

}



function copyIBAN() {

    const iban = document.getElementById("iban").value;

    navigator.clipboard.writeText(iban);

    showMessage("✅ IBAN kopyalandı");

}



function copyAciklama() {

    const aciklama = document.getElementById("aciklama").value;

    navigator.clipboard.writeText(aciklama);

    showMessage("✅ Açıklama kopyalandı");

}