# React
## What's the big deal?
### No seriously, what's the big deal
#### Quinn Stephens
# ![](txi.png)

#### https://github.com/QuinnStephens/code-platoon-intro-to-react

---

# What is React?
- A Javascript library for creating views
- That's it

___

# What makes React special*
- Components
- JSX
- The diffing algorithm
- The ecosystem

---

# Components
## Break up your UI into small pieces
## Let them focus on one thing

---

# JSX
## A Frankenstein's monster of HTML and JavaScript
## (but a good monster)

---

# JSX is optional
## But it's much nicer than the alternative

![right fit](jsx-vs-no.png)

---

# The diffing algorithm
## Data changes. UI updates.
## No thinking required

---

# The rest is up to you
- React is not a framework but a set of tools
- React is just the view layer
- Structure for the app comes from other tools...
-- React frameworks (Redux)
-- Backend frameworks (Rails, Node, et al)
- ...but this is changing
-- Context
-- Hooks

---

# Let's see an example!
- Open the source of project you created with `create-react-app`
- Run `npm start` in the terminal from your project's root
  -- (You can also use `yarn start`)

---

#Edit the text
## Watch the diff engine at work.
## Don't bother reloading

---

#Edit the style
- Normal CSS, except...
- Use `className` instead of class

---

# Replace text with a variable

___

# Move the header into its own component

---

# Pass the variable into the component as a prop
## Props are **external** values that are passed into the component

___

# Pass in a callback function as a prop
- Add a button
- Add a prop to show a simple alert in the parent component

---

# Move the `text` variable to state
## State is a set of **internal** values managed within the component

---

# Update the state on button press
- Don't change the state directly!
- `setState` is async

---

# Questions?

___

# Your turn: Create a click counter

![right-fit](counter.png)

- Keep the counter value in the App state
- Update the counter value through a button press

---

# Let's make a simple form
- Single text field
- Update state on change

---

# Add a submit button
- Show an alert with the value

---

# Conditionally show components
- Only show a component once the user has submitted

---

# Your turn—do some more conditional logic
- Only show a component if the user has entered more than a certain number of characters

---

# Component lifecycle methods
- `constructor`
- `componentWillMount` / `componentDidMount`
- `componentWillUnmount`
- `UNSAFE_componentWillRecieveProps`
- `componentDidUpdate`
- `shouldComponentUpdate`

---

# Let's make an API call
- Fetch within `componentDidMount` and update state on response
- URL: https://jsonplaceholder.typicode.com/photos/1

___

# Your turn: Show a loading state before the call finishes

---

# Thank you for coming!

#### Quinn Stephens
# ![](txi.png)

#### https://github.com/QuinnStephens/code-platoon-intro-to-react
