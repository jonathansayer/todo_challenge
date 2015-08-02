todoList.controller('todoListController', [function() {

var self = this

self.addToList = function(){
  var newChore = {
    "name" : self.chore,
    "isDone" : false
  }
  self.chores.push(newChore)
  self.chore = ""
  self.NumberDone()
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
  self.notDoneCounter = (self.chores.length)-self.doneCounter
}

self.deleteChore = function(chore){
  var index = self.chores.indexOf(chore)
  self.chores.splice(index,1)

}

self.clearCompleted = function(chore){
  for(n = 0; n < self.chores.length; n++){
    if(self.chores[n].isDone == true ) {
      self.chores.splice(n,1)
    }
  }
  self.NumberDone();
}



}]);