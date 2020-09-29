var textarea = document.querySelector("textarea");
textarea.addEventListener("input", function () {
  // Set the words display to the number of words
  // figure out how many words there are
  var wordCount =
    document.getElementById("main-text-area").value.split(" ").length - 1;
  // update display of words
  document.getElementById("words-display").innerHTML =
    wordCount + (wordCount == 1 ? " Word" : " Words");

  // Set the characters display to the number of characters
  // figure out how many characters there are
  var charCount = document.getElementById("main-text-area").value.length;
  // update display of characters
  document.getElementById("characters-display").innerHTML =
    charCount + (charCount == 1 ? " Character" : " Characters");
});
