window.onload = function () {
  var gameplay = 0;
  var graphics = 0;
  var audio = 0;
  var performance = 0;
  var price = 0;

  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((rating) => {
    const rating_items = document.querySelectorAll(
      "#rating-item-" + rating.getAttribute("data-rate")
    );
    rating.onclick = (e) => {
      if (!e.target.classList.contains("rating-text")) {
        if (!e.target.classList.contains("rating-item")) {
          if (!e.target.classList.contains("rating")) {
            if (!e.target.classList.contains("rating-active")) {
              rate = e.target.getAttribute("data-rate");

              for (var item = 0; item < rate; item++) {
                rating_items[item].classList.add("ph-fill");
                rating_items[item].classList.remove("ph-light");
              }

              for (var item = 4; item >= rate; item--) {
                rating_items[item].classList.remove("ph-fill");
                rating_items[item].classList.add("ph-light");
              }

              if (rating.getAttribute("data-rate") == "gameplay") {
                gameplay = rate;
              } else if (rating.getAttribute("data-rate") == "graphics") {
                graphics = rate;
              } else if (rating.getAttribute("data-rate") == "audio") {
                audio = rate;
              } else if (rating.getAttribute("data-rate") == "performance") {
                performance = rate;
              } else if (rating.getAttribute("data-rate") == "price") {
                price = rate;
              }
            }
          }
        }
      }
    };
  });

  const button = document.querySelector("#copyRatingButton");
  button.onclick = (e) => {
    var a = [gameplay, graphics, audio, performance, price];
    var average_rating = eval(a.join("+")) / a.length;
    var rateText = document.getElementById("text").value;

    if (rateText == "") {
      var template =
        "♦ GAMEPLAY → " +
        gameplay +
        "/5" +
        "\n" +
        "♦ GRAPHICS → " +
        graphics +
        "/5" +
        "\n" +
        "♦ AUDIO → " +
        audio +
        "/5" +
        "\n" +
        "♦ PERFORMANCE → " +
        performance +
        "/5" +
        "\n" +
        "♦ PRICE → " +
        price +
        "/5" +
        "\n\n" +
        "Overall: " +
        average_rating +
        "/5" +
        "\n\n" +
        "Made with Reviewificator 2.0  ►  https://reviewificator.skre.dev";
    } else {
      var template =
        rateText +
        "\n\n" +
        "♦ GAMEPLAY → " +
        gameplay +
        "/5" +
        "\n" +
        "♦ GRAPHICS → " +
        graphics +
        "/5" +
        "\n" +
        "♦ AUDIO → " +
        audio +
        "/5" +
        "\n" +
        "♦ PERFORMANCE → " +
        performance +
        "/5" +
        "\n" +
        "♦ PRICE → " +
        price +
        "/5" +
        "\n\n" +
        "Overall: " +
        average_rating +
        "/5" +
        "\n\n" +
        "Made with Reviewificator 2.0  ►  https://reviewificator.skre.dev";
    }

    console.log(template);
    navigator.clipboard.writeText(template);

    button.innerHTML = "Copied successfully";
    setTimeout(function () {
      button.innerHTML = '<i class="ph-fill ph-copy"></i> Copy your rating';
    }, 2000);
  };
};
