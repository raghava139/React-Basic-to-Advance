const heading = React.createElement('h1', { id: 'heading' }, 'Hello World From React!');

console.log(heading)//it returns object
// React.createElement() creates a React element object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)
// root.render() =>React takes that React element object, creates/updates the
//  corresponding real DOM nodes, and puts them inside:
// <div id="root">
//   <h1 id="heading">Hello World From React!</h1>
// </div>



