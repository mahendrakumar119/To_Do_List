//click off specific todos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//to stop event bubleing
	event.stopPropagation();
});
//adding a new todo

$("input").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
	}
		

});
$("#addButton").click(function(){
	$("input").fadeToggle();	
});
