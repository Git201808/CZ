using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CZ.Controllers
{
    public class MainController : Controller
    {
        // GET: Main
        //登录
        public ActionResult Login()
        {
            return View();
        }
        //主页
        public ActionResult Home()
        {
            return View();
        }
        //帮助
        public ActionResult Help()
        {
            return View();
        }
        //关系
        public ActionResult Contact()
        {
            return View();
        }
        //关于
        public ActionResult About()
        {
            return View();
        }
    }
}