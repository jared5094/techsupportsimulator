
//this page is wrapped in the function 'problem100', so that the variable names don't have to
//include 'problem100'.
function problem100() {

  //create question series for problem100: Identify1, Resolve1.
  var supportIdentify1 = new supportIdentify(
    "Are you trying to use an Ethernet or a wireless connection?",
    "What is being displayed in the browser?",
    "Can you access the local intranet?",
    "Please open the Control Panel and view Network Connections. Is the network adapter enabled?"
    );

  var supportResolve1 = new supportResolve(
    "Can you try disabling and then re-enabling the network adapter?",
    "Can you try to access a different website?",
    "Try restarting the computer.",
    "Is the Ethernet cable plugged into the computer?"
    );

  //for each property of each question series, format and append its value to #support[series].
  for (var prop in supportIdentify1) {
    $('#Identify1').append(format(supportIdentify1[prop]) );
  }
  for (var prop in supportResolve1) {
    $('#Resolve1').append(format(supportResolve1[prop]) );
  }

  //add the class 'supportQuestions' to each support question.
  $('#helpDeskContainer').children().children().addClass('supportQuestions');

  //create answer series for problem100: Identify1, Resolve1.
  var userIdentify1 = new userIdentify(
    "Why isn't the Internet working?",
    "My job.",
    "Hold on... No, just me.",
    "A couple of minutes ago.?",
    "Yes.",
    "I'm on a work computer using a wired connection.",
    "It just says unable to connect.",
    "No, I can't access that either.",
    "I already checked that. It's working."
  );

  var userResolve1 = new userResolve(
    "OK... No I still can't access the Internet.",
    "I can't access anything on the web.",
    "Yeah, the cable's plugged in.",
    "Hello? No, the problem is still there."
  );

}

problem100();



