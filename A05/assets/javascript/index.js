const dts_h2 = document.querySelector(".dts h2");
const dts_p = document.querySelector(".dts p");
const dts_img = document.querySelector(".dts img");
const dts_tombol = document.querySelector(".dts .tombol");

const tujuan_h2 = document.querySelector(".tujuan h2");
const tujuan_p = document.querySelector(".tujuan p");
const tujuan_img = document.querySelector(".tujuan img");

const heading_h2 = document.querySelector(".heading h2");
const cardlist = document.querySelectorAll(".card-list");

window.addEventListener("scroll", () => {
  if (screen.width > 1000) {
    if (window.scrollY > 240) {
      dts_h2.style.animationName = "dari-atas";
      dts_h2.style.animationDuration = "0.7s";
      dts_h2.style.animationFillMode = "both";

      dts_p.style.animationName = "dari-kiri";
      dts_p.style.animationDuration = "0.8s";
      dts_p.style.animationFillMode = "both";

      dts_img.style.animationName = "dari-kanan";
      dts_img.style.animationDuration = "0.8s";
      dts_img.style.animationFillMode = "both";
      dts_img.style.animationDelay = "0.2s";
    }

    if (window.scrollY > 849) {
      tujuan_h2.style.animationName = "dari-atas";
      tujuan_h2.style.animationDuration = "0.7s";
      tujuan_h2.style.animationFillMode = "both";

      tujuan_p.style.animationName = "dari-kanan";
      tujuan_p.style.animationDuration = "0.8s";
      tujuan_p.style.animationFillMode = "both";

      tujuan_img.style.animationName = "dari-kiri";
      tujuan_img.style.animationDuration = "0.8s";
      tujuan_img.style.animationFillMode = "both";
      tujuan_img.style.animationDelay = "0.2s";
    }

    if (window.scrollY > 1400) {
      heading_h2.style.animationName = "dari-atas";
      heading_h2.style.animationDuration = "0.7s";
      heading_h2.style.animationFillMode = "both";

      for (let i = 0; i < cardlist.length; i++) {
        cardlist[i].style.animationName = "dari-bawah";
        cardlist[i].style.animationDuration = "0.7s";
        cardlist[i].style.animationDelay = `0.${i * 2}s`;
        cardlist[i].style.animationFillMode = "both";
      }
    }
  } else if (screen.width <= 1000) {
    dts_tombol.style.opacity = "0";

    dts_img.style.opacity = "1";
    tujuan_img.style.opacity = "1";

    if (window.scrollY > 250) {
      dts_h2.style.animationName = "dari-atas";
      dts_h2.style.animationDuration = "0.7s";
      dts_h2.style.animationFillMode = "both";

      dts_p.style.animationName = "dari-kiri";
      dts_p.style.animationDuration = "0.8s";
      dts_p.style.animationFillMode = "both";

      dts_tombol.style.animationName = "dari-kanan";
      dts_tombol.style.animationDuration = "0.8s";
      dts_tombol.style.animationFillMode = "both";
      dts_tombol.style.animationDelay = "0.2s";
    }

    if (window.scrollY > 1100) {
      tujuan_h2.style.animationName = "dari-atas";
      tujuan_h2.style.animationDuration = "0.7s";
      tujuan_h2.style.animationFillMode = "both";

      tujuan_p.style.animationName = "dari-kanan";
      tujuan_p.style.animationDuration = "0.8s";
      tujuan_p.style.animationFillMode = "both";
    }

    if (window.scrollY > 1936) {
      heading_h2.style.animationName = "dari-atas";
      heading_h2.style.animationDuration = "0.7s";
      heading_h2.style.animationFillMode = "both";

      for (let i = 0; i < cardlist.length; i++) {
        if (window.scrollY > 1936 + i * 400) {
          cardlist[i].style.animationName = "dari-bawah";
          cardlist[i].style.animationDuration = "0.7s";
          cardlist[i].style.animationFillMode = "both";
        }
      }
    }
  }
});
