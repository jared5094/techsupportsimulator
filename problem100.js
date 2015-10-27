
  //create instance of supportIdentify.
  var problem100SupportIdentify = new supportIdentify(
    "Are you trying to use an Ethernet or a wireless connection?",
    "What is being displayed in the browser?",
    "Can you access the local intranet?",
    "Please open the Control Panel and view Network Connections. Is the network adapter enabled?"
  );

  //create instance of supportResolve.
  var problem100SupportResolve = new supportResolve(
    "Can you try disabling and then re-enabling the network adapter?",
    "Can you try to access a different website?",
    "Try restarting the computer.",
    "Is the Ethernet cable plugged into the computer?"
  );

  //for each property of problem100SupportIdentify, append formatted value to id: supportIdentify.
  for (var prop in problem100SupportIdentify) {
    $('#supportIdentify').append(format(problem100SupportIdentify[prop]) );
    $('#supportIdentify li').addClass('supportQuestions');
  }

  //for each property of problem100SupportResolve, append formatted value to id: supportResolve.
  for (var prop in problem100SupportResolve) {
    $('#supportResolve').append(format(problem100SupportResolve[prop]) );
    $('#supportResolve li').addClass('supportQuestions');
  }


    //create instance of userIdentify.
  var problem100UserIdentify = new userIdentify(
    "I'm on a work computer using a wired connection.",
    "It just says unable to connect.",
    "No, I can't access that either.",
    "I already checked that. It's working."
  );

  //create instance of supportResolve.
  var problem100UserResolve = new userResolve(
    "OK... No I still can't access the Internet.",
    "I can't access anything on the web.",
    "Yeah, the cable's plugged in.",
    "Hello? No, the problem is still there."
  );


  $('li.supportQuestions').on('click', function() {
    $(this).addClass('selected');
    var value = $(this).text();
    for (var prop in problem100SupportIdentify) {
      if (problem100SupportIdentify[prop] === value) {
        $('#userText').text(problem100UserIdentify[prop]);
        // setTimeout(function() {
        //   $('#userText').text('')
        // }, 8000 );
      }
    }
  });

  $('li.supportQuestions').on('click', function() {
    // $('#userText').text('---');
    $(this).addClass('highlight');
    var value = $(this).text();
    for (var prop in problem100UserResolve) {
      if (problem100SupportResolve[prop] === value) {
        $('#userText').text(problem100UserResolve[prop]);
        // if () {
        //   setTimeout(function() {
        //     $('#userText').text('')
        //   }, 3000 );
        // };
      }
    }
  });




