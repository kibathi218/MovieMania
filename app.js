fetch("people.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

var netflixContainer = document.getElementById("netflixContainer");
var huluContainer = document.getElementById("huluContainer");
var hboMaxContainer = document.getElementById("hboMaxContainer");
var heroContainer = document.getElementById("hero-container");
var div = document.createElement("div");

function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    for (var i = 0; i < data[0].netflix.length; i++) {

      var movieCard = document.createElement("div");
      movieCard.classList.add("movieCard");

      var img = document.createElement("img");
      img.classList.add("movie-img", "netflix");
      img.src = data[0].netflix[i].imgLink;

      var movieTitle = document.createElement("h3");
      movieTitle.classList.add("movieFont")
      movieTitle = data[0].netflix[i].movieTitle;

      var likeButton = document.createElement("button")
      likeButton.classList.add("likeButton")
      likeButton.innerHTML = "👍"
      let likes = document.createElement("div")
      likes.classList.add("hideLikes")
      let totalLikes = 0;
      likes.innerHTML = totalLikes
      let dislikes = document.createElement("div")
      let totalDislikes = 0;
      dislikes.innerHTML = totalDislikes
      var dislikeButton = document.createElement("button")
      dislikeButton.classList.add("dislikeButton")
      dislikeButton.innerHTML = "👎"

      likeButton.addEventListener("click", function() {
        totalLikes += 1
        likes.innerHTML = totalLikes
        // TO LIKE A MOVIE MORE THAN ONCE
        // likes.innerHTML = totalLikes

      })

      dislikeButton.addEventListener("click", function() {
        totalDislikes += 1
        dislikes.innerHTML = totalDislikes


      })

      netflixContainer.append(movieCard);
      movieCard.append(img, movieTitle, likeButton, likes, dislikeButton, dislikes);
    }

    for (var i = 0; i < data[1].hulu.length; i++) {

      var movieCard = document.createElement("div");
      movieCard.classList.add("movieCard");

      var img = document.createElement("img");
      img.classList.add("movie-img", "netflix");
      img.src = data[1].hulu[i].imgLink;
      
      var movieTitle = document.createElement("h3");
      movieTitle.classList.add("movieFont")
      movieTitle = data[1].hulu[i].movieTitle;

      var likeButton = document.createElement("button")
      likeButton.classList.add("likeButton")
      likeButton.innerHTML = "👍"
      let likes = document.createElement("div")
      likes.classList.add("hideLikes")
      let totalLikes = 0;
      likes.innerHTML = totalLikes
      let dislikes = document.createElement("div")
      let totalDislikes = 0;
      dislikes.innerHTML = totalDislikes
      var dislikeButton = document.createElement("button")
      dislikeButton.classList.add("dislikeButton")
      dislikeButton.innerHTML = "👎"

      likeButton.addEventListener("click", function() {
        totalLikes += 1
        likes.innerHTML = totalLikes
        // TO LIKE A MOVIE MORE THAN ONCE
        // likes.innerHTML = totalLikes

      })

      dislikeButton.addEventListener("click", function() {
        totalDislikes += 1
        dislikes.innerHTML = totalDislikes


      })

      huluContainer.append(movieCard);
      movieCard.append(img, movieTitle, likeButton, likes, dislikeButton, dislikes);
    }


    for (var i = 0; i < data[2].hboMax.length; i++) {

      var movieCard = document.createElement("div");
      movieCard.classList.add("movieCard");


      var img = document.createElement("img");
      img.classList.add("movie-img", "netflix");
      img.src = data[2].hboMax[i].imgLink;
      
      var movieTitle = document.createElement("h3");
      movieTitle.classList.add("movieFont")
      movieTitle = data[2].hboMax[i].movieTitle;

      var likeButton = document.createElement("button")
      likeButton.classList.add("likeButton")
      likeButton.innerHTML = "👍"
      let likes = document.createElement("div")
      let totalLikes = 0;
      likes.innerHTML = totalLikes
      let dislikes = document.createElement("div")
      let totalDislikes = 0;
      dislikes.innerHTML = totalDislikes
      var dislikeButton = document.createElement("button")
      dislikeButton.classList.add("dislikeButton")
      dislikeButton.innerHTML = "👎"

      likeButton.addEventListener("click", function() {
        totalLikes += 1
        likes.innerHTML = totalLikes
        // TO LIKE A MOVIE MORE THAN ONCE
        // likes.innerHTML = totalLikes

      })

      dislikeButton.addEventListener("click", function() {
        totalDislikes += 1
        dislikes.innerHTML = totalDislikes


      })

      hboMaxContainer.append(movieCard);
      movieCard.append(img, movieTitle, likeButton, likes, dislikeButton, dislikes);
    }

    return;
  }
}
