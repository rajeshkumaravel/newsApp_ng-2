/*
 *  CONSTANTS File : All the constants used in application will be loaded from this file
*/

/*
 * Usage : 1. Accessing BASE Url    - "NEWS_CONST.BASE"
 *         2. To construct API Call - "NEWS_CONST.BASE + ROUTE.route_name"
 * ** import CONSTANTS File at required component / service
*/
export const NEWS_CONST = {

    // URL for Middleware Server
    API_SERVER_BASE: "http://localhost:3000/",
    ROUTE : {
            "GET_RANDOM_ARTICLES" : "home",
            "GET_TECHNOLOGY_ARTICLES" : "technology",
            "GET_GENERAL_ARTICLES" : "general",
            "GET_SPORTS_ARTICLES" : "sports",
            "GET_BUSINESS_ARTICLES" : "business",
            "GET_SCIENCE_AND_NATURE_ARTICLES" : "science-and-nature"
    },
/*
 * Usage : To display notification messages
*/
    MESSAGES: {
       
    }
}