
var mob_array =  ["samsung", "iphone", "Micromax","Nokia","Sony","Mi","HTC","Lenovo","Motorola","Intex","Lava","LG","ASUS","BlackBerry","Karbon","Other Mobiles"];
var Tablets1 = ["samsung", "ipads", "Others Tablets"];
// var MobileAcces = ["Mobiles", "Tablets"];
function mobile_List_Fun()
{ 
console.log("inside mobileList");
	
	for(i=0;i<mob_array.length;i++)
	{
		document.getElementById("mobileList").innerHTML += "<li><a href='#' style='padding:0px 0px 0px 33px;'>"+mob_array[i]+"</a></li>";
	}
	
	
}
function tablet_List_Fun()
{ 
console.log("inside mobileList");
	
	for(i=0;i<Tablets1.length;i++)
	{
		document.getElementById("tabletList").innerHTML += "<li><a href='#' style='padding:0px 0px 0px 33px;'>"+Tablets1[i]+"</a></li>";
	}
	
	
}
//CARS DETAIL
var carsModel = ["Maruti Suzuki","Hyundai","TATA","Mahindra","Toyota","Honda","Chevrolet","Ford","Skoda","Volkswogen","Fiat","Nisan"];

function cars_List_Fun()
 {
	 for(i=0;i<carsModel.length;i++)
	 {
		 
		 document.getElementById("carsID").innerHTML += "<li><a href='#' style='padding:0px 0px 0px 33px;'>"+carsModel[i]+"</a></li>";
	 }
	
	
	
}
//BIKES DETAIL

var MotorCycles1 = ["Bajaj", "Hero Honda", "Yamaha","Honda","hero","other vehical"];
var Scooter1 = ["Bajaj", "Hero Honda", "Yamaha","Honda","hero","other vehical"];
function motors_List_Fun()
 {
	 for(i=0;i<MotorCycles1.length;i++)
	 {
		 
		 document.getElementById("motorID").innerHTML += "<li><a href='#' style='padding:0px 0px 0px 33px;'>"+MotorCycles1[i]+"</a></li>";
	 }
	
	
	
}
function scooter_List_Fun()
 {
	 for(i=0;i<Scooter1.length;i++)
	 {
		 
		 document.getElementById("scooterID").innerHTML += "<li><a href='#' style='padding:0px 0px 0px 33px;'>"+Scooter1[i]+"</a></li>";
	 }
	
	
	
}