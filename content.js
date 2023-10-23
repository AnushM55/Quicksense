document.addEventListener('selectionchange', function() {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    chrome.runtime.sendMessage({ action: 'setSelectedText', text: selectedText });
  }
});
var container = document.createElement('div');
container.style.margin-top = "10px"
container.style.position = "fixed"
container.style.height = "50px"
container.style.width = " 200px"
container.style.top = "0px"
container.style.right = "0px"
container.style.border = "1px solid blue"
container.style.backgroundColor = "white"
document.body.appendChild(container)
