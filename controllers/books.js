import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      books,
      title: "All Books"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/books")
  })
}

function create(req, res) {
  console.log(req.body)
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books/new')
  })
}

function newBook(req,res) {
  res.render('books/new', {
    title: "Add Book"
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/books')
  })
}
  

export {
  index,
  create,
  newBook as new,
  deleteBook as delete
}