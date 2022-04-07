const path= require ("path");

module.exports={
    entry:"./src/index.js",
    output:{
        path :path.resolve(".","build"),
        filename: 'bundle.js' ,
    },
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                      {
                        loader: 'url-loader',
                        options: {
                          limit: 8192,
                        },
                      },
                    ],
                  },
    
    ],
      },
    //   module: {
    //     rules: [
    //      
    //     ],
    //   },
      mode:"development",

}