
//ignore style imports for babel-register hook
require('ignore-styles');

//'require' hook, it is bound to node's 'require' and automatically compiles files on the fly
require('babel-register')({
    ignore: /\/(build|node_modules)\//,
    //get two presets from babel-preset-react-app
    //env - latest js features(like import)
    //react - allows jsx
    //TODO: works also if react-app is specified, why???
    presets: ['env', 'react']
})


const app = require('./temp');
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});