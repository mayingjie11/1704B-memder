const mysql = require('mysql')

const conncetion = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'1704b'
})
conncetion.connect((error) => {
    if(error){
        console.log('链接未成功')
    }else{
        console.log('数据库连接成功')
    }
})

module.exports = conncetion