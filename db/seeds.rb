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
  body: 'alamo square, many dogs',
  name: 'holy ground',
  lat: 37.775769,
  lng: -122.434960,
  category: 'restaurant',
  pic_url: 'https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'
)

Business.create!(
  body: 'UN plaza, food truck access',
  name: 'Bens pizza',
  lat: 37.779760,
  lng: -122.413820,
  category: 'restaurant',
  pic_url: 'http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'
)

Business.create!(
  body: 'Ocean Beach, gnarly breh',
  name: 'Tylers seafood',
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
  password: '123456',
  img_url: 'www.iodjebf.com'
)

User.create!(
  firstname: 'Bob',
  lastname: 'Hiss',
  email: '39e9ri@gmail.com',
  zipcode: 837998,
  password: '123456',
  img_url: 'www.iodjebf.com'
)

Review.create!(
  business_id: Business.first.id,
  author_id: User.first.id,
  body: "very good food!!!!!!",
  rating: 4
)

Review.create!(
  business_id: Business.last.id,
  author_id: User.last.id,
  body: "great services",
  rating: 5
)
