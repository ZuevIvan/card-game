var Timer = (function() {
    var timerInterval;
    var totalSeconds = 0;
  
    function start() {
      timerInterval = setInterval(updateTimer, 1000);
    }
  
    function stop() {
      clearInterval(timerInterval);
    }
  
    function reset() {
      clearInterval(timerInterval);
      totalSeconds = 0;
    }
  
    function updateTimer() {
      totalSeconds++;
  
      var minutes = Math.floor(totalSeconds / 60);
      var seconds = totalSeconds % 60;
  
      var formattedTime =
        ('0' + minutes).slice(-2) +
        ':' +
        ('0' + seconds).slice(-2);
  
      document.getElementById('timer').textContent = formattedTime;
    }
  
    return {
      start: start,
      stop: stop,
      reset: reset
    };
  })();