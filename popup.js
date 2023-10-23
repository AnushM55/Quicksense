
document.addEventListener('DOMContentLoaded', function() {
  var findMeaningButton = document.getElementById('findMeaningButton');
  var wordInput = document.getElementById('wordInput');
  var meaningDiv = document.getElementById('meaning');
  var pronounceButton = document.getElementById('pronounceButton');
  var languageSelect = document.getElementById('languageSelect');

  // Initially hide the meaning div
  meaningDiv.style.display = 'none';

  // Event listener for the Find Meaning button
  findMeaningButton.addEventListener('click', function() {
    var word = wordInput.value;
    chrome.runtime.sendMessage({ action: 'lookup', word: word }, function(response) {
      if (chrome.runtime.lastError) {
        console.error('Error details:', chrome.runtime.lastError);
      } else if (response && response.meaning) {
        meaningDiv.textContent = response.meaning;
        meaningDiv.style.display = 'block'; // Show the div when meaning is displayed
      } else {
        console.error('Invalid or missing response:', response);
      }
    });
  });

  languageDropdown.style.display = 'none';

  // Event listener for the Pronounce button (show/hide language dropdown)
  pronounceButton.addEventListener('click', function() {
    // Toggle the display of the language dropdown
    if (languageDropdown.style.display === 'none') {
      languageDropdown.style.display = 'block';
    } else {
      languageDropdown.style.display = 'none';
    }
  });
  
  // Event listener for the Pronounce button (static frontend design)
  pronounceButton.addEventListener('click', function() {
    var selectedLanguage = languageSelect.value;
    // You can add code here to handle pronunciation based on the selected language (for now, it's static design).
    // Display a message or initiate pronunciation based on the selected language.
    alert('Pronunciation will be initiated in ' + selectedLanguage);
  });
});
