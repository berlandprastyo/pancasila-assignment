const text = "Pancasila adalah dasar negara serta falsafah negara Republik Indonesia yang terdiri atas lima sila. Nama ini terdiri dari dua kata dari bahasa Sanskerta: पञ्च pañca berarti lima dan शीला śīla berarti prinsip atau asas. Pancasila merupakan rumusan dan pedoman kehidupan berbangsa dan bernegara bagi seluruh rakyat Indonesia. Lima ideologi utama penyusun Pancasila merupakan lima sila Pancasila. Ideologi utama tersebut tercantum pada alinea keempat dalam Pembukaan Undang-Undang Dasar 1945";
const typingElement = document.getElementById("typing");

let index = 0;

function typing() {
    if (index < text.length) {
        typingElement.textContent += text[index];
        index++;

        setTimeout(typing, 30);
    }
}

typing();
// fungsi hide navbar
// membaca posisi scroll sekarang lalu dikurangi dengan posisi scroll sebelumnya
const header = document.querySelector("header");

let lastScroll = 0;
const threshold = 10;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;
    let difference = currentScroll - lastScroll;

    if (currentScroll <= 0) {
        header.classList.remove("hide");
        lastScroll = currentScroll;
        return;
    } 
    if(difference > threshold) {
        header.classList.add("hide");
        lastScroll = currentScroll;
    } else if (difference < -threshold) {
        header.classList.remove("hide");
        lastScroll = currentScroll;
    }

});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
             entry.target.classList.remove("active");
        }
    });
});

const elements = document.querySelectorAll(".reveal");

elements.forEach((element) => {
    observer.observe(element);
});