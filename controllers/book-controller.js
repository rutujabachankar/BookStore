

const book = require("../models/book");

const addNewBook = async (req, res) => {
    try {
        const newBook = req.body

        const newlyCreatedBook = await book.create(newBook)
        if(newBook){

        res.status(201).json({
            success: true,
            msg: "Book created successfully",
            data: newlyCreatedBook
        })
    }
        else{
            res.status(400).json({
                success:false,
                msg:'no books found in callection'
            })

        }

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            msg: "Something went wrong! Please try again."
        })
    }

}

const getAllBooks = async (req,res)=>{
    try{
        const allBooks = await book.find({})
        if(allBooks?.length>0){
            res.status(200).json({
                success:true,
                msg:'list of books fetched successfully ',
                data:allBooks
            })
        }
        else{
            res.status(404).json({
                success:false,
                msg:'no books found in collections'
            })
        }
    }catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}
const getSingleBookById = async(req,res)=>{
    try{
        const getCurrentBookById =req.params.id
        const bookDetailbyId = await book.findById(getCurrentBookById)

        if(!bookDetailbyId){
            return res.status(404).json({
                    success:false,
                 msg:'book with current id not found'
                
            })
        }

        res.status(200).json({
          success:false,
         data:bookDetailbyId

    }
)}
catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}
const updateBook = async(req,res)=>{
    try {
        const updatedBookFromData = req.body
        const getCurrentBookId = req.params.id
        const updatedBook = await book.findByIdAndUpdate(
            getCurrentBookId,
            updatedBookFromData,
            {
                new:true
            }
        )
        if(!updatedBook){
            res.status(404).json({
                succes:false,
                msg:'book not found'
            })
        }
        res.status(200).json({
            success:true,
            msg:'book updated successfully',
            data:updatedBook
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}
const deleteBook = async(req,res)=>{
    try{
        const getCurrentId = req.params.id
        const deleteBook = await Book.findByIdAndDelete(getCurrentId)

        if(!deleteBook){
            res.status(404).json({
                succes:false,
                msg:'book not found'
            })
        }
        res.status(200).json({
            success:true,
            data:deleteBook
        })
    }
     catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}

module.exports = {
    addNewBook,
    getAllBooks,
    getSingleBookById,
    updateBook,
    deleteBook
}