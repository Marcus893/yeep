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
  category: 'restaurant',
  pic_url: 'http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg'
)

Business.create!(
  body: 'fast house cleaning service',
  name: 'YiWan home services',
  lat: 37.723296,
  lng: -122.511281,
  category: 'home service',
  pic_url: 'http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg'
)

Business.create!(
  body: 'cheap and discount!',
  name: 'Richair home solutions',
  lat: 37.768796,
  lng: -122.598381,
  category: 'home service',
  pic_url: 'http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg'
)

Business.create!(
  body: 'dry cleaning automatic',
  name: 'Alba dry cleaning',
  lat: 37.987996,
  lng: -122.519481,
  category: 'dry cleaning',
  pic_url: 'http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg'
)

User.create!(
  firstname: 'star',
  lastname: 'warz',
  email: '3948794@gmail.com',
  zipcode: 83746,
  password: 'hunter12',
  img_url: 'www.oifewf.com'
)

User.create!(
  firstname: 'Jack',
  lastname: 'Ryan',
  email: '39eru@gmail.com',
  zipcode: 837998,
  password: '947843',
  img_url: 'www.iodjebf.com'
)

User.create!(
  firstname: 'Bob',
  lastname: 'Hiss',
  email: '39e9ri@gmail.com',
  zipcode: 837998,
  password: '938473',
  img_url: 'www.iodifj9.com'
)

User.create!(
  firstname: 'Lisa',
  lastname: 'May',
  email: 'ifj9rew@gmail.com',
  zipcode: 93485,
  password: '439584549',
  img_url: 'www.idjsofi.com'
)

Review.create!(
  business_id: Business.first.id,
  author_id: User.first.id,
  body: "very good food!!!!!!",
  rating: 4
)

Review.create!(
  business_id: Business.second.id,
  author_id: User.second.id,
  body: "that's the flavor I've been searching for !!!",
  rating: 5
)



Review.create!(
  business_id: Business.last.id,
  author_id: User.last.id,
  body: "great services",
  rating: 5
)
