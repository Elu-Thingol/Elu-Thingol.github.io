const domaim = document.domain;
let div = document.getElementById("page-404");
let script = document.createElement("script");
script.src = "//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js";
script.setAttribute("homePageName", "返回首页");
script.setAttribute("homePageUrl", `http://${domaim}`);
div.appendChild(script);
