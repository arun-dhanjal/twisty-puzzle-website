document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.toggle-puzzle');
  images.forEach(function(img) {
    img.addEventListener('click', function() {
      const scrambled = img.getAttribute('data-scrambled');
      const solved = img.getAttribute('data-solved');
      // Use only the filename for comparison to handle full URL issues
      const currentFile = img.src.split('/').pop();
      if (currentFile === scrambled) {
        img.src = solved;
      } else {
        img.src = scrambled;
      }
    });
  });
});
