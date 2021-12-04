/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Formulario from "views/Formulario/Formulario.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import ChatLayout from "views/Chat/ChatLayout.js";
import SearchLayout from "views/Search/SearchLayout.js";
import Search from "@material-ui/icons/Search";

//import Maps from "views/Maps/Maps.js";
//import NotificationsPage from "views/Notifications/Notifications.js";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/perfil",
    name: "Mi Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/user",
  },
  {
    path: "/foros-sociales",
    name: "Foros Sociales",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/user",
  },
  {
    path: "/foros-actividades",
    name: "Foros de Actividades",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/user",
  },
  {
    path: "/chat",
    name: "Chat",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: ChatLayout,
    layout: "/user",
  },
  {
    path: "/busqueda",
    name: "Buscar",
    rtlName: "طباعة",
    icon: Search,
    component: SearchLayout,
    layout: "/user",
  },
  {
    path: "/Formulario",
    name: "Formulario",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Formulario,
    layout: "/user",
  },
  /*{
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },*/



];

export default dashboardRoutes;
