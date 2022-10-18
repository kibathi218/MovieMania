var container = document.getElementById("container");
var movieCardContainer = document.createElement("div");

$.getJSON("data.json", function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var platformHeaderContainer = document.createElement("div");
    platformHeaderContainer.classList.add("platform-header");

    var platformHeader = document.createElement("h2");
    platformHeader.classList.add("movie-platforms-btn");
    platformHeader.innerHTML = data[i].platformName;

    platformHeaderContainer.append(platformHeader);
    container.append(platformHeaderContainer);

    var platformContainer = document.createElement("div");
    platformContainer.classList.add("platformContainer");
    container.append(platformContainer);

    for (var j = 0; j < data[i].platformMovies.length; j++) {
      console.log(data[i].platformMovies[j].movieTitle);

      var likesContainer = document.createElement("div");
      likesContainer.classList.add("likesContainer");

      var dislikesContainer = document.createElement("div");
      dislikesContainer.classList.add("dislikesContainer");

      var movieCard = document.createElement("div");
      movieCard.classList.add("movieCard");

      var movieTitle = document.createElement("h4");
      movieTitle.innerHTML = data[i].platformMovies[j].movieTitle;
      var movieImg = document.createElement("img");
      movieImg.classList.add("movie-img", "netflix");
      movieImg.src = data[i].platformMovies[j].imgLink;

      var likeButton = document.createElement("button");
      likeButton.classList.add("likeButton");
      likeButton.innerHTML = "👍";
      let likes = document.createElement("div");
      likes.classList.add("hideLikes");
      let totalLikes = 0;
      likes.innerHTML = totalLikes;
      let dislikes = document.createElement("div");
      let totalDislikes = 0;
      dislikes.innerHTML = totalDislikes;
      var dislikeButton = document.createElement("button");
      dislikeButton.classList.add("dislikeButton");
      dislikeButton.innerHTML = "👎";

      likeButton.addEventListener("click", function () {
        totalLikes += 1;
        likes.innerHTML = totalLikes;
      });

      dislikeButton.addEventListener("click", function () {
        totalDislikes += 1;
        dislikes.innerHTML = totalDislikes;
      });

      likesContainer.append(likeButton, likes);

      dislikesContainer.append(dislikeButton, dislikes);
      movieCard.append(movieImg, movieTitle, likesContainer, dislikesContainer);
      platformContainer.append(movieCard);
    }
  }
});
