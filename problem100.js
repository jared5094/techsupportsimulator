
//this page is wrapped in the function 'problem100', so that the variable names don't have to
//include 'problem100'.
function problem100() {

  //create question series for problem100: Identify1, Resolve1.
  var supportIdentify1 = new supportIdentify(
    "Are you using an Ethernet or wireless connection?",
    "What is the browser displaying?",
    "Can you access the local intranet?",
    "Please open the Control Panel and view Network Connections. Is the network adapter enabled?"
    );

  var supportResolve1 = new supportResolve(
    "Disable and then re-enable the network adapter.",
    "Try to access a different website.",
    "Restart the computer.",
    "Is the laptop's wireless switch turned on?",
    "Go to the Properties of the network adapter. Is it configured to receive an IP address automatically?"
    );

  //for each property of each question series, format and append its value to #support[series].
  for (var prop in supportIdentify1) {
    $('#Identify1').append(format(supportIdentify1[prop]) );
  }
  for (var prop in supportResolve1) {
    $('#Resolve1').append(format(supportResolve1[prop]) );
  }

  //add the class 'supportQuestions' to each support question.
  $('#helpDeskContainer').children().children().addClass('supportQuestions clickme');

  //create answer series for problem100: Identify1, Resolve1.
  var userIdentify1 = new userIdentify(
    "Hi. Why isn't the Internet working?",
    "My job.",
    "Hold on... No, it's just me.",
    "A couple of minutes ago.",
    "Yes",
    "It's my work laptop, so the wireless isn't working.",
    "It just says it is unable to connect.",
    "No, I can't access that either.",
    "I already checked that. It's working."
  );

  var userResolve1 = new userResolve(
    "OK... No, I still can't access the Internet.",
    "I can't access anything on the web.",
    "Yeah, the light is showing.",
    "Hello? No, the problem is still there.",
    "Oh no! For some reason, it switched to the settings for my home network! Thanks, bye."
  );

  //Turn off click handler for supportQuestions. Highlight question.
  //Create variables for passing into function 'userResponse': value of this (question clicked),
  //values of questionSeries and answerSeries.
  var userText = function() {
    $('li.supportQuestions').off();
    $(this).removeClass('clickme');
    $(this).addClass('highlight');
    var value = $(this).text();
    var supportSeries = [supportIdentify1, supportResolve1];
    var userSeries = [userIdentify1, userResolve1];
    for (i = 0; i < supportSeries.length; i++) {
      var questionSeries = supportSeries[i];
      var answerSeries = userSeries[i];
      userResponse(value, questionSeries, answerSeries);
    }
    // userResponse(value, supportIdentify1, userIdentify1);
  }

  //Match question with property of questionSeries, match property with property of answerSeries,
  //then get value from answerSeries property and insert into userText.
  function userResponse(value, questionSeries, answerSeries) {
    for (var prop in questionSeries) {
      if (questionSeries[prop] === value) {
        $('#userText').text(answerSeries[prop]);
        wipeReset();
      }
    }
  }

  //After 5 seconds, wipe userText and reset click handler on supportQuestions.
  function wipeReset() {
    setTimeout(function() {
      $('#userText').text('');
      $('li.clickme').on('click', userText);
    }, 4000 );
  }

  alert("You have 30 seconds to solve the user's problem.");

   //Create click handler for supportQuestions and activate anonymous function 'userText'.
  $('li.supportQuestions').on('click', userText);

setTimeout( function() {

  alert("Out of Time! Call passed to Level 2.");
}, 30000);

}

problem100();



