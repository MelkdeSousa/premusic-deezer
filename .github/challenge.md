# Premusic - Deezer

## Challenge

- The objective will be to implement a music listing and preview Web App.
- For this, the [Deezer API](https://developers.deezer.com/api/explorer?url=chart) will be used to request the necessary data.

## Requirements

- Redux;
- Axios;
- Styled Components;

## UI

### Home:

- [x] Should show list main songs of the moment;
- [x] Should exist a field to search by text, where we can search by album, artist, or music title;
- [x] When performing a search, the initial listing must be replaced by the listing referring to the search. (Use same listing component)
- The items of list should show:
  - [x] Music data like (album cover, title, singer, duration);
  - [x] A button to access the full song on Deezer;
  - [x] A play/pause button to listen to the music preview;
  - [x] A button to add the song to favorite music list;

### Musics of user:

- [x] The list with the songs chosen by the user will be displayed on the main screen.
- [x] The listing should be similar to the one on the home screen, but it should show the button to remove from the favorites list.

## Tips:

- [x] List songs should are in Redux Store
  - [x] Can save in browser (localstorage)
- [x] Pagination to list songs from API
- [x] Infinity scroll in songs list
