var selectedDishViewCtrl = function(view, model) {
	//WORKING BUT THE BUTTON IS INSIDE A FUNCTION, DONT KNOW HOW TO REACH IT!


	confirmDish.onclick = function(){
		console.log("click confirmDish");
		model.addDishToMenu(model.getPicId());
	}
	
}