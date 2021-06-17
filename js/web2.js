    get_mode();
    function get_mode()
    {
        $.get("./json/data.json",function(posts)
        {
            $.get("./tpl/mode.tpl",function(result)
        {
            
            var a=ejs.compile(result)(posts);
            $("#main").html(a);
        });
        }); 
        $.get("./json/data1.json",function(posts)
        {
            $.get("./tpl/mode.tpl",function(result)
        {
            
            var a=ejs.compile(result)(posts);
            $("#main1").html(a);
        });
        }); 
        $.get("./json/data2.json",function(posts)
        {
            $.get("./tpl/mode.tpl",function(result)
        {
            
            var a=ejs.compile(result)(posts);
            $("#main2").html(a);
        });
        }); 
    }
     $.get("./addition/2.html",function(result)
    {
        $("#page").html(result);
    });
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