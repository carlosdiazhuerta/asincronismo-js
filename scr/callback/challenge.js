const xmlhttpRequesst = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';
function fechData(urlApi, callback){
let xhtpp = new xmlhttpRequesst();
xhtpp.open("GET", urlApi, true);
xhtpp.onreadystatechange = function(event){
    if(xhtpp.readyState === 4){
        if(xhtpp.status ===  200){
            callback(null, JSON.parse(xhtpp.responseText))
        }else{
            const error = new Error("error" + urlApi)
            return callback(error, null);
        }
    }
}
xhtpp.send()
}

fechData(`${API}/products`, function(error1,data1){
    if(error1) return console.error(error1);
    fechData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fechData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0])
            console.log(data2.title)
            console.log(data1.name)
        });
    });
});

