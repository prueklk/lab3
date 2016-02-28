var SideMenuViewCtrl = function(view, model) {

	view.plusButton.click(function(){
		model.setNumberOfGuests(1);
	});
	 
	view.minusButton.click(function(){
		model.setNumberOfGuests(-1);
	});

	view.confirmDinner.click(function(){
		overallStateCtrl.mainView.container.hide();
		overallStateCtrl.selectedDishView.container.hide();
		overallStateCtrl.sideMenuView.container.hide();
		overallStateCtrl.overView.container.show();
	});
}