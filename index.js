var modulo = angular.module("myapp",[]);

modulo.config(function($routeProvider){

	$routeProvider
		.when('/',{templateUrl:'pg_parcial/inicio.html', controller:'inicioController'})
		.when('/o_que_faco',{templateUrl:'pg_parcial/o_que_faco.html', controller:'qfacoController'})
		.when('/quem_sou',{templateUrl:'pg_parcial/quem_sou.html', controller:'qsouController'})
		.when('/passa_tempo',{templateUrl:'pg_parcial/passa_tempo.html', controller:'ptmpController'})
});

modulo.controller('mycontroller',function(){
	
	//alert('a');
	
});

modulo.controller('inicioController',function(){
	
	//alert('e');
	
});
modulo.controller('qsouController',function(){
	//alert('c');
	
	
});
modulo.controller('ptmpController',function(){
	//alert('c');
	
	
});
modulo.controller('qfacoController',function(){
	
	
	//alert('d'); 
});