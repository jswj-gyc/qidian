$(function(){
  //动态创建link引用header.css
  $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head")
  //ajax请求header.html片段
  $.ajax({
    url:"http://localhost:3001/footer.html",
    type:"get",
    success:function(res){
      $("#footer").replaceWith(res)
    }
  })
})