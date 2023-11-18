import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Slides from './Slides';
// import ArticleSorting from './ArticleSorting';
// import WeatherReport from './WeatherReport';
import Gallery from './Gallery';
// import reportWebVitals from './reportWebVitals';

// const SLIDES = [
//   {
//     title: "title-1",
//     text: "bdhf"
//   },
//   {
//     title: "title-2",
//     text: "bdhf"
//   },
//   {
//     title: "title-3",
//     text: "bdhf"
//   },
//   {
//     title: "title-4",
//     text: "bdhf"
//   }
// ]
// const ARTICLES = [
//   {
//     title: "title-1",
//     upvotes: 1,
//     date: "2019-02-01"
//   },
//   {
//     title: "title-2",
//     upvotes: 2,
//     date: "2019-12-01"
//   },
//   {
//     title: "title-3",
//     upvotes: 3,
//     date: "2019-03-02"
//   },
//   {
//     title: "title-4",
//     upvotes: 4,
//     date: "2012-09-01"
//   },
//   {
//     title: "title-5",
//     upvotes: 5,
//     date: "2013-04-01"
//   }
// ]
// const weatherData = {
//   Hyderabad: {
//     Temperature: 29,
//     Humidity: 21,
//     windSpeed: 100
//   },
//   vizag: {
//     Temperature: 21,
//     Humidity: 20,
//     windSpeed: 120
//   },
//   Mumbai: {
//     Temperature: 40,
//     Humidity: 30,
//     windSpeed: 288
//   },
//   Delhi: {
//     Temperature: 50,
//     Humidity: 27,
//     windSpeed: 212
//   }
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App ></App> */}
    {/* <Slides slides={SLIDES}></Slides>
    <hr></hr>
    <ArticleSorting articles={ARTICLES} />
    <hr></hr>
    <WeatherReport weatherData={weatherData}></WeatherReport> */}
    <Gallery></Gallery>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
