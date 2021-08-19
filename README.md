# Premusic - Deezer

## Challenge


- The objective will be to implement a music listing and preview Web App.
- For this, the [Deezer API](https://developers.deezer.com/api/explorer?url=chart) will be used to request the necessary data.

## Requirements

- ReactJs ou ReactNative for web;
- Redux;
- Axios;
- Styled Components;

## UI

### Home:

- Should show list main songs of the moment;
- Should exist a field to search by text, where we can search by album, artist, or music title;
- When performing a search, the initial listing must be replaced by the listing referring to the search. (Use same listing component)
- The items of list should show:
	- Music data like (album cover, title, singer, duration;
	- A button to access the full song on Deezer;
	- A play/pause button to listen to the music preview;
	- A button to add the song to favorite music list;

### Musics of user:

- The list with the songs chosen by the user will be displayed on the main screen.
- The listing should be similar to the one on the home screen, but it should show the button to remove from the favorites list.


## Tips:

- List songs should are in Redux Store
	- Can save in browser (localstorage)
- Pagination to list songs from API
- Infinity scroll in songs list
