<hr>
<h1 style="text-align:center;width:100%;">Ride Share</h1>
<hr>

- [:rocket: Getting Started](#rocket-getting-started)
- [:ledger: Project Structure](#ledger-project-structure)
  - [:page_facing_up: Pages](#page_facing_up-pages)
    - [Nearest Rides](#nearest-rides)
  - [:gear: Services](#gear-services)
    - [Hooks](#hooks)
    - [Rides](#rides)
    - [Users](#users)
    - [Components](#components)
  - [:open_file_folder: Models](#open_file_folder-models)

## :rocket: Getting Started

1. Clone the repository from `https://github.com/ajaytitus1386/RideShareTask.git` using your preferred method.

2. Next, navigate to the root of the project and install the dependencies:

   ```bash
   yarn install
   ```

3. Then, run the **development server**:

   ```bash
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see a development preview.

<hr>

Or just head to [https://ride-share-task.vercel.app/](https://ride-share-task.vercel.app/) to see the **deployed build**!

## :ledger: Project Structure

### :page_facing_up: Pages

NextJS conveniently handles page routing by integrating it into the folder structure. For example here, the file `rides/nearest.tsx` would lead to the route `localhost:3000/rides/nearest`

The `_app.tsx` file is the root of the project followed by `index.tsx` which here immediately re-directs to the nearest rides page.
`_document.tsx` is a server-rendered page that is used to update the `<head>` tags throughout the app.

#### Nearest Rides

`rides/nearest.tsx` is the landing and primary page of the web app. The page is pre-rendered at build time using `getStaticProps` to fetch User and Rides.
`UseEffect` and `UseState` Hooks are applied to manage state and state updates.
By default, all the rides will be ordered by nearest and rendered as cards. Three tabs: Nearest, Upcoming and Past can be used to filter the rides according to their dates _(Nearest does no filtering and returns the full list of Rides)_.

The Filters Tab to the right will open on either Click or Hover Over events from the cursor. It reveals two more dropdowns for States and Cities respectively.

- Selecting an option from either one, will filter the list of rides and render only the filtered Rides
- Selecting State first will consider only the **cities within the selected State**.
- The Close icon can be used to clear both filters.

<hr>

### :gear: Services

#### Hooks

Re-usable and parametrized functions that can be used to manipulate or control data, in particular with the list of rides fetched.
Includes functionality such as:

- Filter rides by City and/or State
- Filter rides by Upcoming or Past
- Calculate distance between User and the closest station in a given Ride
- Generate list of cities or states from a list of rides
- Order the rides into a list by their distance to the User

#### Rides

API calls made to operate on Ride data. Only contains a GET call to fetch rides

#### Users

API calls made to operate on User data. Only contains a GET call to fetch the current user

#### Components

Re-usable Javascript components ordered based on pages they are scoped to or in global scope.

<hr>

### :open_file_folder: Models

A set of data object templates to enforce type safety when handling fetched API response data.
