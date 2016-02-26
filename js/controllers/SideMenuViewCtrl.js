var SideMenuViewCtrl = function(view, model) {
 
 	console.log(this);
 	console.log(view);
 	console.log(view.plusButton);
 	console.log("confirmDinner");
 	console.log(view.confirmDinner);

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