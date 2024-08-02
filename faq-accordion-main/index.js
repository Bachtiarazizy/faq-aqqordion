const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // Cari elemen `.accordion-panel` terdekat dari toggle yang diklik
    const panel = toggle.closest(".accordion-item").querySelector(".accordion-panel");

    // Tambahkan atau hapus kelas `.expanded` pada panel yang ditemukan
    panel.classList.toggle("expanded");

    // Ganti ikon pada tombol toggle
    const icon = toggle.querySelector("img");
    if (icon.getAttribute("src").endsWith("icon-plus.svg")) {
      icon.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});
