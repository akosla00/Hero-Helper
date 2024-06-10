document.addEventListener('DOMContentLoaded', function() {
  var paragraph = document.getElementById('hr');

  function textEffect(animationName) {
      var text = paragraph.innerHTML,
          chars = text.length,
          newText = '';

      // Wrap each character in an <i> element
      for (var i = 0; i < chars; i++) {
          newText += '<i>' + text.charAt(i) + '</i>';
      }

      paragraph.innerHTML = newText;

      var wrappedChars = paragraph.getElementsByTagName('i'),
          wrappedCharsLen = wrappedChars.length,
          j = 0;

      function addEffect() {
          setTimeout(function() {
              wrappedChars[j].className = animationName;
              j++;
              if (j < wrappedCharsLen) {
                  addEffect();
              }
          }, 100);
      }

      addEffect();
  }

  textEffect('fly-in-out');
});
