# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Business.delete_all
User.delete_all

Business.create!(
  body: 'nice cozy pub',
  name: 'Fizgerald Pub',
  lat: 37.775769,
  lng: -122.434960,
  category: 'nightlife',
  pic_url: 'https://www.chelseapub.ca/public/images/gallery/dd4c40bd83bda793d99d6be019825787.jpg'
)

Business.create!(
  body: 'UN square, amazing sushi',
  name: 'Sushi Ryusei',
  lat: 37.779760,
  lng: -122.413820,
  category: 'restaurant',
  pic_url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/38664864/miami-lure-fishbar-sushi-414.0.jpg'
)

Business.create!(
  body: 'cheap and fast home services',
  name: 'Handy',
  lat: 37.769996,
  lng: -122.511281,
  category: 'home service',
  pic_url: 'https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2018/01/cleaning-service.jpg'
)

Business.create!(
  body: 'fast house cleaning service',
  name: 'YiWan home services',
  lat: 37.723296,
  lng: -122.511281,
  category: 'home service',
  pic_url: 'http://wecleandubai.com/wp-content/uploads/2018/08/15-Most-Neglected-Areas-to-Clean-in-Business-Environment.jpg'
)

Business.create!(
  body: 'cheap and discount!',
  name: 'Richair home solutions',
  lat: 37.768796,
  lng: -122.598381,
  category: 'home service',
  pic_url: 'https://www.maids.com/media/1255/bigstock-197197558.jpg'
)

Business.create!(
  body: 'dry cleaning automatic',
  name: 'Alba dry cleaning',
  lat: 37.987996,
  lng: -122.519481,
  category: 'dry cleaning',
  pic_url: 'http://newlearninginstitute.org/wp-content/uploads/2018/03/1.jpg'
)

User.create!(
  firstname: 'star',
  lastname: 'warz',
  email: '3948794@gmail.com',
  zipcode: 83746,
  password: 'hunter12',
  img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Leonardo_DiCaprio_January_2014.jpg/212px-Leonardo_DiCaprio_January_2014.jpg"
)

User.create!(
  firstname: 'Jack',
  lastname: 'Ryan',
  email: '39eru@gmail.com',
  zipcode: 837998,
  password: '947843',
  img_url: "https://www.hollywoodreporter.com/sites/default/files/2011/08/kanyewest_a.jpg"
)

User.create!(
  firstname: 'Bob',
  lastname: 'Hiss',
  email: '39e9ri@gmail.com',
  zipcode: 837998,
  password: '938473',
  img_url: "http://www.sayelbatimes.com/wp-content/uploads/2015/02/nicki-minaj.jpg"
)

User.create!(
  firstname: 'Justin',
  lastname: 'Wu',
  email: 'ifj9rew@gmail.com',
  zipcode: 93485,
  password: '439584549',
  img_url: "http://images6.fanpop.com/image/photos/39500000/justin-bieber-2016-justin-bieber-39528402-500-415.jpg"
)

Review.create!(
  business_id: Business.first.id,
  author_id: User.first.id,
  body: "I usually get take out from here for lunch while I'm at the office, but decided to come in for lunch to meet up with a friend in NY from out of town who is vegan and gluten-free.  Will probably stick to take out from now on... The service:
   Could NOT get the servers to crack a smile.  Later realized I noticed them smile, but only after talking to their co-workers.  They seemed VERY put out that we wanted to combine two tables on the banquette, so we could both sit on the booth side during lunch.  This was at 1:30 and there were two other tables in the restaurant.  The rest was empty.  Even after assuring them several times that we would absolutely move if they needed the table, they still looked completely indignant and inconvenienced.  There would be nothing that would console them.  /shrug
    The food: Definitely still some of the best Thai food in NYC.  I love their green curry and their mango salad was beautiful and delicious.  The only reason they get 4 stars instead of 3.  They would get 5 if the service was even remotely friendly.
     So again, get take out.  :)",
  rating: 4
)

Review.create!(
  business_id: Business.second.id,
  author_id: User.second.id,
  body: "I usually go to Talent for Thai food but I decided to try this place out with a friend.  We came at the beginning of lunch at 11:30am so the place was empty.  The decor was pretty and the restaurant was pretty spacious for a typical restaurant in NYC.  We ordered the lunch special which comes with vegetable soup, appetizer, and entree for $9.50.  I ordered the chicken larb salad for the appetizer and the tofu pad kee mao for entree.  The vegetable soup was small and not memorable.  It had a really weird sweet aftertaste.  I feel like they could offer a drink instead.  The chicken larb salad was good, tasted fresh and had a lot of chicken.  The tofu pad kee mao was spicy and delicious.  The service was fast and friendly.   Talent has a better lunch deal (drink, appetizer, entree for about the same price) but Lan Larb has higher quality food.  I would come back for lunch.",
  rating: 5
)



Review.create!(
  business_id: Business.last.id,
  author_id: User.last.id,
  body: "great services",
  rating: 5
)
