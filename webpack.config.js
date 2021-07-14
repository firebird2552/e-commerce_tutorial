const path = require('path') // allows us to use a relative path
module.exports = {
    mode: 'development', //this is the current mode of the application it will either be development or production
    entry: path.resolve(__dirname, 'src', 'app'), // starts off by resolving the primary directory where our files are store and then appends / src / app to the end of it
    output: { /* we are going to be defining where webpack send the file it creates when we run build */
        path: path.resolve(__dirname, 'dist'), // same as above except instead of looking for our app we are creating the location our bundle.js file will be stored in
        filename: 'bundle.js', // names the file that is created when webpack builds
        publicPath: '/public/', // tells webpack where our public assets are served from
    },
    resolve: {
        // we will be defining what file types webpack can work with
        extensions: ['.js', '.jsx'] //  an array of filetype extensions
    },
    devServer: {
        // defines anything specific to the webpack development server
        historyApiFallback: true //  allows us to use the history API
    },
    module: {
        // additional modules needed to load specific files
        rules: [
            {
                test: /\.jsx?/, //  a regex statement defining what file type we are looking for
                loader: 'babel-loader' //the loader we will be using to load that file.We have not installed this package yet.We will be doing that shortly
            },
            {
                test: /\.css?/, //  a regex statement defining what file type we are looking for
                use: ['style-loader', 'css-loader'] //  an array of loaders we will be using to load that file.
            }
        ]//  an array of json objects defining the rules needed to load both jsx and css files
    }
}
