let uname = "Glenn Montera";
let job = "Future Software Dev";
let picpath = "./assets/images/man.png";
let profilepic = document.querySelectorAll("img");
console.log(profilepic);

let user = document.querySelector(".nav__username");
user.innerHTML = uname;
// console.log(user);

let profile = document.querySelector(".profile-card__title");
profile.innerHTML = uname + ", " + job;
// console.log(profile);

for (let index = 0; (index = profilepic.length); index++) {
  profilepic[index + 1].src = "./assets/images/man.png";
}
