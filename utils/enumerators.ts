export enum AppUrls {
    Protected = "/protected",
    API = "/api",
    AUTH = "/auth",
    HomePage = "/",
    AccountInfoPage = AppUrls.Protected + "/account/info",
    AccountOrdersPage = AppUrls.Protected + "/account/orders",
    AccountPage = AppUrls.Protected + "/account",
    OrdersPage = AppUrls.Protected + "/orders",
    RegisterAPI = AppUrls.API + "/register",
    RegisterPage = AppUrls.AUTH + "/register",
    LoginAPI = AppUrls.API + "/login",
    LoginPage = AppUrls.AUTH + "/login",
    LogoutAPI = AppUrls.API + "/logout",
    GetSessionUserAPI = AppUrls.API + "/get-session-user",
    GetUsersAPI = AppUrls.API + "/get-users",
    searchAPI = AppUrls.API + "/search"
}