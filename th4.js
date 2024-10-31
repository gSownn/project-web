const click_s = document.querySelectorAll('.click_');

click_s.forEach((click_) => {
  click_.addEventListener('click', (event) => {
    click_s.forEach(i => i.classList.remove('active'));

    click_.classList.add('active');
  });
});


const mainLinks = document.querySelectorAll(".main-link");

mainLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn không cho thẻ <a> chuyển hướng
    const targetId = link.getAttribute("data-target");
    const submenu = document.getElementById(targetId);

    // Ẩn/Hiện các mục con
    if (submenu.style.display === "none" || submenu.style.display === "") {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  });
});


