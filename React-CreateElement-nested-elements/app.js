
// example:
//<div id = 'parent'>
// fasdfa
//  <div id='child'>
//        <h1></h1>
//    </div>
//</div>

const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
       "dfas", [React.createElement('h1', { id: 'h1-test' }, " this is h1 tag"),
        React.createElement('h2', { id: 'h2-test' }, " this is h2 tag")]
    ))
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root)
root.render(parent)