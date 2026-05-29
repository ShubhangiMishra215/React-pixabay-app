# Frontend Mentor - Pixabay Image Gallery

A responsive image gallery built with React and Tailwind CSS, powered by the Pixabay API. Features keyword search, category filters, infinite scroll, and a favourites system with localStorage persistence.

## Welcome! 👋

Thanks for checking out this frontend project.

**To do this challenge, you need a good understanding of HTML, CSS, and JavaScript along with React.**

## The challenge

Users should be able to:

- Search for images using keywords
- Browse images by category (Trending, Nature, Travel, etc.)
- Infinite scroll to load more images automatically
- Like/unlike images and save favourites to localStorage
- View favourites separately
- See hover states for all interactive elements on the page

## Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL:(https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [React](https://reactjs.org/) - JS library
- [Lucide React](https://lucide.dev/) - Icon library
- [Pixabay API](https://pixabay.com/api/docs/) - Image data
- Custom React hooks
- localStorage for persistence
- Mobile-first workflow

### What I learned

Managing infinite scroll without duplicate API calls was a key challenge. Using a `useRef` lock alongside React state solved the race condition where scroll events fired before `loadingMore` state had updated:

```js
const isFetchingMore = useRef(false);

useInfiniteScroll(() => {
  if (!isFetchingMore.current && !loadingMore && hasMore && !loading) {
    isFetchingMore.current = true;
    setPage((prev) => prev + 1);
  }
}, [loadingMore, hasMore, loading]);
```

Consolidating all search triggers through a single `[query]` useEffect eliminated double API calls that were causing 429 rate limit errors:

```js
useEffect(() => {
  resetImages();
  setPage(1);
  fetchImages(query, 1, false);
}, [query]);
```

### Continued development

In future projects I want to focus on:

- Adding image lightbox/modal on click
- Download functionality for images
- Pagination as an alternative to infinite scroll
- Unit tests for custom hooks

### Useful resources

- [Pixabay API Docs](https://pixabay.com/api/docs/) - Helped me understand rate limits and available image URL fields
- [React useRef docs](https://react.dev/reference/react/useRef) - Useful for understanding how to use refs for non-rendering state
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Great reference for utility classes

## Author

- GitHub - [@ShubhangiMishra215](https://github.com/ShubhangiMishra215)

## Acknowledgments

Thanks to the Pixabay team for providing a free API for developers.
