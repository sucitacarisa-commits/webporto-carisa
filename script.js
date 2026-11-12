// Menambahkan penanda tautan navigasi yang sedang dipilih.
document.addEventListener("DOMContentLoaded", () => {
  const navigationLinks = document.querySelectorAll(".navigation a");

  // Memberi efek fokus ketika pengunjung memilih menu.
  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationLinks.forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });

  // Menampilkan tahun secara otomatis di konsol sebagai contoh JavaScript.
  console.log(`Portofolio Carisa Nur Sucita siap dikunjungi (${new Date().getFullYear()}).`);
});
