start client with

# yarn run dev

# install server dependencies with yarn init-server

# run server with yarn server

- I used RHF for handing form - react-modal-sheet for modal
- Unfortunately, I haven't had time to handle and preserve login data properly (with redux).
  so I added a query param on successful register to homePage to detect whether the user logged in or not
- I preferred to change the login and register flow a bit. It didn't make sense to show the register at first.(we could also discuss it in a meeting)
- I didn't have time for the desktop design.
- Not all the required data was sent by calling the endpoint.
