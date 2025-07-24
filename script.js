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
