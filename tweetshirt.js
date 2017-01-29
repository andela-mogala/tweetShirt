window.onload = () => {
  const previewButton = document.getElementById('previewButton');
  previewButton.onclick = previewHandler;
}

function previewHandler() {
  const canvas = document.getElementById('tshirtCanvas');
  const context = canvas.getContext('2d');

  const selectedShape = document.getElementById('shape');
  const selectedIndex = selectedShape.selectedIndex;
  const shape = selectedShape[selectedIndex].value;

  if (shape === 'squares') {
    // draw 20 squares
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  }
}

function drawSquare(canvas, context) {
  const width = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = 'lightblue';
  context.fillRect(x, y, width, width);
}