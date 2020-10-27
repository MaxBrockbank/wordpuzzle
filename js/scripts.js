$(document).ready(function () {
  $("form#puzzle").submit(function (event) {
    event.preventDefault();
    const inputText = $("input#input-phrase").val();
    const originalInputText = inputText;
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const resultDiv = $(".puzzle-phrase");
    function makePuzzle(userInput, exclusions) {
      let newText = userInput;
      for (let i = 0; i < userInput.length; i++) {
        if (exclusions.includes(userInput[i])) {
          newText = newText.replaceAll(userInput[i], "-");
        }
      }
      resultDiv.text(newText);
      $("input#input-phrase").val("");
      $(".btn-warning")
        .show()
        .click(function () {
          resultDiv.text(originalInputText);
        });
    }
    makePuzzle(inputText, vowels);
  });
});
