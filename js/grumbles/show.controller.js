"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "GrumbleFactory",
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

function GrumbleShowControllerFunction(GrumbleFactory, $stateParams){
  this.grumble = GrumbleFactory.get({id: $stateParams.id});

  showVm.update = function(){
    show.Vm.grumble.$update({id: $stateParams.id});
    $state.go("grumbleIndex")
  };
}
}());
