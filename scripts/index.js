let userProfile = {
  username: "Glenn Montera",
  jobTitle: "Future Software Dev",
  profilePicture: "./assets/images/man.png",
};

function loadUserProfile() {
  let imagelen = document.querySelectorAll(".profile-card__img__link");
  console.log(imagelen);

  let user = document.querySelector(".nav__username");
  user.innerHTML = userProfile.username;
  // console.log(user);

  let profile = document.querySelector(".profile-card__title");
  profile.innerHTML = userProfile.username + ", " + userProfile.jobTitle;
  // console.log(profile);

  for (let index = 0; index < imagelen.length; index++) {
    imagelen[index].src = userProfile.profilePicture;
  }
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
  newpostsuname.innerHTML = userProfile.username + " Posted";

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

loadUserProfile();
