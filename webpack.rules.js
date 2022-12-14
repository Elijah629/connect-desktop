module.exports = [
	// Add support for native node modules
	{
		// We're specifying native_modules in the test because the asset relocator loader generates a
		// "fake" .node file which is really a cjs file.

		// node_modules because i got an error and this fixed it

		test: /(native_modules|node_modules)\/.+\.node$/i,
		use: "node-loader"
	},
	{
		test: /\.tsx?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: "ts-loader",
			options: {
				transpileOnly: true
			}
		}
	}
];
