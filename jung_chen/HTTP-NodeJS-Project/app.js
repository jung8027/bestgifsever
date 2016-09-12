
//Random useless jQuery fading effect

$('img').click(function(){
	$(this).fadeOut("slow");
	$(this).fadeIn("slow");
})

//Search aJax functionality on page 6

$('#search').on('submit', getSearch)

function getSearch(event) {
    event.preventDefault();
    var input = $(this).serializeArray()[0].value
    var searchData = input.split(" ").join("+")

$.ajax({ url: "http://api.giphy.com/v1/gifs/search?q=" +searchData+ "&api_key=dc6zaTOxFJmzC" ,
	success: display})

}

function display (giphyData){
	var gif = giphyData.data[0].images.original.url
	$("img").attr("src", gif)
}