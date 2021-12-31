const router =  require('express').Router()
router.get('/',(req,res)=>{
    res.send('hello famous world!')
})
module.exports = router