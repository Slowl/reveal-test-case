# Explanations on what I did

For home technical tests, I almost always like to spend more time (if I can/have) to make them more fun for myself.
I enjoy going a bit further than what we are asked for and take the opportunity to learn new things with each test.

For this test, I decided to implement the best (in my opinion) pagination solution in term of user experience. For this, I had to:

  - Update the backend to add a new API route (`/api/count/cities`)
  - Spend way for time to implement the logic behind it

# Talking about time

The first version of the app took me around 2h, this version had:
  - A rigid, not very modular code
  - A simple button to fetch more cities (100 per request)
  - Undocumented code

Then the second version with the enhanced pagination solution took me around 3h, this version had:
  - A way better pagination system
  - A better code/folder structure
  - A documented code

The final version, with some fixes and a better design took me around 2h, I've added:
  - A better and user friendly design (even if it's not important for the test, that's something I really enjoy to do)
  - Added current selected country indicator
  - Fixed small UX issues (country list refresh on each country selection for example)


## <u>TLDR</u>: The test took me around 2h to implement most of the requirements. But to ship an app I'm proud of and which I enjoyed to code, it took me around 7h-8h, divided on 3 evenings.
