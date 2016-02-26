var SelectedDishViewCtrl = function(view, model) {
	//WORKING BUT THE BUTTON IS INSIDE A FUNCTION, DONT KNOW HOW TO REACH IT!


	view.confirmDish.click(function(){
		model.addDishToMenu(model.getPicId());
	});
	

	view.backButton.click(function(){
		//console.log("back");
		overallStateCtrl.mainView.container.show();
		overallStateCtrl.selectedDishView.container.hide();
	});
}