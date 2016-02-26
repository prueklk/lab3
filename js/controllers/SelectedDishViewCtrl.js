var SelectedDishViewCtrl = function(view, model) {
	//WORKING BUT THE BUTTON IS INSIDE A FUNCTION, DONT KNOW HOW TO REACH IT!


	view.confirmDish.click(function(){
		model.addDishToMenu(model.getPicId());
	});
	
}