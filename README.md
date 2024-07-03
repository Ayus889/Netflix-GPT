                                                    ## Netflix - GPT ##

- Create react app
- Configured TailwindCSS
- Routing of App
- created Sign In and Sign Up form
- Form validation
- useRef hook
- Firebase SetUp
- Firebase deployment
- Deploy our web app to production
- Implement SignUp and SignIn logic in foroum
- Created redux-store with userSlice
- Implemented signout features with firebase API
- Implemented Update API of firebase in authentication

- Bug fix: Set up display name and profile pic while sign up
- Buf fix: If user is logged in redirect it from /browse to login page.
- Unsubscribe to onAuthSateChange callback.
- Register TMDB API & after successful registration get access token
- Get Data from TMDB Now Playing movie list API
- Create Custom Hook for nowPlaying Movies
- Create movieSlice
- update Store with movies Date
- Divided browse page in two container
- Main container and secondary container
- Fetch Data for Trailer video to show in background like netflix
- Update Store with trailer Video data
- Embedded the Youtube video and make it autoplay and mute
- Create Custom hook for useMovieTrailer video

- Now build Secondary container
- Fetch data for NowPlayingMovies
- Update store with NowPlayingMovies data
- Create Custom hooks for useNowPlayingMovies to fetch and show as a movie card on browser
- Similarlly I'm created for Popular, Upcoming movies and Top rated list and show on browser
- Created scrollable movies cards/ list.
- Scrollbar fixed using npm install tailwind-scrollbar-hide.

- GPT Search features:
- Created seperate GptSearch page and add button on header for accessing.
- ** Additional features: Developed MultiLingual gptSearch page. **
- First integrate Gemini API (powered by google) with our react project.
- Second using text enter by user we search in Gemini and get the required results.
- Then with that results we search movie in TMDB with Search API and keep the movie data we get into our redux store.

# Features

// First page

- Sign In / Sign Up form
- Redirect to Browse page.

// Second page

# Browse (after authentication)

-> Main Movie

- Trailer in Background
- Title & Description
- Play button
- Movie Suggestion
- MovieList x n

Netflix-gpt

- Search Bar
- MovieSuggestion
