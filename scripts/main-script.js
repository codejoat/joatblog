const dateEl = document.getElementById("current-date");
if (dateEl) {
  dateEl.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

/*

let imageIndex = 0;
const fallbackImages = [
  "../imagesbg1.jpg",
  "../imagesbg2.jpg",
  "../imagesbg3.jpg",
  "../imagesbg4.jpg",
  // ...
];

function getImage(post) {
  if(post.img) return post.img;
  const img = fallbackImage[imageIndex % fallbackImages.length];
  imageIndex++;
  return img;
}

<img src="${getImage(post)}" alt="${post.caption || 'Blog image'}">

*/
