<%--
  Created by IntelliJ IDEA.
  User: gireesh.babu
  Date: 24/05/14
  Time: 11:47 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
</head>
<body>
<form action="/controller/login/authenticate" method="POST">
    <label>Username</label>
    <input type="text" name="userName" />
    <label>Password</label>
            <input type="password" name="password">
    <input type="submit" value="Login" />
</form>
</body>
</html>
