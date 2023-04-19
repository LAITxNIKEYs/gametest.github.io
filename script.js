var correctAnswers = 0;
var wrongAnswers = 0;

function checkAnswer(image) {
 if (image.src === "src\vopr1\Ircuts.png", image.src === "src\vopr 2\PiramidDMD.png", image.src === "src\vopr3\Lenin.png", image.src === "src\vopr4\Moscov.png", image.src === "src\vopr5\Piterburg.png") {
  correctAnswers++;
 } else {
  wrongAnswers++;
 }
 if (correctAnswers + wrongAnswers < 5) {
    var nextScene = "scene" + (correctAnswers+wrongAnswers+1) + ".html";
  location.href = nextScene;
  console.log(nextScene)
 } else {
  var resultScene = "result.html";
  location.href = resultScene;
 }
}