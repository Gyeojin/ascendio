// $(function () {
//   const selector = $(".slick-dots");
//   console.log(selector);
//   // for (let i = 0; i < nameArr.length; i++) {
//   //   $(".slick-dots li").data("thumb", nameArr[i]);
//   //   console.log(nameArr[i]);
//   // }
// });

// const textBox = document.querySelectorAll(".text_box p.desc");
// const textWidth = textBox.offsetWidth; //500px
// // const desc = textBox.lastChild.length;
// for (i = 0; i < textBox.length; i++) {
//   var desc = textBox[i].lastChild.length;
//   console.log(desc[i].offsetWidth);
//   // for (j = 0; j < desc.length; j++){
//   //   if(desc[i] > ){

//   //   }
//   // }
// }
// // console.log(textBox);

// $(function () {
//   $(document).ready(function () {
//     $(".artist_container").wheel(function (e, delta) {
//       this.scrollLeft -= delta * 500;
//       e.preventDefault();
//     });
//   });
// });

// $(function () {
//   $(".artist_container").on("mousewheel", function (event, delta) {
//     if (delta > 0) {
//       $(this).scrollLeft -= delta * 500;
//     } else if (delta < 0) {
//       $(this).scrollLeft += delta * 500;
//     }
//   });
// });

$(function () {
  // $(".artist_container")
  //   .mouseover(function () {
  //     $("body").css("overflow-y", "hidden");
  //   })
  //   .mouseout(function () {
  //     $("body").css("overflow-y", "auto");
  //   });

  $(".artist_container").on("mousewheel", function (e) {
    var wheelDelta = e.originalEvent.wheelDelta;
    var boxWidth = $(this).scrollLeft(); //최소 0 ~ 최대 2464
    console.log(boxWidth);
    if (boxWidth == 0 || boxWidth == 2464) {
      $("body").css("overflow-y", "auto");
    } else {
      $("body").css("overflow-y", "hidden");
    }

    if (wheelDelta > 0) {
      //스크롤 up 시 -150 찍힘
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
      //-(-150)+ 현재 요소의 스크롤 위치
    } else {
      //스크롤 down tl +150 찍힘
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
  });
});
