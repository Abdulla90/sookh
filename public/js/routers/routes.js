app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "../../templates/home.html",
		controller:"homeContrl"        
	})
	/*.when("/mobileCategory",{
		templateUrl:"../../templates/mobile_category.html",
		controller:"homeContrl"
			
	})*/
});