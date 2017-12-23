$(document).ready(function() {

    function randomContents(){
      $.getJSON("json/color.json", function(color){
        var nOfColors = Object.keys(color).length;
        var id = Math.floor(Math.random() * nOfColors);
        console.log(color[id]);
        $(".content-color").css("color", color[id]);
        $(".background").css("background-color", color[id]);
      });
      $.getJSON("json/ChineseSaying.json", function(json){
        var nOfSayings = Object.keys(json).length;
        //console.log(Object.keys(json).length);
        var id = Math.floor(Math.random() * nOfSayings);
        //console.log(id);
        //console.log(json[id]["author"]);
        $("#quote").hide();
        $("#quoteauthor").hide();
        $("#quote").html(String(json[id]["saying"])+"<br>"+json[id]["chinese"]+"")

        $("#quoteauthor").html("- "+json[id]["author"])
        $("#quote,#quoteauthor").delay(800).fadeIn(1000);

        var twitterSocialQuote = "http://twitter.com/intent/tweet?text=";
        twitterSocialQuote =  twitterSocialQuote + "\""+encodeURIComponent(json[id]["saying"]) + "-" + encodeURIComponent(json[id]["author"]) + "\"&hashtags=quotes";
        //console.log(twitterSocialQuote);
        $("#twitter").attr("href", twitterSocialQuote);

        var tumblrSocalQuote = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + encodeURIComponent(json[id]["author"]) +"&content="+encodeURIComponent(json[id]["saying"])+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        $("#tumblr").attr("href", tumblrSocalQuote)
        });
    }

    randomContents();


    $("#newquote").on("click", function(){
      randomContents();
    });
  });
