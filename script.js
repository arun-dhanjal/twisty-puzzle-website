document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.toggle-puzzle');
  images.forEach(function(img) {
    img.addEventListener('click', function() {
      const scrambled = img.getAttribute('data-scrambled');
      const solved = img.getAttribute('data-solved');
      // Get just the filename part of the current src, in case it's an absolute URL
      const currentFile = decodeURIComponent(img.src.split('/').pop());
      if (currentFile === scrambled) {
        img.src = solved;
      } else {
        img.src = scrambled;
      }
    });
  });
});
