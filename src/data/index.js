export const qa = [
    {question: "What is isomorphic app?", answer: "Application which run both client-side and server-side"},
    {
        question: "What's the difference between SCSS and Sass?",
        answer: "Sass is a CSS pre-processor with syntax advancements There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.\n" +
        "\n" +
        "The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension."
    },
    {
        question: "ES6 vs ES2015 - What to call a JavaScript version?",
        answer: "Officially, the name is \"ECMAScript 2015 Language\" and it's the 6th Edition of the ECMA-262 standard. The specification mentions neither ES6 or ES2015, though they are handy abbreviations." +
        ""
    },
    {
        question: "React Components, Elements, and Instances",
        answer: "An element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.\n" +
        "A component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns an element tree as the output.\n" +
        "When a component receives some props as an input, it is because a particular parent component returned an element with its type and these props. This is why people say that the props flows one way in React: from parents to children.\n" +
        "An instance is what you refer to as this in the component class you write." +
        "Functional components don’t have instances at all. Class components have instances, but you never need to create a component instance directly—React takes care of this." +
        "Finally, to create elements, use React.createElement(), JSX, or an element factory helper. Don’t write elements as plain objects in the real code—just know that they are plain objects under the hood."
    },
    {
        question: "React Higher Order Components in depth",
        answer: "A Higher Order Component is just a React Component that wraps another one." +
        "The two main ways of implementing HOCs in React: Props Proxy (PP) and Inheritance Inversion (II). Both enable different ways of manipulating the WrappedComponent." +
        "React-Redux - is Props Proxy implementation('connect' function)" +
        "https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e"
    }
]