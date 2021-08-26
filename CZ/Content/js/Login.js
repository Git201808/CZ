var mm = document.getElementById("mm")//获取会员登陆
var dt = document.getElementById("dt")//获取动态登陆
var mmbox = document.getElementById("memberBox");
var mmlogin = document.getElementById("dynamicPswBox");
var loginProtocol1 = document.getElementById("loginProtocol")//获取iput标签
var dl_login = document.getElementById("mem_btn_login")//获取登陆框
var qq = document.getElementById("qq");//获取qq
var wx = document.getElementById("wx");//获取微信
var mima = document.getElementById("userId");//获取使用账号
var text = document.getElementById("passWordPH");//获取密码txt文本显示框
var password = document.getElementById("passWord");//获取密码
//账号显示框样式的改变

loginProtocol1.onclick = function () {
    if (loginProtocol1.checked) {
        dl_login.setAttribute("class", "btn long-btn login-btn");
        qq.setAttribute("class", "qqlogin")
        wx.setAttribute("class", "weixinlogin")
    } else {
        dl_login.setAttribute("class", "btn long-btn login-btn disabled");//前面放置属性后面设置属性值
        qq.setAttribute("class", "qqlogin disabled")
        wx.setAttribute("class", "weixinlogin disabled")
    }

}

mm.onclick = function () {
    mm.setAttribute("class", "left member-login current")
    dt.setAttribute("class", "left psw-login")
    mmbox.setAttribute("class", "lg-tabcontent")
    mmlogin.setAttribute("class", "lg-tabcontent hide")

}
dt.onclick = function () {
    mm.setAttribute("class", "left member-login")
    dt.setAttribute("class", "left psw-login current")
    mmbox.setAttribute("class", "lg-tabcontent hide")
    mmlogin.setAttribute("class", "lg-tabcontent")
}

