
import booksJson from '$lib/books.json'
export async function load({ params }) {
    const { book, chapter } = params;
    const blogPost = await import(`../../../lib/${book}/${chapter}.md`);
    const currentBook = booksJson.find(bk => bk.slug === book)
    const allSlugs = currentBook.chapters.map(i => i.slug)
    const allNames = currentBook.chapters.map(i => i.name)
    const idx = allSlugs.indexOf(chapter)
    let next = undefined;
    let prev = undefined;
    if (idx === 0) {
        if ((allSlugs.length - 1) > 0) {
            next = {
                slug: allSlugs[idx + 1],
                name: allNames[idx + 1]
            }
        }
    } else if (idx !== -1) {
        if ((allSlugs.length - 1) === idx) {
            prev = {
                slug: allSlugs[idx - 1],
                name: allNames[idx - 1]
            }
        } else {
            next = {
                slug: allSlugs[idx + 1],
                name: allNames[idx + 1]
            }
            prev = {
                slug: allSlugs[idx - 1],
                name: allNames[idx - 1]
            }
        }
    }
    let content = blogPost.default.render()
    return {
        props: {
            content: content.html,
            next,
            prev,
            meta: blogPost.metadata
        }
    }
}