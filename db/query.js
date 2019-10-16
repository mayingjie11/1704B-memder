const conncet = require('./index')

const query = (sql,params= []) => {
    return new Promise((resolve,reject) => {
        conncet.query(sql,params,(error,data) => {
            if(error){
                reject({msg:"error",error})
            }else{
                console.log(data)
                resolve({msg:'success',data})
            }
        })
    })
}

module.exports = query