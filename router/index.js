const router = require('koa-router')()

const query = require('../db/query')

//查询
router.get('/api/userlist', async (ctx) => {
   let data = await query('select * from userlist')
    ctx.body = data.data
})

//添加
router.post('/api/add', async (ctx)=>{
    let {name,age,sex,address,idCoad} =  ctx.request.body
    let sql = 'insert into userlist (name,age,sex,address,idCoad) values (?,?,?,?,?)';
    let sqla = await query('select * from userlist where idCoad=?',[idCoad])

    if(sqla.data.length){
        return ctx.body={code:1,msg:'用户已在'}
    }else{
        let data =  await query(sql,[name,age,sex,address,idCoad])
        if(data.msg === 'success') {
            ctx.body = {code:2,msg:'添加成功'}
        }else {
            ctx.body = {code:3,msg:'添加失败'}
        }
    }
})

//删除
router.get('/api/delete',async (ctx) => {
    let {id} =  ctx.query
    let sql = 'delete from userlist where id=?'
    let data = await query(sql,[id])
    
    if(data.msg === 'error') {
        ctx.body = {code:0,msg:'删除失败'}
    }else {
        ctx.body = {code:1,msg:'删除成功'}
    }

})

//修改 

router.post('/api/updata', async (ctx) => {
    let {name,age,sex,address,idCoad,id} =  ctx.request.body

    let sql = 'updata  userlist u set u.name=? u.age=? u.sex=? u.address=? u.idCoad=? u.id=?' 

    let res = await query(sql,[name,age,sex,address,idCoad,id])

    if(res === 'error'){
        ctx.body = {code:0,msg:'修改失败'}
    }else {
        ctx.body = {code:1,msg:'修改成功'}
    }
})

module.exports = router