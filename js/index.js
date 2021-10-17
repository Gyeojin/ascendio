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
  // $(".artist").mouseover(function () {
  //   //alert("MouseOver!"); 결과 : 성공
  //   $(".artist_container").on("scroll touchmove mousewheel", (e) => {
  //     $("body").scrollTop(0);
  //   });
  //   // $("body").on(
  //   //   "scroll touchmove mousewheel",
  //   //   function (e) {
  //   //     e.preventDefault();
  //   //     e.stopPropagation();
  //   //     return false;
  //   //   },
  //   //   { passive: false }
  //   // );
  // });

  $(".artist_container").on("mousewheel", function (e) {
    $("body").scrollTop(0);
    var wheelDelta = e.originalEvent.wheelDelta;
    console.log(wheelDelta);
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
