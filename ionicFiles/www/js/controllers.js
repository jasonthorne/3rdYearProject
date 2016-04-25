angular.module('app.controllers', [])
  
.controller('scorepadCtrl', function($scope) {
    
    var p1Life = 20;
    var p2Life = 20;
    
    document.getElementById("p1Score").innerHTML = p1Life; 
    document.getElementById("p2Score").innerHTML = p2Life; 
    
    
    $scope.minusScore = function(player, num) {  
        
        switch (player){
            case  'p1Score':
                
                if (num == 1) { 
                p1Life = p1Life -1;
                }
                else {
                p1Life = p1Life -5; 
                } 

                document.getElementById(player.toString()).innerHTML = p1Life;  
                break;
                
            case  'p2Score': 
                if (num == 1) { 
                p2Life = p2Life -1;
                }
                else {
                p2Life = p2Life -5; 
                } 
                
                document.getElementById(player.toString()).innerHTML = p2Life;
                break;
         }     

    }
    
    $scope.plusScore = function(player, num) {  
        
        switch (player){
            case  'p1Score':
                
                if (num == 1) { 
                p1Life = p1Life +1;
                }
                else {
                p1Life = p1Life +5; 
                } 

                document.getElementById(player.toString()).innerHTML = p1Life;  
                break;
                
            case  'p2Score':    
                if (num == 1) { 
                p2Life = p2Life +1;
                }
                else {
                p2Life = p2Life +5; 
                } 
                
                document.getElementById(player.toString()).innerHTML = p2Life;
                break;
         }
    }
    
    $scope.reset = function() {  
        
        p1Life = 20;
        p2Life = 20;
        document.getElementById("p1Score").innerHTML = p1Life; 
        document.getElementById("p2Score").innerHTML = p2Life; 
    }

})
   
    

.controller('notesCtrl', function ($scope) {
    
    $scope.inputs = [{
        value: null
    }];

    $scope.addInput = function () {
        $scope.inputs.push({
            value: null
        });
    }

    $scope.removeInput = function (index) {
        $scope.inputs.splice(index, 1);
    }
});


 