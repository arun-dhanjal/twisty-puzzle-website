document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.toggle-puzzle');
  images.forEach(function(img) {
    img.addEventListener('click', function() {
      const scrambled = img.getAttribute('data-scrambled');
      const solved = img.getAttribute('data-solved');
      // Use endsWith for more robust filename matching
      if (img.src.endsWith(scrambled)) {
        img.src = solved;
      } else {
        img.src = scrambled;
      }
    });
  });
});
