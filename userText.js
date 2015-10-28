/*
create constructor function listing standard questions to ask user.
create instance for problem 1.
*/

//Identify questions that vary according to problem.
function userIdentify(greeting, userObjective, usersAffected, lastTimeSystemWorking,
  getRemoteAccess, userSubSystem, errorMessage, systemStatusA, systemStatusB) {
  this.greeting = greeting;
  this.userObjective = userObjective;
  this.usersAffected = usersAffected;
  this.lastTimeSystemWorking = lastTimeSystemWorking;
  this.getRemoteAccess = getRemoteAccess;
  // this.getRemoteAccess = "May I access your computer remotely?";
  this.userSubSystem = userSubSystem;
  this.errorMessage = errorMessage;
  this.systemStatusA = systemStatusA;
  this.systemStatusB = systemStatusB;
}

//Resolve questions that vary according to problem.
function userResolve(restartSubSystem1, restartSubSystem2, checkPhysicalConnections,
  restartWholeSystem) {
  this.restartSubSystem1 = restartSubSystem1;
  this.restartSubSystem2 = restartSubSystem2;
  this.checkPhysicalConnections = checkPhysicalConnections;
  this.restartWholeSystem = restartWholeSystem;
}

// function cmdCommands(pingLocalhost, pingWebsite) {
//   this.pingLocalhost = pingLocalhost;
//   this.pingWebsite = pingWebsite;
// }












