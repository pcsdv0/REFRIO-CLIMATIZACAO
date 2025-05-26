const hamburger = document.querySelector(".hamburger"),
    navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", (() => navMenu.classList.toggle("active"))), document.querySelectorAll('a[href^="#"]').forEach((e => {
    e.addEventListener("click", (t => {
        t.preventDefault();
        const a = document.querySelector(e.getAttribute("href"));
        a && a.scrollIntoView({
            behavior: "smooth"
        })
    }))
}));
const serviceData = {
        frigorificas: {
            title: "Câmaras Frigoríficas Industriais",
            desc: "Na Refrio Climatização desenvolvemos projetos de câmaras frigoríficas sob medida, integrando painéis isotérmicos de alta performance, portas herméticas e sistemas de refrigeração modular. Cada solução é dimensionada conforme a carga térmica específica de seus produtos, garantindo controle milimétrico de temperatura e umidade para máxima conservação.",
            images: ["imagens/frigorifica1.webp", "imagens/frigorifica2.webp", "imagens/frigorifica3.webp"]
        },
        ar: {
            title: "Sistemas de Ar-Condicionado",
            desc: "Oferecemos consultoria completa em climatização, desde o levantamento de carga térmica (BTU) até a instalação de sistemas split, multi-split, VRF e centrais. Trabalhamos com tubulações frigorígenas, instalações elétricas certificadas e testes de performance, assegurando eficiência energética e conforto ambiental.",
            images: ["imagens/ar1.webp", "imagens/ar2.webp", "imagens/ar3.webp"]
        },
        automacao: {
            title: "Automação e IoT para Climatização",
            desc: "Integramos suas instalações a plataformas de automação (CLP, SCADA) e IoT, permitindo monitoramento em tempo real de temperatura, umidade e consumo energético. Dashboards customizados, alertas inteligentes e rotinas automáticas garantem operação otimizada e redução de custos.",
            images: ["imagens/automacao1.webp", "imagens/automacao2.webp", "imagens/automacao3.webp"]
        },
        ventilacao: {
            title: "Projetos de Ventilação Industrial",
            desc: "Desenvolvemos sistemas de ventilação mecânica e natural para indústrias, cozinhas profissionais e ambientes comerciais, controlando vazões e pressões de ar conforme normas NR-15 e NR-17. Garantimos renovação contínua do ar, extração de contaminantes e conforto térmico.",
            images: ["imagens/ventilacao1.webp", "imagens/ventilacao2.webp"]
        }
    },
    detailBox = document.getElementById("service-detail"),
    cards = document.querySelectorAll(".services .card[data-service]"),
    closeBtn = document.getElementById("close-detail");

function openDetail(e) {
    const t = serviceData[e];
    detailBox.querySelector("#detail-title").textContent = t.title;
    const a = detailBox.querySelector("#detail-images");
    a.innerHTML = "", detailBox.querySelector("#detail-desc").textContent = t.desc, t.images.forEach((e => {
        const o = document.createElement("img");
        o.src = e, o.alt = t.title, o.style.width = "170px", o.style.height = "150px", o.style.objectFit = "cover", o.addEventListener("click", (() => {
            const a = document.createElement("div");
            a.classList.add("img-overlay");
            const o = document.createElement("img");
            o.src = e, o.alt = t.title, o.style.maxWidth = "90%", o.style.maxHeight = "90%", o.style.objectFit = "contain", a.appendChild(o), document.body.appendChild(a), a.addEventListener("click", (() => document.body.removeChild(a)))
        })), a.appendChild(o)
    })), detailBox.classList.remove("hidden")
}
cards.forEach((e => {
    const t = e.dataset.service;
    e.addEventListener("click", (() => openDetail(t)))
})), closeBtn.addEventListener("click", (() => detailBox.classList.add("hidden"))), window.addEventListener("click", (e => {
    e.target === detailBox && detailBox.classList.add("hidden")
}));
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", (() => backTop.style.display = window.scrollY > 300 ? "block" : "none")), backTop.addEventListener("click", (() => window.scrollTo({
    top: 0,
    behavior: "smooth"
})));
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e => {
        e.preventDefault(), alert("Obrigado pelo contato! Em breve retornaremos."), form.reset()
    })),
    function() {
        const e = document.querySelector(".slides"),
            t = document.querySelectorAll(".slide").length;
        let a = 0;
        setInterval((() => {
            a++, e.style.transition = "transform 1s ease", e.style.transform = `translateX(-${100*a}%)`, a === t - 1 && setTimeout((() => {
                e.style.transition = "none", e.style.transform = "translateX(0)", a = 0
            }), 1e3)
        }), 4e3)
    }();
const callBtn = document.getElementById("call-cta"),
    phone = "+558132249505",
    toast = document.createElement("div");
toast.id = "call-toast", toast.textContent = "Número copiado! Ligue do seu telefone.", document.body.appendChild(toast), callBtn.addEventListener("click", (e => {
    e.preventDefault(), /Mobi|Android|iPhone/i.test(navigator.userAgent) ? window.location.href = `tel:${phone}` : navigator.clipboard.writeText(phone).then((() => {
        toast.classList.add("show"), setTimeout((() => toast.classList.remove("show")), 2e3)
    })).catch((() => alert(`Telefone: ${phone}`)))
})), (() => {
    const e = document.querySelector(".carrossel"),
        t = document.querySelector(".nav.left"),
        a = document.querySelector(".nav.right");
    if (!e || !t || !a) return void console.warn("Carrossel ou botões não encontrados");
    e.style.overflowX = "auto", e.style.scrollBehavior = "smooth", e.style.display = "flex", e.style.flexWrap = "nowrap";
    const o = e.querySelector(".card"),
        s = parseInt(getComputedStyle(e).gap, 10) || 20,
        i = o.offsetWidth + s;
    console.log("CARROSSEL", {
        step: i,
        scrollWidth: e.scrollWidth,
        clientWidth: e.clientWidth
    }), a.addEventListener("click", (() => {
        e.scrollBy({
            left: i,
            behavior: "smooth"
        })
    })), t.addEventListener("click", (() => {
        e.scrollBy({
            left: -i,
            behavior: "smooth"
        })
    }))
})();