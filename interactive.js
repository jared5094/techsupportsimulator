//Create click handler for supportQuestions and activate anonymous function 'userText'.
$('li.supportQuestions').on('click', userText);

//Turn off click handler for supportQuestions. Highlight question.
//Create variables for passing into function 'userResponse': value of this (question clicked),
//values of questionSeries and answerSeries.
var userText = function() {
  $('li.supportQuestions').off();
  $(this).addClass('highlight');
  var value = $(this).text();
  var supportSeries = [supportIdentify1, supportResolve1];
  var userSeries = [userIdentify1, userResolve1];
  for (i = 0; i < supportSeries.length; i++) {
    var questionSeries = supportSeries[i];
    var answerSeries = userSeries[i];
    userResponse(value, questionSeries, answerSeries);
  }
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
    $('li.supportQuestions').on('click', userText);
  }, 5000 );
}
