var SideMenuViewCtrl = function(view, model) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(1);
	});
	 
	view.minusButton.click(function(){
		model.setNumberOfGuests(-1);
	});
}