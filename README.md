# Assessment: Github Search clone

<p>
A Github search app that allows an authenticated Github user to search
Github repositories and users, using their search parameters.
</p>

<p align="center">
    <a href="#-build-instructions">Build Instructions</a> •
    <a href="#-testing-instructions">Testing</a> •
    <a href="#-setup-keys">Setup Keys</a>
</p>

## Build Instructions

1. Clone project in the folder of your preference

   ```bash
       git clone https://github.com/brianmwadime/github-search-assessment.git
   ```

2. Enter the project directory

   ```bash
   cd github-search-assessment
   ```

3. <a href="#-setup-envars">Setup environment variables</a>

4. Install the third party dependencies and tools required to run the project.

   ```bash
   yarn install
   ```

5. To run the app in developer mode

   ```bash
   yarn start
   ```

   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
   The page will reload if you make edits.\
   You will also see any lint errors in the console.

6. Or to build the app for production.

   ```bash
   yarn build
   ```

   Builds the app for production to the `build` folder.\
   It correctly bundles React in production mode and optimizes the build for the best performance.

   The build is minified and the filenames include the hashes.\
   The app is ready to be deployed!

## Testing Instructions

1. To run the apps unit tests

   ```bash
   yarn test
   ```

2. Or to run the apps E2E tests

   ```bash
   yarn start && yarn cypress:open
   ```

## Setup Envars

1. Copy `.env.defaults` to `.env` in the root folder.

2. Replace `client_id` with your client id from Github

3. Replace `proxy_url` with your proxy server url.
