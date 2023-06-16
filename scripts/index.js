let uname = "Glenn Montera";
let job = "Future Software Dev";
let picpath = "./assets/images/man.png";
let profilepic = document.querySelectorAll("img");

let user = document.querySelector(".nav__username");
user.innerHTML = uname;
// console.log(user);

let profile = document.querySelector(".profile-card__title");
profile.innerHTML = uname + ", " + job;
// console.log(profile);

for (let index = 0; index < profilepic.length - 1; index++) {
  profilepic[index + 1].src = "./assets/images/man.png";
}

// Add Comment function

const post = document.querySelector(".post-button");

post.onclick = function addComment() {
  let commentpost = document.querySelector(".posts");
  const posttext = document.querySelector(".new__input");

  // Creating post__item div
  let newpostsitem = document.createElement("div");
  newpostsitem.classList.add("posts__item");

  let newpostsuname = document.createElement("div");
  newpostsuname.classList.add("posts__username");
  newpostsuname.innerHTML = uname + " Posted";

  let newpostcontent = document.createElement("div");
  newpostcontent.classList.add("posts__content");

  let newcomment = document.createElement("p");
  newcomment.innerHTML = posttext.value;
  console.log(posttext.value);

  commentpost.prepend(newpostsitem);
  newpostsitem.appendChild(newpostsuname);
  newpostsitem.appendChild(newpostcontent);
  newpostcontent.appendChild(newcomment);
};
