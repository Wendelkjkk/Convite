function confirmarPresenca() {
  const numeroWhatsApp = "5582988642056"; // <-- troque pelo seu número com DDI e DDD
  const mensagem = "Olá! Estou confirmando presença no chá de fraldas do Lyam 👶💙";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}