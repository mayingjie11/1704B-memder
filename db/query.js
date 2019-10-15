const conncet = require('./index')

const query = (sql) => {
    return new Promise((resolve,reject) => {
        conncet.query(sql,(error,data) => {
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
}

module.exports = query