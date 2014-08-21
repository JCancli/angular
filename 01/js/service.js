app.service('categoriesService', function() {
  var categoryList = [
  	{
  		id:1,
  		title:'Categoria 1'
  	},
  	{
  		id:2,
  		title:'Categoria 2'
  	},
  	{
  		id:3,
  		title:'Categoria 3'
  	},
  	{
  		id:4,
  		title:'Categoria 4'
  	},
  ];

  var addCategory = function(newObj) {
    categoryList.push(newObj);
  }

  var getCategories = function(){
    return categoryList;
  }

  var getCategory = function(id){
  	var cat;
  	angular.forEach(categoryList, function(value, key) {
  		if(value.id==id){
  			cat = value;
  			return;
  		}
     });
  	//console.log(cat);
  	return cat;
  }

  return {
    addCategory: addCategory,
    getCategories: getCategories,
    getCategory: getCategory
  };

});

app.service('candidatosService', function() {
  var candidatosList = [
    {
		nombre : "Israel Parra",
		profesion : "programador web"
    }
  ];

  var addCandidato = function(newObj) {
    candidatosList.push(newObj);
  }

  var getCandidatos = function(){
    return candidatosList;
  }

  var getCandidato = function(id){
    var cat;
    angular.forEach(candidatosList, function(value, key) {
      if(value.id==id){
        cat = value;
        return;
      }
     });
    //console.log(cat);
    return cat;
  }

  return {
    addCandidato: addCandidato,
    getCandidatos: getCandidatos,
    getCandidato: getCandidato
  };

});