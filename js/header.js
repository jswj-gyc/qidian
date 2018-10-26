$(function(){
  //动态创建link引用header.css
  $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
  //ajax请求header.html片段
  $.ajax({
    url:"http://localhost:3001/header.html",
    type:"get",
    success:function(res){
      $("#header").replaceWith(res)
    }
  })
})