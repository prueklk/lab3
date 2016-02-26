var overallStateView = function(container, model){
	
	this.container = container; 
	
	this.update = function(model, arg) {
		//console.log("UPDATE overallStateView // arg = "+arg);

	}
	
	//console.log("this.addObserver = overallStateView");
	model.addObserver(this);
}