/*
create constructor function listing standard questions to ask user.
create instance for problem 1.
*/

  //Identify questions that vary according to problem.
  function supportIdentify(userSubSystem, errorMessage, systemStatusA, systemStatusB)
  {
    this.greeting = "Good day, how may I help?";
    this.userObjective = "What are you trying to achieve?";
    this.usersAffected = "Is anyone else in your area experiencing the same problem?";
    this.lastTimeSystemWorking = "When was the last time it was working?";
    this.getRemoteAccess = "May I access your computer remotely?";
    this.userSubSystem = userSubSystem;
    this.errorMessage = errorMessage;
    this.systemStatusA = systemStatusA;
    this.systemStatusB = systemStatusB;
  }

  //Resolve questions that vary according to problem.
  function supportResolve(restartSubSystem1, restartSubSystem2, restartWholeSystem,
    checkPhysicalConnections) {
    this.restartSubSystem1 = restartSubSystem1;
    this.restartSubSystem2 = restartSubSystem2;
    this.restartWholeSystem = restartWholeSystem;
    this.checkPhysicalConnections = checkPhysicalConnections;
  }

  // function cmdCommands(pingLocalhost, pingWebsite) {
  //   this.pingLocalhost = pingLocalhost;
  //   this.pingWebsite = pingWebsite;
  // }



