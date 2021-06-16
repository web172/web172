	<center> <h2>评价表</h2></center>
  <ul style='list-style:none'>
  <% posts.forEach(function(post){ %>
    <li><a href='#' onclick="post_show(<%- post.id %>);" style="text-decoration:none"><%- post.id %>.<%- post.title %> </a>  </li>
  <% }) %>

<a href='#' onclick='post_new()'>新增</a>

