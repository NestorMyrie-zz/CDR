for (i = 0; i < $(".expinfo").length; i++) {
  var btns = $(".slidebar");
  elementr = document.createElement("li");
  elementr.setAttribute("class", "circle");
  elementr.setAttribute("id", `circle${i}`);

  btns.append(elementr);
}

$("#circle0").addClass("circleselect");

$("#cont").click(() => {
  $("#f").toggleClass("rt1");
  $("#ff").toggleClass("oc1");
  $("#fff").toggleClass("rt2");
  $(".sbmenu").toggleClass("btnms");

  $(".opdacidbg").toggleClass("blk");
});

$("#circle0").click(() => {
  $("#container").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
$("#circle1").click(() => {
  $("#container").animate(
    {
      scrollTop: 730,
    },
    600
  );

  $("#circle2").click(() => {
    $("#container").animate(
      {
        scrollTop: 1730,
      },
      600
    );
  });
});

class circles {
  constructor(ad, rem1, rem2) {
    this.ad = ad;
    this.rem1 = rem1;
    this.rem2 = rem2;
  }
  togle() {
    $(this.ad).click(() => {
      $(this.ad).addClass("circleselect");
      $(this.rem1).removeClass("circleselect");
      $(this.rem2).removeClass("circleselect");
    });
  }
}

var circ0 = new circles("#circle0", "#circle1", "#circle2");
circ0.togle();
var circ1 = new circles("#circle1", "#circle0", "#circle2");
circ1.togle();
var circ2 = new circles("#circle2", "#circle0", "#circle1");
circ2.togle();

$("#container").scroll(() => {
  if ($("#container").scrollTop() > 300) {
  }
});
var cont = 0;
$("#frcarousel").click(() => {
  cont++;
  if (cont == 1) {
    $("#frcarousel").attr("src", "../img/plus.svg");
  } else if (cont == 2) {
    $("#frcarousel").attr("src", "../img/menos.svg");

    cont = 0;
  }

  $(".carousel-p1").slideToggle();
});
$("#scdcarousel").click(() => {
  $(".carousel-p2").slideToggle();

  cont++;
  if (cont == 1) {
    $("#scdcarousel").attr("src", "../img/menos.svg");
  } else if (cont == 2) {
    $("#scdcarousel").attr("src", "../img/plus.svg");

    cont = 0;
  }
});

$("#edej").click(() => {
  $(".servicdiv").slideUp();
  $(".redirecth1").slideUp();
  $(".arrow-up").slideDown();
});
$(".arrow-up").click(() => {
  $(".servicdiv").slideDown();
  $(".redirecth1").slideDown();
  $(".arrow-up").slideUp();
});





class showhiden{
  constructor(clk,mos,ocul1,ocul2,ocul3){
    this.clk = clk;
    this.mos = mos;
    this.ocul1= ocul1;
    this.ocul2= ocul2;
    this.ocul3= ocul3;
  }
addrem(){
  $(this.clk).click(()=>{
    $(this.mos).slideDown()
    $(this.ocul1).slideUp()
    $(this.ocul2).slideUp()
    $(this.ocul3).slideUp()
   
  })

}
}
var btnone= new showhiden('#wo1','.firstdiv','.secondtdiv','.trediv','.cuartdiv')
btnone.addrem()

var btntwo= new showhiden('#wo2','.secondtdiv','.firstdiv','.trediv','.cuartdiv')
btntwo.addrem()


var btntre= new showhiden('#wo3','.trediv','.firstdiv','.secondtdiv','.cuartdiv')
btntre.addrem()

var btncuat= new showhiden('#wo4','.cuartdiv','.secondtdiv','.firstdiv','.trediv')
btncuat.addrem()
/*$('.enviar').mouseover(()=>{
 
    $('.arrowenv').animate({
      left: 10
  },400)

    
})
$('.enviar').mouseout(()=>{
    $('.arrowenv').animate({
        left: 0
    },300)
    
})
 */
$('#accordion div p').css({width:'80vh'})



/** slider acordeon*/

