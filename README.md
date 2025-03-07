# Netflix GPT

- npx create-react-app netflix-gpt
- configured tailwindcss
- Header
- Routing of App
- Login form
- Sign up form
- Form validation
- useRef hook
- Firebase setup
- Deploying out app to production
- Create signUp user account
- Implement sign in user Api
- Created our redux store with userSlice
- Implemented sign out
- Update profile api
- Fetch from tmdb Movies
- BugFix: sign up user displayName and profile picture update
- BugFix: if the user is not logged in redirect/browse to login page and vice-versa
- Unsubscribed to the onAuthStateChange callback
- Added hard coded values to constant file
- RegisterTMDB api & create an app & get access token
- Get data from tmdb now playing movies list API
- Custom hook for now playing movies
- Create movieSlice
- update store with movies data
- Planning for maincontainer and secondary container
- Fetch data for trailer video
- Update the store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Added tailwind classes to make maincontainer look awesome

# Building Browser (Planing)
- Main container
  - Video background
  - Video title
- Secondary container
  - Movies * n
  - Cards * n


# Features
- Login signup page
  -Sign In / Sign up form - redirect to browser page
- Browse (only comes after authentication)
  - Header
  - Main movie
    - Trailer in background
    - Title and description
    - Movie suggestions
      -Movie lists * n -- vertically scroll
- NetflixGPT
  - Search Bar
  - Movie suggestions