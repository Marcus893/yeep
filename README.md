# README

[Live](https://firstyeep.herokuapp.com/)

## Summary
This app is a yelp clone aim at having the same functionalities and styling as yelp, users can signup/login as well as search for businessses they are interested in by categories. The map gives the locations of the businesses; the reviews and ratings on the business page summarize how good or bad the business is. User can also log in to post a review for a business and upload a photo.

## Technology
The frontend web application was written in JavaScript's react library for reuseable and modular code. It was used in conjunction with the Redux framework to add in the benefits of a unidirectional data flow which made the application easier to debug. The backend was built in rails to handle data receiving from the frontend, and the data is stored in PostgreSQL.


## features

![screenshot from 2018-12-01 22-17-48](https://user-images.githubusercontent.com/38970716/49335274-804b3480-f5b8-11e8-8b48-071d56b72dbf.png)
1.  Refreshing and modular layout by utilizing react component on the business page, user can click on the marker on the map to be taken to the google map route page, or toggle around the image slider to see different uploaded pictures. By clicking on the review button user will be taken to a review form; he can then select how many stars he wants to give the business, also leave comments below. After submitting the review the business page would rerender and shows the new review on top of the review section.

![screenshot from 2018-12-01 20-28-05](https://user-images.githubusercontent.com/38970716/49335334-8beb2b00-f5b9-11e8-9e0c-68c11a8d8254.png)
2. Architected an image slider from scratch to make the user experience more smooth and authentic; the slider autocenters on the middle image, combined with visual CSS effect. User can also upload images himself, by clicking on the "upload photo" button, the page redirects to the upload page where user can drag and drop images from his local files. New uploaded photos will be added to the front of the slider. Show in the screenshots below.
![screenshot from 2018-12-01 18-30-48](https://user-images.githubusercontent.com/38970716/49335388-98bc4e80-f5ba-11e8-870f-4d5aafc9eadb.png)

![screenshot from 2018-12-01 18-30-00](https://user-images.githubusercontent.com/38970716/49335392-affb3c00-f5ba-11e8-9e64-98dc2da866c2.png)

3. filtering using longitude, latitude and booundries to make searched businesses show up in the map. The database was designed to require every business to contain its coordinates. Then an event listener and the google maps API were used to retrieve the northeastern and southwestern bounds of the map. Once the bounds were received, an ajax request was made to retrieve all the businesses within the maps bounds through the filter and markers manager. Finally, the updated state would trigger a re-render of the businesses index and the index would populate with the available listings in the specified area, seamlessly in real time.

![screenshot from 2018-12-01 20-27-45](https://user-images.githubusercontent.com/38970716/49335430-4c254300-f5bb-11e8-8a32-b6ab34858281.png)  
![screenshot from 2018-12-01 20-26-47](https://user-images.githubusercontent.com/38970716/49335434-5cd5b900-f5bb-11e8-8e5e-e9bc35f8ad67.png)

