1. What problem does the context API help solve?

Context API provides a way to share props between components without having to explicitly pass a prop through every level of the tree. And so it keeps our state relatively clean and less cumbersome.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions, just like they are called are actions or processes that sent when called. They're usually objects comprising type and payload and contain information that you want to add to the state. 

Reducers listen for actions. When it hears that an action has been sent to it, it updates the state.

The Store holds the Redux state and allows access and modifications to it. It’s the middleman between actions and reducers. It is called the single source of truth because it houses all our states and the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Generally, component state is stored locally within a component and is not accessible from other components unless it’s explicitly passed as props to it’s sub components. But when the number of components increases, the passing of props starts becoming cumbersome.
Whereas application state is a centralised global store which is accessible to any component that subscribes to the store.
So, you use component state when you only need to pass props to a few components and you use application state when there are more than a few components using the props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. Because it forces you to work in a certain form, thus giving you control over what is happening and especially why something is happening in your application
