document.addEventListener('DOMContentLoaded', function() {
  var findMeaningButton = document.getElementById('findMeaningButton');
  var wordInput = document.getElementById('wordInput');
  var meaningDiv = document.getElementById('meaning');
  chrome.storage.local.get(['meaning'], function(result) {
    if (result.meaning) {
      meaningDiv.textContent = result.meaning;

    }
  });
  window.addEventListener('beforeunload', function() {
    // Send a message to background.js to clear the badge
    chrome.runtime.sendMessage({ action: 'clearBadge' });
  });
  findMeaningButton.addEventListener('click', function() {
    var word = wordInput.value;
   
    chrome.runtime.sendMessage({ action: 'lookup', word: word }, function(response) {
     if (chrome.runtime.lastError) {
        console.error('Error details:', chrome.runtime.lastError);
      } else if (response && response.meaning) {
        meaningDiv.textContent = response.meaning;
      } else {
        console.error('Invalid or missing response:', response);
      }
    });
  });
});
