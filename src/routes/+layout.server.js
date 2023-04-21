import books from '../lib/books.json'
export const prerender = false;
export function load({ params }) {
    console.log(books)
    const book = books.find(book => book.slug === params.book)
    return {
        book: book
    }
}