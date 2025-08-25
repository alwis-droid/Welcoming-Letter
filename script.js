AOS.init();

function enterSite() {
  const nama = document.getElementById("nama").value;
  const divisi = document.getElementById("divisi").value;

  if(nama && divisi) {
    document.getElementById("welcome-form").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("personal-nama").innerText = "Hai, " + nama + "!";
    document.getElementById("personal-divisi").innerText = "Divisi: " + divisi;
  } else {
    alert("Harap isi nama lengkap dan divisi!");
  }
}
