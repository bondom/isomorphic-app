## There are 4 branches:

### master: create-react-app + ssr (now works in both dev and prod modes)
<br>Disadvantages: 
- impossible apply changes from client side when
starting both ssr and spa
- problem with applying loaders(such as isomorphic-loader)

### ssr-with-webpack-watch: custom config + ssr (now works in both dev and prod modes)
webpack --watch with nodemon are used.
<br>Disadvantages: 
- impossible apply hot reloading for all files(also for css) when starting both ssr and spa - need to do manual refreshing of browser
<br><b>NOTE</b>: but hot reloading works fine when starting only client

### ssr-with-custom-config: custom config + ssr (to be implemented)
webpack-dev-middleware and webpack-hot-middleware are used
<br>Disadvantages: 
- ...

### ssr-with-webpack-approach: webpack libs + ssr (to be implemented..)
webpack-dev-middleware, webpack-hot-middleware and 
webpack-hot-server-middleware are used.
<br><b>The main point</b>: extracting chunks from clientStats and 
injecting them to html file