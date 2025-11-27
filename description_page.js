/*Share Button*/
fetch("share_description.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("share-popup").innerHTML = html;

    const openSharePopup = document.getElementById("share-button");
    const closeSharePopup = document.querySelector(".close-button");
    const sharePopup = document.getElementById("sharePopup");

    function openPopup() {
      sharePopup.classList.add("active");
    }

    function closePopup() {
      sharePopup.classList.remove("active");
    }

    openSharePopup.addEventListener("click", openPopup);

    closeSharePopup.addEventListener("click", closePopup);

    window.addEventListener("click", (event) => {
      if (event.target === sharePopup) {
        closePopup();
      }
    });
  });

/*Save Button*/
const saveButton = document.getElementById("saveButton");
const saveImage = document.getElementById("saveImage");

function toggleSave() {
  const currentSrc = saveImage.getAttribute("src");

  if (currentSrc.includes("icon_save-nobg-on.svg")) {
    saveImage.setAttribute("src", "/website_materials/icon_save-nobg.svg");
  } else {
    saveImage.setAttribute("src", "/website_materials/icon_save-nobg-on.svg");
  }
}

saveButton.addEventListener("click", toggleSave);

/*Reviews Popup*/
fetch("reviews_popup.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("reviews-popup").innerHTML = html;

    const openReviewsPopup = document.getElementById("see-more-button");
    const closeReviewsPopup = document.querySelector(".close-button");
    const reviewsPopup = document.getElementById("reviewsPopup");

    function openPopup() {
      reviewsPopup.classList.add("active");
    }

    function closePopup() {
      reviewsPopup.classList.remove("active");
    }

    openReviewsPopup.addEventListener("click", openPopup);

    closeReviewsPopup.addEventListener("click", closePopup);

    window.addEventListener("click", (event) => {
      if (event.target === reviewsPopup) {
        closePopup();
      }
    });
  });

/*Like Button*/
const likeButton = document.getElementById("likeButton");
const likeImage = document.getElementById("likeImage");

function toggleLike() {
  const likeActive = likeImage.getAttribute("src").includes("icon_like-on.svg");

  if (!likeActive) {
    likeImage.setAttribute("src", "/website_materials/icon_like-on.svg");

    dislikeImage.setAttribute("src", "/website_materials/icon_dislike.svg");
  } else {
    likeImage.setAttribute("src", "/website_materials/icon_like.svg");
  }
}
likeButton.addEventListener("click", toggleLike);

/*Dislike Button*/
const dislikeButton = document.getElementById("dislikeButton");
const dislikeImage = document.getElementById("dislikeImage");

function toggleDislike() {
  const dislikeActive = dislikeImage
    .getAttribute("src")
    .includes("icon_dislike-on.svg");

  if (!dislikeActive) {
    dislikeImage.setAttribute("src", "/website_materials/icon_dislike-on.svg");

    likeImage.setAttribute("src", "/website_materials/icon_like.svg");
  } else {
    dislikeImage.setAttribute("src", "/website_materials/icon_dislike.svg");
  }
}
dislikeButton.addEventListener("click", toggleDislike);

/*Map*/
const map = L.map("map", {
  scrollWheelZoom: false,
  dragging: true,
  touchZoom: true,
  zoomControl: false,
}).setView([-7.7956, 110.3695], 13);
const customMarker = L.icon({
  iconUrl: "/website_materials/icon_map-pin.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -28],
});

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution: "",
  }
).addTo(map);

L.marker([-7.7956, 110.3695], { icon: customMarker }).addTo(map);

document.getElementById("zoom-in").onclick = () => map.zoomIn();
document.getElementById("zoom-out").onclick = () => map.zoomOut();
