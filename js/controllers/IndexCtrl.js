var IndexCtrl = function(view, model) {

	view.createDinner.onclick = function(){
		overallStateCtrl.indexView.container.hide();
		overallStateCtrl.sideMenuView.container.show();
		overallStateCtrl.mainView.container.show();
	}	

}