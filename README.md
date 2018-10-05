# README

[Live](https://firstyeep.herokuapp.com/)

## Summary
This app is a yelp clone aim at having the same functionalities as yelp, users can signup/login as well as search for businessses they are interested in. The maps give the locations of the businesses and the reviews on the business page summarize how good or bad the business is.

## Technology
The frontend web application was written in JavaScript's react library for reuseable and modular code. It was used in conjunction with the Redux framework to add in the benefits of a unidirectional data flow which made the application easier to debug. The backend was built in rails to handle data receiving from the frontend, and the data is stored in PostgreSQL.


## features
1. used a react package to render the star rating system and made the user experience more smooth and authentic, the user can click on the review button on the business page and be taken to a review form; he or she can then select how many stars they want to give the business, and also leave comments below. After submitting the review the business page would rerender and shows the new review only when the user is logged in, which prevents unlogged in users to submit reviews.
![screenshot from 2018-10-01 11-17-01](https://user-images.githubusercontent.com/38970716/46299002-69fc0a80-c56e-11e8-9606-fae9e89c33da.png)

2. filtering using longitude, latitude and booundries to make relevant businesses show up in the map within the boundries while without showing other irrelevant businesses the user didn't search for. The database was designed to require every business to contain its coordinates. Then an event listener and the google maps API were used to retrieve the northeastern and southwestern bounds of the map. Once the bounds were received, an ajax request was made to retrieve all the businesses within the maps bounds through the filter and markers manager. Finally, the updated state would trigger a re-render of the businesses index and the index would populate with the available listings in the specified area, seamlessly in real time.
![screenshot from 2018-10-01 11-15-54](https://user-images.githubusercontent.com/38970716/46299048-85671580-c56e-11e8-9006-aac22c93a386.png)

