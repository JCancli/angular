//desde aquí hacemos uso del objeto app que es nuestro modulo
//y de esta forma creamos un controlador, en este caso el controlador indexController,
//como vemos, hacemos uso de scope y sencillamente creamos un array y colocamos 
//dos objetos dentro de él
app.controller("indexController",['$scope','categoriesService', function indexController($scope, categoriesService) {
     $scope.usuarios = [
        {
            nombre : "Israel Parra",
            web : "http://uno-de-piera.com",
            edad : "32 años",
            profesion : "programador web"
        },
        {
            nombre : "Pepito",
            web : "http://pepito.com",
            edad : "? años",
            profesion : "vender palotes!"
        }
    ]
    $scope.categories = categoriesService.getCategories();
    console.log($scope);
}]);

//más de lo mismo, pero en este caso creamos una variable llamada saludo y una función
//que gracias al objeto location y al método url nos redirigirá al login al hacer uso de ella
app.controller("homeController", function homeController($scope, $location){
    $scope.saludo = "Hola desde el controlador home";
    $scope.toLogin = function(){
        $location.url("/login");
    }
});
 
app.controller("loginController", function loginController($scope, $location){
    $scope.saludo = "Hola desde el controlador login";
    $scope.toHome = function(){
        $location.url("/home");
    }
});

app.controller("categoriaController", ['$scope', '$location', '$routeParams','categoriesService', function loginController($scope, $location, $routeParams, categoriesService){
	console.log($routeParams);
	var idCategory = parseInt($routeParams.idCat);
	switch(idCategory){
		case 1:
			$candidatos=[
		        {
		        	id:100,
		        	idCat: idCategory,
		            nombre : "Israel Parra",
		            profesion : "programador web"
		        },
		        {
		        	id:101,
		        	idCat: idCategory,
		            nombre : "Pepito",
		            profesion : "vender palotes!"
		        }
		    ]
		break;
		case 2:
			$candidatos=[
		        {
		        	id:102,
		        	idCat: idCategory,
		            nombre : "Lucho DeTros",
		            profesion : ""
		        },
		        {
		        	id:103,
		        	idCat: idCategory,
		            nombre : "Natalia Dugal",
		            profesion : ""
		        }
		    ]
			break;

		default:
			$candidatos=[];
			break;
	}
    $scope.candidatos = $candidatos;
    $scope.category = categoriesService.getCategory(idCategory);

    $scope.votar = function(){
    	//this.getAttr('idCat');
    	console.log('Voto')
    }
}]);

