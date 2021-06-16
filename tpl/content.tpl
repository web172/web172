<center><h3> <%= title %> </h1></center>
<hr/>
<p> <%= content %> </p>

<a href='#' onclick='post_edit(<%= id %>)'>编辑我</a>
<a href='#' onclick='post_delete(<%= id %>)'>删除我</a>

<hr/>
<a href='#' onclick='go_back()'>返回</a>