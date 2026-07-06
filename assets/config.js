/**
 * =============================================================
 *  CONFIG.JS — ARQUIVO ÚNICO DE CONFIGURAÇÃO DO NEGÓCIO
 * =============================================================
 *  Para reutilizar este template em QUALQUER outro nicho/cliente,
 *  basta editar os valores abaixo. Esse objeto alimenta:
 *   - Links de WhatsApp e telefone em todo o site
 *   - JSON-LD (LocalBusiness Schema) para SEO
 *   - Endereço, mapa e horário de funcionamento na seção de contato
 *   - Rodapé (redes sociais)
 *
 *  Textos de seções (Hero, Serviços, FAQ, Depoimentos) ficam
 *  diretamente no index.html para garantir que o Google indexe
 *  o conteúdo já no HTML estático (melhor prática de SEO).
 *  Ao trocar de nicho, edite também esses textos no HTML —
 *  eles estão claramente demarcados com comentários
 *  "EDITAR PARA NOVO NICHO".
 * =============================================================
 */

const BUSINESS = {
  // Identidade
  name: "Barbearia Elite",
  legalName: "Barbearia Elite Barbearia Ltda.",
  niche: "Barbearia",
  slogan: "Barbearia de alto padrão",
  logoText: "Elite",

  // Localização (Google Maps / Schema.org)
  address: {
    street: "Rua das Palmeiras, 123",
    neighborhood: "Centro",
    city: "Vargem Grande Paulista",
    state: "SP",
    stateFull: "São Paulo",
    zip: "06730-000",
    country: "BR",
  },
  geo: {
    lat: -23.5975,
    lng: -47.0072,
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.902!2d-47.0072!3d-23.5975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzUxLjAiUyA0N8KwMDAnMjYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1690000000000",

  // Contato
  phoneDisplay: "(11) 4444-5555",
  phoneE164: "+551144445555",
  whatsappNumber: "5511999998888",
  whatsappDefaultMessage:
    "Olá! Vim pelo site e gostaria de agendar um horário na Barbearia Elite.",
  email: "contato@barbeariaelite.com.br",

  // Horário de funcionamento (usado no Schema.org e na seção de contato)
  hours: [
    { days: "Segunda a Sexta", time: "09:00 – 20:00" },
    { days: "Sábado", time: "08:00 – 18:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  schemaOpeningHours: [
    "Mo-Fr 09:00-20:00",
    "Sa 08:00-18:00",
  ],

  // Redes sociais
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    tiktok: "https://www.tiktok.com/",
  },

  // SEO / domínio (ajuste ao publicar)
  siteUrl: "https://www.barbeariaelite.com.br",
  priceRange: "R$$",
};

// Preenche automaticamente todos os elementos com atributos data-cfg
document.addEventListener("DOMContentLoaded", () => {
  const waLink = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS.whatsappDefaultMessage
  )}`;
  const telLink = `tel:${BUSINESS.phoneE164}`;
  const mailLink = `mailto:${BUSINESS.email}`;

  document.querySelectorAll("[data-cfg='whatsapp-link']").forEach((el) => {
    el.setAttribute("href", waLink);
  });
  document.querySelectorAll("[data-cfg='tel-link']").forEach((el) => {
    el.setAttribute("href", telLink);
  });
  document.querySelectorAll("[data-cfg='mail-link']").forEach((el) => {
    el.setAttribute("href", mailLink);
  });
  document.querySelectorAll("[data-cfg='phone-text']").forEach((el) => {
    el.textContent = BUSINESS.phoneDisplay;
  });
  document.querySelectorAll("[data-cfg='email-text']").forEach((el) => {
    el.textContent = BUSINESS.email;
  });
  document.querySelectorAll("[data-cfg='address-text']").forEach((el) => {
    el.textContent = `${BUSINESS.address.street} – ${BUSINESS.address.neighborhood}, ${BUSINESS.address.city}/${BUSINESS.address.state}`;
  });
  document.querySelectorAll("[data-cfg='instagram-link']").forEach((el) => {
    el.setAttribute("href", BUSINESS.social.instagram);
  });
  document.querySelectorAll("[data-cfg='facebook-link']").forEach((el) => {
    el.setAttribute("href", BUSINESS.social.facebook);
  });
  document.querySelectorAll("[data-cfg='tiktok-link']").forEach((el) => {
    el.setAttribute("href", BUSINESS.social.tiktok);
  });
  document.querySelectorAll("[data-cfg='maps-embed']").forEach((el) => {
    el.setAttribute("src", BUSINESS.mapsEmbedUrl);
  });

  // Formulário de contato -> monta mensagem e abre no WhatsApp (site é 100% estático, sem backend)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = (data.get("nome") || "").toString().trim();
      const telefone = (data.get("telefone") || "").toString().trim();
      const servico = (data.get("servico") || "").toString().trim();
      const mensagem = (data.get("mensagem") || "").toString().trim();

      const feedback = document.getElementById("form-feedback");
      if (!nome || !telefone) {
        if (feedback) {
          feedback.textContent = "Por favor, preencha ao menos nome e telefone.";
          feedback.className = "form-feedback form-feedback--error";
        }
        return;
      }

      const texto = `Olá! Meu nome é ${nome}.%0ATelefone: ${telefone}%0AServiço de interesse: ${
        servico || "Não informado"
      }%0AMensagem: ${mensagem || "Sem mensagem adicional"}`;

      window.open(`https://wa.me/${BUSINESS.whatsappNumber}?text=${texto}`, "_blank", "noopener,noreferrer");

      if (feedback) {
        feedback.textContent = "Perfeito! Vamos te chamar no WhatsApp agora mesmo.";
        feedback.className = "form-feedback form-feedback--success";
      }
      form.reset();
    });
  }
});
