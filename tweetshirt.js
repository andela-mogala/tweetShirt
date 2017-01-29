const tweets = [
  { text: 'One does not simply walk into mordor!' },
  { text: 'Who\'s afraid of the big bad wold?' },
  { text: 'Hakuna Matata' },
  { text: 'Expectro Petrolam!' },
  { text: 'Open sesame!' }
];

window.onload = () => {
  const previewButton = document.getElementById('previewButton');
  updateTweets(tweets);
  previewButton.onclick = previewHandler;
}

function previewHandler() {
  const canvas = document.getElementById('tshirtCanvas');
  const context = canvas.getContext('2d');
  fillBackgroundColor(canvas, context);

  const selectShapeObj = document.getElementById('shape');
  const selectIndex = selectShapeObj.selectedIndex;
  const shape = selectShapeObj[selectIndex].value;

  if (shape === 'squares') {
    // draw 20 squares
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape === 'circles') {
    for (let circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  }

  drawText(canvas, context);
}

function drawSquare(canvas, context) {
  const width = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = 'lightblue';
  context.fillRect(x, y, width, width);
}

function fillBackgroundColor(canvas, context) {
  const selectColorObj = document.getElementById('backgroundColor');
  const index = selectColorObj.selectedIndex;
  const bgColor = selectColorObj.options[index].value;

  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(canvas, context) {
  const radius = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, radius, 0, degreesToRadians(360), true);

  context.fillStyle = 'lightblue';
  context.fill();
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function updateTweets(tweets) {
  const tweetsSelection = document.getElementById('tweets');

  tweets.forEach(tweet => {
    let option = document.createElement('option');
    option.text = tweet.text;
    option.value = tweet.text.replace("\"", "'");

    tweetsSelection.options.add(option);
  });

  tweetsSelection.selectedIndex = 0;
}

function drawText(canvas, context) {
  let selectObj = document.getElementById('foregroundColor');
  let index = selectObj.selectedIndex;
  const fgColor = selectObj[index].value;

  context.fillStyle = fgColor;
  context.font = 'bold 1em sans-serif';
  context.textAlign = 'left';
  context.fillText('I saw this tweet', 20, 40);

  selectObj = document.getElementById('tweets');
  index = selectObj.selectedIndex;
  const tweet = selectObj[index].value;
  context.font = 'italic bold 1.2em serif';
  context.fillText(tweet, 30, 100);

  context.font = 'bold 1em sans-serif';
  context.textAlign = 'right';
  context.fillText(
    'and all I got was this lousy t-shirt!',
    canvas.width - 20,
    canvas.height - 40
  );
}
