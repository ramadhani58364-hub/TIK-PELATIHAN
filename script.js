// 1. pilih tombol berdasarkan ID-nya
const tombolsapa = document.getElementById('sapaButton');
// 2. Tambahkan 'event listener' untuk aksi 'clikck'
tombolsapa.addEventLIstener('click', function() {
  // 3. jalankan kode ini ketika tombol di-klik
  alert('halo! Terima kasih sudah berkunjung!');
});
