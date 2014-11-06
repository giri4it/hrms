<%--
  Created by IntelliJ IDEA.
  User: gireesh.babu
  Date: 15/05/14
  Time: 1:09 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title></title>
    <meta charset="utf-8">
    <link rel="stylesheet" href='<c:out value="${pageContext.servletContext.contextPath}" />/css/theme.css' type="text/css" media="screen" />

</head>
<body>
<div id="container" class="ui-widget">
    <div id="titile" class="ui-widget-header">
        Human Resources Management Portal
    </div>
    <div id="menu-region" class="menu-region">

    </div>
    <div id="main-region" class="main-region">
        content of the home page
    </div>
    <div class="login-region" id="login-region">
        content of the Login Area
    </div>
    <div class="footer"></div>

</div>

<script data-main="<%=request.getContextPath()%>/js/main.js"
        src="<%=request.getContextPath()%>/js/require.js"></script>


</body>
</html>
