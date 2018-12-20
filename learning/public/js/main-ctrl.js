import {CONST, TABLE} from "./const";

module.exports = ['$scope', '$http', '$location', '$state', '$mdDialog', 'myService',
function($scope, $http, $location, $state, $mdDialog, myService){
  
  this.$onInit = function(){
    $state.go('manage');
  }
  
  const host = "http://localhost:3000";
  $scope.message = 'my World';
  $scope.state = '';

  $scope.convert2Words2 = (num)=>{
    var length = (""+num).length;
    var result = "";
    
    if(length == 1 || [10, 11].includes(+num))
      result = TABLE[num] || "";
    else {
      var theRest = "";
      var powNumber;
      
      if (length == 2) //chuc 10
        powNumber = 10;
      else if (length == 3) //tram 100
        powNumber = Math.pow(10, 2);
      else if (length > 3 && length < 7) //nghin 1000
        powNumber = Math.pow(10, 3);
      else
        powNumber = Math.pow(10, 6);
      
      var soDu = num % powNumber; 
      var soBiChia =  Math.floor(num/powNumber);
      
      //chuc
      if (length == 2){ 
        if(soBiChia != 1)
          theRest = "mươi ";
        else
          soBiChia = 10;

        switch(soDu){
          case 1:
            theRest += "mốt";
            break;
          case 5:
            theRest += 'lăm';
            break;
          default:
            theRest +=  $scope.convert2Words2(soDu);
        }

      }else {
        // tram
        if (length == 3){
          theRest += "trăm "
          if(soDu > 0 && soDu < 10)
            theRest += "lẻ "
          }
        else{
          if(length > 3 && length < 7){ //nghin
            theRest += "nghìn "   
          }else if(length < 10){ //trieu
            theRest += "triệu ";
          }

          if(soDu > 0 && soDu < 10)
              theRest += 'không trăm lẻ ' ;
            else if ( soDu >= 10 && soDu  <= 99)
              theRest += 'không trăm ' ;
        } 
          
          theRest +=  $scope.convert2Words2(soDu);
      }
        
      result =  [$scope.convert2Words(soBiChia), theRest].join(' ');
    }
    $scope.words = result;
    return result;
  }

  $scope.convert2Words = (num)=>{
    var length = (""+num).length;
    var result = "";
    if(length == 1)
      result = doiMotChuSo(num) || "";
    else if (length == 2) //chuc 10
      result = doiHaiChuSo(num);
    else if (length == 3) //tram 100
      result = doiBaChuSo(num);
    else if (length > 3 && length < 7) //nghin 1000
      result = doiHangNghin(num);
    else
      result = doiHangTrieu(num); //trieu

    $scope.words = result;
    return result;
  }

  function doiMotChuSo(num){
    return TABLE[num];
  }

  function doiHaiChuSo(num){

    if([10, 11].includes(+num))
      return doiMotChuSo(num);

    var hangDonVi = num % 10;
    var chuSoHangDonVi = '';
    var hangChuc = Math.floor(num/10);
    
    switch(hangDonVi){
      case 1:
        chuSoHangDonVi = "mốt";
        break;
      case 5:
        chuSoHangDonVi = 'lăm';
        break;
      default:
        chuSoHangDonVi = doiMotChuSo(hangDonVi);

    }

    if(hangChuc == 1)
      return [ TABLE[10], chuSoHangDonVi].join(' ');

    return [doiMotChuSo(hangChuc), "mươi", chuSoHangDonVi].join(' ');
  }

  function doiBaChuSo(num){
    var hangTram = Math.floor(num/100);
    var soDu =  num % 100;
    var theRest = "";
    var length = ( ""+soDu).length;

    if(soDu != 0){
      switch(length){
        case 1:
          theRest = "lẻ " + doiMotChuSo(soDu);
          break;
        case 2:
          theRest = doiHaiChuSo(soDu);
          break;
  
      }
    }
    return [doiMotChuSo(hangTram), "trăm", theRest].join(' ');
  }

  function doiHangNghin(num){
    var hangNghin = Math.floor(num/1000);
    var soDu =  num % 1000;
    var theRest = "";
    if(soDu > 0 && soDu < 10)
      theRest = 'không trăm lẻ ' ;
    else if ( soDu >= 10 && soDu  <= 99)
      theRest = 'không trăm ' ;

      theRest +=  $scope.convert2Words(soDu);
    return [$scope.convert2Words(hangNghin), 'nghìn', theRest].join(' ');
  }

  function doiHangTrieu(num){
    var hangtrieu = Math.floor(num/1000000);
    var soDu = num % 1000000;
    var theRest = "";

    if(soDu > 0 && soDu < 10)
      theRest = 'không trăm lẻ ';
    else if ( soDu >= 10 && soDu  <= 99)
      theRest = 'không trăm ';

      theRest +=  $scope.convert2Words(soDu);
    if((''+hangtrieu).length < 4)
      return [$scope.convert2Words(hangtrieu), 'triệu', theRest].join(' ');
  }

  $scope.gotoView = function(path){
    // ex: /view1 or /view2 
    document.getElementById('angular-route').style.color = "red";
    $location.path(path);
  }

  $scope.gotoWelcome = function(){
    $state.go('welcome');
  }  

  $scope.gotoState = function(name,param){
    $state.go(name, param);
  }  

  $scope.send = function(){
    var req = {
      'method':'GET',
      'url': host + '/test'
  }
    $http(req).then(function(result){
      $scope.message = result.data.content;
      console.log(result);
    })
  }

  $scope.test = ()=>{
    myService.testES().then((result)=>{
      console.log(result);
    })
  }

  $scope.add = function(){
    var req = {
      method:'POST',
      url: host + '/add',
      data: {'name':$scope.name},
      params:{'type': $scope.type}
  }
    $http(req).then(function(result){
      $scope.message = `Added ${result.data.name}`;
      console.log(result);
    })
  }

  $scope.update = function(){
    var req = {
      method:'PUT',
      url: host + '/update/' + $scope.name
  }
    $http(req).then(function(result){
      $scope.message = `Updated ${result.data.newName}`;
      console.log(result.data);
    })
  }

}]