let popup1 = document.querySelector(".popup");
let btn = document.querySelector(".btn");
let show = true;
function popup() {
  if (show) {
    btn.style.display = "none";
    popup1.style.display = "flex";

    show = false;
  } else {
    btn.style.display = "block";
    popup1.style.display = "none";

    show = true;
  }
}

// let cancel1 = document.querySelector(".btn1");

let show1 = true;
function cancle() {
  if (show1) {
    popup1.style.display = "none";
    btn.style.display = "block";
    btn.innerHTML = "Click";
    show1 = false;
  } else {
    popup1.style.display = "flex";
    btn.style.display = "none";
    btn.innerHTML = "Click";
    show1 = true;
  }
}

let show2 = true;
function remove() {
  if (show2) {
    popup1.style.display = "none";
    btn.style.display = "block";
    btn.innerHTML = "Account Deleted";
    btn.style.width = "140px";
    alert("Your Account Deleted Successfully");
    show2 = false;
  } else {
    popup1.style.display = "flex";
    btn.style.display = "none";

    show2 = true;
  }
}
