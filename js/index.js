// $(function () {
//   const selector = $(".slick-dots");
//   console.log(selector);
//   // for (let i = 0; i < nameArr.length; i++) {
//   //   $(".slick-dots li").data("thumb", nameArr[i]);
//   //   console.log(nameArr[i]);
//   // }
// });

const textBox = document.querySelectorAll(".text_box p.desc");
const textWidth = textBox.offsetWidth; //500px
// const desc = textBox.lastChild.length;
for (i = 0; i < textBox.length; i++) {
  var desc = textBox[i].lastChild.length;
  console.log(desc[i].offsetWidth);
  // for (j = 0; j < desc.length; j++){
  //   if(desc[i] > ){

  //   }
  // }
}
// console.log(textBox);
