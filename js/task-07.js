const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  const fontSizeValue = fontSizeControl.value + 'px'; 
  textElement.style.fontSize = fontSizeValue; 
});