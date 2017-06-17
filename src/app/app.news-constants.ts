export const NEWS_CONST = {

    //Base url from which the application is rendered
    "BASE": "http://localhost:3000/",
    "USER": "user/",
    "ADMIN": "admin/",
    "WEB":"web/",

    /*  Apis are made as constants and are loaded to the services, 
        import the constant file into the services and then call it like - 
        For API calls - APP.BASE_URL + APP.USER + APP.APIS.LOGIN
        For messages - APP.MESSAGES.USERNAME_REQUIRED
        For constants - APP.CONSTANTS.CONSTANTS_NAME
    */
    APIS: {
        // "GET_ARTICLES" : "getArticles"
            "GET_ARTICLES" : "science-and-nature"
    },

    MESSAGES: {
       
    },

    ROUTERLINKS: {
        
    }
}