// Import data from data.js
import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

// Object literal that contains references to all the HTML elements
const html = {
  list: {
    button: document.querySelector("[data-list-button]"),
    message: document.querySelector("[data-list-message]"),
    overlay: document.querySelector("[data-list-active]"),
    close: document.querySelector("[data-list-close]"),
    items: document.querySelector("[data-list-items]"),
    blur: document.querySelector("[data-list-blur]"),
    image: document.querySelector("[data-list-image]"),
    title: document.querySelector("[data-list-title]"),
    subtitle: document.querySelector("[data-list-subtitle]"),
    description: document.querySelector("[data-list-description]"),
  },
  search: {
    button: document.querySelector("[data-header-search]"),
    overlay: document.querySelector("[data-search-overlay]"),
    cancel: document.querySelector("[data-search-cancel]"),
    form: document.querySelector("[data-search-form]"),
    authors: document.querySelector("[data-search-authors]"),
    genres: document.querySelector("[data-search-genres]"),
    title: document.querySelector("[data-search-title]"),
  },
  settings: {
    button: document.querySelector("[data-header-settings]"),
    overlay: document.querySelector("[data-settings-overlay]"),
    cancel: document.querySelector("[data-settings-cancel]"),
    form: document.querySelector("[data-settings-form]"),
    theme: document.querySelector("[data-settings-theme]"),
  },
};

let matches = books;
let page = 1;
const range = [0, BOOKS_PER_PAGE];

if (!books && !Array.isArray(books)) throw new Error("Source required");
if (!range && range.length < 2)
  throw new Error("Range must be an array with two numbers");

// CSS for light and dark mode
const css = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },

  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};

// fragment = document.createDocumentFragment()
// const extracted = books.slice(0, 36)

// for ({ author, image, title, id }; extracted; i++) {
//     const preview = createPreview({
//         author,
//         id,
//         image,
//         title
//     })

//     fragment.appendChild(preview)
// }

// data-list-items.appendChild(fragment)

// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, name]; Object.entries(genres); i++) {
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// data-search-genres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />

//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }

//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)

//     document.documentElement.style.setProperty('--color-dark', css[result].dark);
//     document.documentElement.style.setProperty('--color-light', css[result].light);
//     html.settings.overlay.open = false
// }

//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title

//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }

// Function for the search button click event and search overlay
const searchButtonClick = () => {
  html.search.overlay.open = true;
  html.search.title.focus();
};

// Function for the cancel search button click event and close search overlay
const searchCancelClick = () => {
  html.search.overlay.open = false;
  html.search.form.reset();
};

// Function for the settings button click event and settings overlay
const settingsButtonClick = () => {
  html.settings.overlay.open = true;
};

// Function for the cancel settings button click event and close settings overlay
const settingsCancelClick = () => {
  html.settings.overlay.open = false;
};

// Function
const listButtonClick = () => {
  const nextPage = currentPage + 1;
  currentPage = nextPage;
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const endIndex = currentPage * BOOKS_PER_PAGE;

  html.list.items.appendChild(
    createPreviewsFragment(matches, startIndex, endIndex)
  );
};

//
const listItemClick = (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active;

  //
  for (const node of pathArray) {
    if (active) break;

    //
    const previewId = node?.dataset?.preview;

    //
    if (!previewId) continue;

    //
    for (const singleBook of books) {
      if (singleBook.id === previewId) {
        active = singleBook;
        break;
      }
    }
  }

  if (!active) return;

  const { image, title, author, published, description } = active;

  html.list.blur.src = image;
  html.list.image.src = image;
  html.list.title.innerText = title;
  html.list.subtitle.innerText = `${authors[author]} (${new Date(
    published
  ).getFullYear()})`;
  html.list.description.innerText = description;

  html.list.overlay.open = true;
};

// Event listeners
html.search.button.addEventListener("click", searchButtonClick);

html.search.cancel.addEventListener("click", searchCancelClick);

html.settings.button.addEventListener("click", settingsButtonClick);

html.settings.cancel.addEventListener("click", settingsCancelClick);

html.list.button.addEventListener("click", listButtonClick);

html.list.items.addEventListener("click", listItemClick);
