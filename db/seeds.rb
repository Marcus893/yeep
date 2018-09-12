# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Business.delete_all
User.delete_all

# Business.create!(
#   description: 'alamo square, many dogs',
#   title: 'holy ground'
#   lat: 37.775769,
#   lng: -122.434960,
#   picture_url: 'https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'
# )
#
# Business.create!(
#   description: 'UN plaza, food truck access',
#   title: 'Bens pizza',
#   lat: 37.779760,
#   lng: -122.413820,
#   picture_url: 'http://www.concretedecor.net/CD/assets/Image/archives/CD1405/1405i_Page_32_Image_0001_600.jpg'
# )
#
# Business.create!(
#   description: 'Ocean Beach, gnarly breh',
#   title: 'Tylers seafood',
#   lat: 37.769996,
#   lng: -122.511281,
#   picture_url: 'http://marmaladeandmileposts.com/wp-content/uploads/2012/05/2012-4-16-San-Francisco-Road-Trip-San-Francisco-1301.jpg'
# )

User.create!(
  username: 'starwarz',
  password: 'hunter12',
  profile_url: 'www.disfjs.com',
  img_url: 'www.oifewf.com'
)
