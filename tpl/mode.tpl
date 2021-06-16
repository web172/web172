
<% posts.forEach(function(post){ %>
		  <button class="button">
     		<a class="web-font"style="text-decoration: none;float: left;" href="./网页3.html"> <%= post.content %> </a>
     	<a style="text-decoration: none;float: right;margin-top: 3px;" href="./网页3.html"><%= post.date %> </a>
     	<a style="text-decoration: none;float: right;margin-right: 30px;margin-top:0px;" href="./网页3.html"> <%= post.name %> </a>
     </button>
	<% }) %>
