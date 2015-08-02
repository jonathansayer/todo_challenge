todoList.controller('todoListController', [function() {

var self = this
var n = 0;

self.addToList = function(){
  console.log(self.chore)
  var newChore = {
    "name" : self.chore,
    "isDone" : false
  }
  self.chores.push(newChore)
  console.log(self.chores[n])
  n++;
  self.chore = ""
}

self.choreComplete = function(chore){
  chore.isDone = !chore.isDone
  self.NumberDone();
}

self.NumberDone = function(){
  self.doneCounter = 0;
  for(n = 0; n < self.chores.length; n++){
    if(self.chores[n].isDone == true ) {
      self.doneCounter +=1;
    }
  }
}

self.deleteChore = function(chore){
  var index = self.chores.indexOf(chore)
  self.chores.splice(index,1)
  console.log(self.chores)

}

}]);