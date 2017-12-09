## There are 3 branches:

### master: create-react-app + ssr (now works in both dev and prod modes)
Disadvantages: 
- problem with live reloading for client side when
starting both ssr and spa
- problem with applying loaders(such as isomorphic-loader)

### ssr-with-custom-config: custom config + ssr (now works in dev mode)
webpack --watch with nodemon are used.
Disadvantages: 
- how to apply effective versioning in production(chunkhash)???

## ssr-with-webpack-approach: webpack libs + ssr (to be implemented..)
webpack-dev-middleware, webpack-hot-middleware and 
webpack-hot-server-middleware are used.
<br><b>The main point</b>: extracting chunks from clientStats and 
applying them to 