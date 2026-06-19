document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const userList = document.getElementById("userList");
      userList.innerHTML = ""; // reset list
      data.forEach((user) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
        userList.appendChild(li);
      });
    })
    .catch((err) => {
      alert("Gagal mengambil data!");
      console.error(err);
    });
});

function klikaku(){
  Swal.fire('', 'Selamat Datang !!', 'success');
}

function unduhPDF() {
    const fileUrl = 'test-blank-pdf.pdf';
    const namaFile = 'Test_Blank_PDF.pdf';
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = namaFile;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
