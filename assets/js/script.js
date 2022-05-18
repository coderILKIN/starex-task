$(document).ready(function(){
    // $("#hide").click(function(){
    //   $("p").hide();
    // });

    $(".head1").click(function(){
      $(".right-btn").show();
    })

    $(".txt-head1").click(function(){
        $(".text1").slideToggle(200);
        $(".text2").hide(1000);
        $(".text3").hide(1000);
        $(".text4").hide(1000);
      });

      $(".txt-head2").click(function(){
        $(".text2").slideToggle(200);
        $(".text1").hide(1000);
        $(".text3").hide(1000);
        $(".text4").hide(1000);
      });

      $(".txt-head3").click(function(){
        $(".text3").slideToggle(200);
        $(".text1").hide(1000);
        $(".text2").hide(1000);
        $(".text4").hide(1000);
      });

      $(".txt-head4").click(function(){
        $(".text4").slideToggle(200);
        $(".text1").hide(1000);
        $(".text2").hide(1000);
        $(".text3").hide(1000);
      });
     
  });
  
