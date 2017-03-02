app.controller("homeContrl" ,function ($scope,$timeout) {
	/*	$scope.init = function()
     {
       mainPage();
     }*/

     $scope.$on('$viewContentLoaded', function(){
     	//mainPage();
     	$timeout(mainPage, 0);
    //Here your view content is fully loaded !!
  });
    /* mainPage();*/
/*$scope.init();*/
	/*var wow = new WOW({
    //disabled for mobile
    mobile: false
});

/*$("#new-products").owlCarousel({
      navigation: true,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 5,
      itemsDesktopSmall: [1024, 3],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
  });
*/
	$scope.mobiles=[{"name":"Mobile Phone","link":"mobile_category.html"},
					{"name":"Tablets","link":"mobile_category.html"},
	 				{"name":"accessories",'link':"mobile_category.html"}];

	$scope.computers=[{"name":"Computer and Laptops","link":"Com&Cam_List.html"},
					{"name":"Computer Accessories","link":"Com&Cam_List.html"},
	 				{"name":"Camera and Lenses",'link':"Com&Cam_List.html"}];

	$scope.Electronics=[{"name":"TV Video and Audio","link":"Elec&Applain_list.html"},
					{"name":"AC's","link":"Elec&Applain_list.html"},
	 				{"name":"Washing Machines",'link':"Elec&Applain_list.html"},
	 				{"name":"Fridges",'link':"Elec&Applain_list.html"},
	 				{"name":"Kitchen & other Appliances",'link':"Elec&Applain_list.html"},
	 				{"name":"Games and Entertainment",'link':"Elec&Applain_list.html"}];

	$scope.cars=[{"name":"Cars","link":"cars_List.html"},
					{"name":"Commercial Vehicles","link":"cars_List.html"},
	 				{"name":"Other Vehicles",'link':"cars_List.html"},
	 				{"name":"Spare Parts",'link':"cars_List.html"}];


	$scope.bikes=[{"name":"Motor Cycles","link":"Bikes_List.html"},
					{"name":"Scooters","link":"Bikes_List.html"},
	 				{"name":"Bicycles",'link':"Bikes_List.html"},
	 				{"name":"Spare Parts",'link':"Bikes_List.html"}];

	$scope.furnitures=[{"name":"Sofa and Dining","link":"furniture_List.html"},
					{"name":"Beds and Wordrobes","link":"furniture_List.html"},
	 				{"name":"House Hold Items",'link':"furniture_List.html"},
	 				{"name":"Kids Furniture",'link':"furniture_List.html"},
	 				{"name":"Home Decor and Garden",'link':"furniture_List.html"}];

	$scope.RealEstates=[{"name":"Farms","link":"RealEstate_List.html"},
					{"name":"Home for Sale/Rent","link":"RealEstate_List.html"},
	 				{"name":"Sale",'link':"RealEstate_List.html"},
	 				{"name":"Land For Sale",'link':"RealEstate_List.html"},
	 				{"name":"Office Space",'link':"RealEstate_List.html"},
	 				{"name":"Others",'link':"RealEstate_List.html"}];

			$scope.fashion=[{"name":"Farms","link":"RealEstate_List.html"},
		{"name":"Home for Sale/Rent","link":"RealEstate_List.html"},
			{"name":"Sale",'link':"RealEstate_List.html"},
			{"name":"Land For Sale",'link':"RealEstate_List.html"},
			{"name":"Office Space",'link':"RealEstate_List.html"},
			{"name":"Others",'link':"RealEstate_List.html"}];


			$scope.ads=[{ "imgSrc":"img1.jpg","link":"ads-details.html","name":"Farms","price":"250"},
		{"imgSrc":"img1.jpg","link":"ads-details.html","name":"Farms","price":"250"},
			{"imgSrc":"img1.jpg","link":"ads-details.html","name":"Farms","price":"250"},
			{"imgSrc":"img1.jpg","link":"ads-details.html","name":"Farms","price":"250"},
			{"imgSrc":"img1.jpg","link":"ads-details.html","name":"Farms","price":"250"},
			{"imgSrc":"img1.jpg","link":"ads-details.html","name":"Farms","price":"250"}]
})