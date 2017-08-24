define(["jquery"],function($){
	$.ajax({
			type: "get",
			url: "/html/include/header.html",
			async: true,
			success: function(data) {
				$(data).appendTo(".header");
				console.log(data)
			}
		});
})