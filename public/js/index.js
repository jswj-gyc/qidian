$(function(){
  $("div.cursor>ul").on("mouseover","li",function(){
    var $li=$(this)
    $li.children().children("span").css("margin-left","5px")
  }).on("mouseout","li",function(){
    var $li=$(this)
    $li.children().children("span").css("margin-left","0")
  })
  setInterval(function(){
    var $a=$("div.img>a.active")
    var $txt=$("div.txt>a.active")
    if($a.next().length!=0){
      $a.next().addClass("active")
      $txt.next().addClass("active")
    }else{
      $a.parent().children(":first-child").addClass("active")
      $txt.parent().children(":first-child").addClass("active")
    }
    $a.removeClass("active")
    $txt.removeClass("active")
  },3000);
  var op,num
  (async function(){
    op="week"
    num="10"
    var res=await $.ajax({
      url:"http://localhost:3001/index/sel",
      type:"get",
      data:{op,num},
      dataTyep:"json",
      success:function(){
        console.log(res)
        
      }
    })
  })()
})

