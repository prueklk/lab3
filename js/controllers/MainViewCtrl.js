var MainViewCtrl = function(view, model) {
	
	searchButton.onclick = function(){
		var string = searchValue.value;
		var menu = model.getFullMenuBefore();
		for(var i = 0; i < menu.length ; i++){
			if (string == menu[i].name){

				foodInfo = "";

				foodInfo +="<div class=\"col-md-4\">"+
									"<div class=\"thumbnail\">"+
										"<img src=\"images/"+menu[i].image+"\" id=\""+menu[i].name +"\" class=\"foodPics\" style=\"width:128px;height:128px;\">"+
										"<div class=\"caption\">"+
										"<p><a href=\"#\" class=\"btn btn-primary btn-block\" role=\"button\" id=\""+menu[i].id+"\">"+menu[i].name+"</a></p>"+
										"<p>"+menu[i].description+"</p>"+
								"</div></div></div>";

				view.foodBtnId.push(menu[i].id);

				view.foodDetail.html(foodInfo);

				for (var j=0; j<view.foodBtnId.length;j++){
				view.foodBtnArr.push(view.container.find("#"+view.foodBtnId[j]));
				}
			}
			else{
				
			}
		}
	};

	foodDrop.onchange = function(){
		console.log("foodDrop.onchange");
		var type = document.getElementById("foodDrop").value;
		view.update(this, type);



		//console.log("foodBtnArr = "+view.foodBtnArr);
		for(var i=0;i<view.foodBtnArr.length;i++){
			// console.log("in i = "+view.foodBtnArr[i]);
			for(var j=0;j<view.foodBtnArr[i].length; j++){
		  		view.foodBtnArr[i][j].onclick = function(){
		  			console.log(this.id);
	  			model.addPicId(this.id);

				overallStateCtrl.mainView.container.hide();
				overallStateCtrl.selectedDishView.container.show();
		  		}
		 	}	
		}
	};
	

	
	// console.log("foodBtnArr = "+view.foodBtnArr);

	for(var i=0;i<view.foodBtnArr.length;i++){
		// console.log("in i = "+view.foodBtnArr[i]);
		for(var j=0;j<view.foodBtnArr[i].length; j++){
	  		view.foodBtnArr[i][j].onclick = function(){
	  			console.log(this.id);
	  			model.addPicId(this.id);

				overallStateCtrl.mainView.container.hide();
				overallStateCtrl.selectedDishView.container.show();
	  		}
	 	}	
	}



}