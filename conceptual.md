### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
Use React whether you're building a website, web app, mobile app, or virtual reality applications.


- What is Babel?
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 


- What is JSX?
JSX stands for JavaScript XML. JSX allows us to write HTML in React. React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.


- How is a Component created in React?
React is all about re-using code, and it is recommended to split your components into separate files. To do that, create a new file with a .js file extension and put the code inside it: Note that the filename must start with an uppercase character.


- What are some difference between state and props?
Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.


- What does "downward data flow" refer to in React?
This means that data is transferred between items in ReactJS only one way. As a result, developers gain additional support in debugging and bug prevention. Downward data flow = more stable code – many ways to limit errors in your code are available, and framework and library developers are aware of it. 

- What is a controlled component?
In React, Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc.


- What is an uncontrolled component?
Uncontrolled components are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state. The values of the form elements are traditionally controlled by and stored on the DOM.


- What is the purpose of the `key` prop when rendering a list of components?
React's key prop gives you the ability to control component instances. Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it keeps those components/DOM nodes around, even if all the props changed.


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It is not recommended to use the index of the array as the key prop if you know the array will not be static. If the key is an index, reordering an item in the array changes it. Then React will get confused and re-render the incorrect element. Keys do not have to be unique globally.


- Describe useEffect.  What use cases is it used for in React components?
useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.


- What does useRef do?  Does a change to a ref value cause a rerender of a component?
The useRef Hook allows you to persist values between renders. 

It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.


- When would you use a ref? When wouldn't you use one?
Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. 

They are used in cases where we want to change the value of a child component, without making use of props and all.

It is a general rule of thumb to avoid using refs unless you absolutely have to. The official React documentation outlined only three possible use cases where refs are entirely considered useful for lack of better alternatives: Managing focus, text selection, or media playback. Triggering imperative animations.


- What is a custom hook in React? When would you want to write one?
Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

