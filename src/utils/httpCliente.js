const API = "https://api.themoviedb.org/3"

export const get = (path) =>{
    return fetch (API+path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2M3MzhjNjNkNWVlNDgxYjc2MWI5YmU2ZDVhZjk2YiIsIm5iZiI6MTczMjU2Mjc0OC44OTEsInN1YiI6IjY3NDRjZjNjODMxNThiMGIyNjQ3ZmVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qU5tbt1oCh_HQsRAE-9ZBl8Y1eaXwnxvZ8-ufxBgnSM",
            "Content-Type" : "application/json;charset=utf-8"
        }
    }).then((results)=>results.json())
}