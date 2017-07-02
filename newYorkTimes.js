
var article;

$("#searchButton").on("click", function(event) {

  event.preventDefault();

  var search = $("#searchInput").val();

  var number = $("#numberInput").val();

  var start = $("#startYearInput").val() + "0101";

  var end = $("#endYearInput").val() + "1231";

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

      queryURL += '?' + $.param({

      'api-key': "843fe496fe8e4b2d9f82789a221dc3e6",

      'q': search,

      'begin_date': start,

      'end_date': end

    }); // closes the query URL
console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      var results = response.response.docs;

      for (var i = 0; i < results.length; i++) {

        article = $("<div> <h3> Headline: " + results[i].headline.main + "</h3> <br> <p>" + results[i].byline.original + "</p> <p> Section: " + results[i].section_name + "</p> <p> Pub Date: " + results[i].pub_date + "</p> <br> <a href = '" + results[i].web_url + "'> Link to article </a> ");

        $("#topArticles").append(article);

        $("#topArticles").show();

      } //closes forloop of articles

    }); //closes ajax


}); // closes the on click search button
