const conTxt = document.querySelectorAll('.slide .txt p');

conTxt.forEach(element => {
  const cutTxt = element.textContent.slice(0, 70) + "...";
  element.textContent = cutTxt;
});


