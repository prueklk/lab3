var OverallStateCtrl = function(model){
	var indexView = new IndexView ($("#indexView"), model);
	var indexCtrl = new IndexCtrl(indexView, model);
	
	var sideMenuView = new SideMenuView($("#sideMenu"), model);
	var sideMenuViewCtrl = new SideMenuViewCtrl(sideMenuView,model);
	
	var mainView = new MainView($("#mainView"), model);
	var mainViewCtrl = new MainViewCtrl(mainView,model);
	
	var selectedDishView = new SelectedDishView($("#selectedDishView"), model);
	var selectedDishViewCtrl = new SelectedDishViewCtrl(selectedDishView, model);
	
	var overView = new OverView($("#overView"), model);
	var overViewCtrl = new OverViewCtrl(OverView,model);
	
	var instructionView = new InstructionView($("#instructionView"), model);
	var instructionViewCtrl = new InstructionViewCtrl(instructionView, model);


	//indexView.container.hide();
	sideMenuView.container.hide();
	mainView.container.hide();
	selectedDishView.container.hide();
	overView.container.hide();
	instructionView.container.hide();

}