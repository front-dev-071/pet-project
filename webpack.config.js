const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
	entry: "./src/js/index.js", // Точка входа
	output: {
		filename: "bundle.js", // Имя выходного файла
		path: path.resolve(__dirname, "dist"), // Папка для собранного бандла
		clean: true, // Очищает dist перед сборкой
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Обрабатываем все .js файлы
				exclude: /node_modules/, // Исключаем node_modules
				use: {
					loader: "babel-loader", // Используем Babel
					options: {
						presets: ["@babel/preset-env"], // Преобразование кода для старых браузеров
					},
				},
			},
			{
				test: /\.css$/, // Обработка CSS-файлов
				// use: [MiniCssExtractPlugin.loader, "css-loader"],

				// use: ["style-loader", "css-loader"],

				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
				],
			},
			{
				test: /\.(png|jpg|svg|gif)$/, // Обработка изображений
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]", // Копирует изображения в dist/img/
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html", // Шаблон HTML
			filename: "index.html", // Имя выходного файла
		}),
		// new MiniCssExtractPlugin({
		//   filename: 'style.css', // Имя выходного CSS-файла
		// }),
		...(isDev ? [] : [new MiniCssExtractPlugin({ filename: "style.css" })]),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./src/img", to: "img" }, // Копирует папку img/ в dist/img/
			],
		}),
	],
	mode: isDev ? "development" : "production", // Выбираем режим в зависимости от переменной isDev
	devServer: {
		static: path.resolve(__dirname, "dist"), // Папка для статических файлов
		hot: true, // Включаем HMR
		// open: true, // Открывает браузер при запуске
		watchFiles: ["src/**/*"], // Следит за изменениями в src/
		liveReload: true, // Включает быструю перезагрузку для случаев, когда HMR не срабатывает
	},
};
