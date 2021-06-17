$.get("./addition/3.html",function(result)
		{
			$("#biaoge").html(result);
		});
		$.get("./addition/2.html",function(result)
		{
			$("#title").html(result);
		});
		function　iknow(sType){
			var f=document.forms[0];
			//var f=document.formTest;
			switch(sType){
				case "text":
					alert(f.textTest.value);
					//f.textTest.value="这是第二个新的输入";
					break;
				case "password":
					alert(f.passwordTest.value);
					break;

				case "textarea":
					alert(f.textareaTest.value) ;
					break;

				case "radio":
					for (var i=0;i<f.radioTest.length;i++)
						if (f.radioTest[i].checked==true)
							alert("第"　+　(i+1)  +"项被选中了！")
					break;

				case "checkbox":
					for(var i=0;i<f.checkboxTest.length;i++)
						if (f.checkboxTest[i].checked==true)
							alert("第"　+　(i+1)  +"项被选中了！")
					break;

				case "combox":
					var i=f.comboxTest.selectedIndex
					alert("第"　+ (i+1) + "项被选中了:"
					+ f.comboxTest.options[i].text);
					break;

				case "listbox":
					for(var i=0;i<f.listboxTest.length;i++)
						if (f.listboxTest.options[i].selected==true)
							alert("第"　+　(i+1)  + "项被选中了:" + f.listboxTest.options[i].text)
					break;

				case "file":
					alert(f.fileTest.value)
					break;

				case "hidden":
					alert(f.hiddenTest.value)
				}
		}
		function　create()
		{
			$(".list").append("<div><textarea name='textareaTest'cols='20' style='float: left;margin-right: 30px;'></textarea>"+
				"<a style='float: right;margin-right: 80px;'onclick='Delte(this)''>删除</a>"+"<textarea name='textareaTest'cols='60'></textarea></div>");

		}
		function　Delte(o)
		{
			$(o).parent().remove();
		}
		function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*1*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
function checkCookie(){
    var user=getCookie("username");
    if (user!=""){
        alert("欢迎 " + user + " 再次访问");
    }
    else {
        user = prompt("请输入你的名字:","");
          if (user!="" && user!=null){
            setCookie("username",user,30);
        }
    }
}
jQuery(document).ready(function($) {
      post_index();
    });

    function post_index(){
      $.get("./json/comment.json", function(data){

        $.get("./tpl/index.tpl", function(template){
          let html = ejs.compile(template)(data);
          $("#main").html(html);
        });

      })
    }

    function post_show(id){

      $.get("./json/comment.json", function(data){
        console.dir(data.posts);
        let post = data.posts.find(function(p){
          return p.id == id;
        });
        $.get("./tpl/content.tpl", function(template){
          let html = ejs.compile(template)(post);
          $("#main").html(html);
        });

      })
      
    }
    function change(id)
    {
      location.hash=id;
    }
    function sub()
    {
      document.form.submit();
      var x=document.getElementById("number").value
       var y=document.getElementById("name").value
       var z=document.getElementById("content").value
      if(x=="")
       {
        alert("请输入序号！");

       }
       else if(y=="")
       {
        alert("请输入文章名！");

       }
       else if(z=="")
       {
        alert("请输入文章内容！");

       }
      else
      {
        let post = {
            title: y ,
            content:z,
            id: x 
          }
          post_create(post);

      }
    }
     function sub1()
    {
      document.form.submit();
      var x=document.getElementById("number").value
       var y=document.getElementById("name").value
       var z=document.getElementById("content").value
       if(x=="")
       {
        alert("请输入序号！");

       }
       else if(y=="")
       {
        alert("请输入文章名！");

       }
       else if(z=="")
       {
        alert("请输入文章内容！");

       }
      else
      {
        let post = {
            title: y ,
            content:z,
            id: x 
          }
          console.log(post);
          post_update(post);

      }
    }
    function post_new(){
      // 生成一个表单 ，用于用户输入各字段
       $.get("./addition/form.html", function(result)
       {
        $("#main").html(result);
       });
       console.log(sub());
      // onsubmit() 执行数据检验，成功后才调用post_create()
      
      
    
          //

      
    }

    function post_create(post){
      $.post("http://127.0.0.1:3000/posts",
        post,
        function(data,status){
         //alert("数据: \n" + data + "\n状态: " + status);
         post_index();

        });
    }

    function post_delete(id){
      $.ajax({url:"http://127.0.0.1:3000/posts/" + id,type:'delete',
        success: function(){
         alert('删除成功');
         post_index();
        }
      });
    }

    function post_edit(id){
      // 动态生成编辑的表单界面，先获取已有的post
    $.get("./json/comment.json", function(data){
        let post = data.posts.find(function(p){
          return p.id == id;
        });
        $.get("./addition/form1.html", function(result)
          {
          $("#main").html(result);
          console.log(post);
          document.getElementById("number").value=post.id;
          document.getElementById("name").value=post.title;
          document.getElementById("content").value=post.content;
          });
        })

      // 把这个post赋值给表单中各控件的value
      // 提交时onsubmit(),获取修改后的value，形成post

      
    }

    function post_update(post){
      $.ajax({url:"http://127.0.0.1:3000/posts/" + post.id,type:'put',
        data: post,
        success: function(){
         alert('编辑成功');
        }
      });
      post_index();
    }

    function go_back(){
      post_index();
      window.location.reload();
      history.go(-1)
    }
  window.onhashchange = function() {

  var hash = window.location.hash
  var path = hash.substring(1)
  switch (path) {
    case '':
      post_index()
      break
// 可以进一步对path做解析和判断，获取id参数
    default:
    console.log(path);
    post_show(path) 
  }
}
 function show404NotFound()
 {
  var a="<h1>404NotFound</h1>"
  $("#main").html(a);
 }