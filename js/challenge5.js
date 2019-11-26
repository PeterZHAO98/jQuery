var $imgs = $("img");
var msg = "Hover over an image below.";
var $image= $("#image");

$imgs.each(function () {

	$(this).on("mouseover focus",function() {
		$image.css("backgroundImage","url('"+$(this).attr("src")+"')");
		$image.html($(this).attr("alt"));
	});


	$(this).on("mouseleave blur",function() {
		$image.css("backgroundImage","url('')");
		$image.html(msg);
	});
});
