import books from '../lib/books.json'
export const prerender = false;
export function load({ params }) {
    (params)
    const book = books.find(book => book.slug === params.book)
    return {
        book: book
    }
}