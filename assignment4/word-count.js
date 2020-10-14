// This doesn't even need to be in a function, but the requirements said
// for it to be so that's what I did...
function textAreaAction() {
  // Select the textarea from the DOM
  var textarea = document.querySelector("textarea");

  // Add an event listener for any input to the textarea
  textarea.addEventListener("input", function () {
    // Set the words display to the number of words
    // figure out how many words there are
    var wordCount =
      document.getElementById("main-text-area").value.split(" ").length - 1;
    // update display of word(s)
    document.getElementById("words-display").innerHTML =
      wordCount + (wordCount == 1 ? " Word" : " Words");

    // Set the characters display to the number of characters
    // figure out how many characters there are
    var charCount = document.getElementById("main-text-area").value.length;
    // update display of character(s)
    document.getElementById("characters-display").innerHTML =
      charCount + (charCount == 1 ? " Character" : " Characters");
  });
}
textAreaAction();
