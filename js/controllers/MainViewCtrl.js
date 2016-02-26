var MainViewCtrl = function(view, model) {
	
	foodDrop.onchange = function(){
		console.log("foodDrop.onchange");
		var type = document.getElementById("foodDrop").value;
		view.update(this, type);



		// console.log("foodBtnArr = "+view.foodBtnArr);
		// for(var i=0;i<view.foodBtnArr.length;i++){
		// 	// console.log("in i = "+view.foodBtnArr[i]);
		// 	for(var j=0;j<view.foodBtnArr[i].length; j++){
		//   		view.foodBtnArr[i][j].onclick = function(){
		//   			console.log(this.id);
		//   		}
		//  	}	
		// }
	};
	

	
	// console.log("foodBtnArr = "+view.foodBtnArr);

	// for(var i=0;i<view.foodBtnArr.length;i++){
	// 	// console.log("in i = "+view.foodBtnArr[i]);
	// 	for(var j=0;j<view.foodBtnArr[i].length; j++){
	//   		view.foodBtnArr[i][j].onclick = function(){
	//   			console.log(this.id);
	//   		}
	//  	}	
	// }

}