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
    op="month"
    num=10
    var res=await $.ajax({
      url:"http://localhost:3001/index/sel",
      type:"get",
      data:{op,num},
      dataTyep:"json"
    })
    var $tui=$("div.tuijian>ul.tui")
      var html="<li><h4>本周强推</h4></li>"
      for(i=0;i<res.length;i++){
        var {g,bname,aname}=res[i]
          html+=`<li>
          <a href="#">[${g}]</a>
          <a href="#">${bname}</a>
          <a href="#">${aname}</a>
        </li>`
      }
      $tui.html(html)
  })();
  (async function(){
    op="week"
    num=10
    var res=await $.ajax({
      url:"http://localhost:3001/index/sel",
      type:"get",
      data:{op,num},
      dataTyep:"json"
    })
    var $new=$("div.tuijian>ul.new")
      var html="<li><h4>三江·网文新风</h4></li>"
      for(i=0;i<res.length;i++){
        var {g,bname,aname}=res[i]
          html+=`<li>
          <a href="#">[${g}]</a>
          <a href="#">${bname}</a>
          <a href="#">${aname}</a>
        </li>`
      }
      $new.html(html)
  })();
  (async function(){
    op="updata"
    num=17
    var res=await $.ajax({
      url:"http://localhost:3001/index/sel",
      type:"get",
      data:{op,num},
      dataTyep:"json"
    })
    var $updata=$("div.updata>ul>li>ul")
      var html=""
      for(i=0;i<res.length;i++){
        var {g,bname,aname,updata}=res[i]
          html+=`<li>
          <a href="#">[${g}]</a>
          <a href="#">《${bname}》</a>
          <a href="#">第xxxx章 xxxxx</a> 
          <a href="#">${aname}</a>
          <span>${updata.slice(0,10)}</span>
        </li>`
      }
      $updata.html(html)
  })();
  
  
})

