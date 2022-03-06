$(document).ready(() => {
  let text = $("#name");
  let splittedText = text.html().split("");
  text.empty();

  for (i = 0; i < splittedText.length; i++) {
    text.innerHTML += text.append("<span>" + splittedText[i] + "</span>");
  }

  const nameAnim = (pos) => {
    const timer = setTimeout(() => {
      $("#name span").eq(pos).addClass("fade");
      nameAnim(pos + 1);
    }, 200);

    if (pos == splittedText.length) {
      console.log("done");
      clearTimeout(timer);
    }
  };
  nameAnim(0);
});
