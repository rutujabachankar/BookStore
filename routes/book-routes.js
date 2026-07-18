const express=require('express')
const { addNewBook, getAllBooks, getSingleBookById, updateBook, deleteBook} = require('../controllers/book-controller')

const router=express.Router()

router.post('/add', addNewBook)
router.get('/get',getAllBooks)
router.get('/get/:id',getSingleBookById)
router.put('/update/:id',updateBook)
router.delete('/delete',deleteBook)

module.exports=router