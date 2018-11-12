# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Business.delete_all
User.delete_all
Review.delete_all

b1 = Business.create!(
  body: 'nice cozy pub',
  name: 'Fizgerald Pub',
  lat: 40.740067,
  lng: -73.982470,
  category: 'nightlife',
  pic_url: ["https://www.chelseapub.ca/public/images/gallery/dd4c40bd83bda793d99d6be019825787.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/l2opukqe0FiQs9jTHgrHKA/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/7QD970QvxM-emiIO7Zddhg/ls.jpg"],
  address: '336 3rd Ave, New York, NY 10010',
  phone: '(212) 679-6931'
)


b2 = Business.create!(
  body: 'UN square, amazing sushi',
  name: 'Sushi Ryusei',
  lat: 40.748378,
  lng: -73.975209,
  category: 'restaurants',
  pic_url: ["https://cdn.vox-cdn.com/uploads/chorus_image/image/38664864/miami-lure-fishbar-sushi-414.0.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/XafguJKo8IHJZY3fAgK-ag/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/bmx2oObtubmcdZK-9_ZLSw/ls.jpg"],
  address: '216 E 39th St, New York, NY 10016',
  phone: '(212) 983-8880'
)

b3 = Business.create!(
  body: 'cheap and fast home services',
  name: 'Handy',
  lat: 40.764979,
  lng: -73.977895,
  category: 'home service',
  pic_url: ["https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2018/01/cleaning-service.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/igqh6sv2QrzT8OeaWlHPgg/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/fqYEqRwVdh7HDVztwszxig/o.jpg"],
  address: '60 2nd Ave, New York, NY 10022',
  phone: '(718) 427-4640'
)

b4 = Business.create!(
  body: 'Don\'t miss the shrimp and the sliders',
  name: 'Holy Ground',
  lat: 40.716095,
  lng: -74.008585,
  category: 'restaurants',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/wrOGPch2IZZ0xc0nJfzt8Q/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/DEg2xTS--6ENrmAz-A6OXA/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/X7u-h6qM9EMxqvcR5FXP0w/ls.jpg"],
  address: '112 Reade St, New York, NY 10013',
  phone: '(646) 882-0666'
)


b5 = Business.create!(
  body: 'There\'s no cover.',
  name: 'Rooftop 93',
  lat: 40.717019,
  lng: -73.995165,
  category: 'nightlife',
  pic_url: ["https://s3-media4.fl.yelpcdn.com/bphoto/mA3457kUSZwEEB7g0EEvLQ/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/Bi8aBZTHtwsGPtOCKbV7pA/o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/f3yzLFvpj_8tviiCPJPsOA/o.jpg"],
  address: '93 Bowery, New York, NY 10002',
  phone: '(212) 966-9033'
)

b6 = Business.create!(
  body: 'fast house cleaning service',
  name: 'YiWan home services',
  lat: 40.758359,
  lng: -73.93170,
  category: 'home service',
  pic_url: ["http://wecleandubai.com/wp-content/uploads/2018/08/15-Most-Neglected-Areas-to-Clean-in-Business-Environment.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/hN_oCyyyeuZa9fW85K7-sg/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/4PR5T3s3JcwP4Xvz_XOi9g/o.jpg"],
  address: '247 W 38th St #601, New York, NY 10018',
  phone: '(212) 876-1000'
)

b7 = Business.create!(
  body: 'cheap and discount!',
  name: 'Richair home solutions',
  lat: 40.775893,
  lng: -73.958990,
  category: 'home service',
  pic_url: ["https://www.maids.com/media/1255/bigstock-197197558.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/Jh7aIWeJMTjww9sSv6Ziag/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/nXGwJ5tnQaBv4a1QqY4UiQ/o.jpg"],
  address: '322 8th Ave, New York, NY 10001',
  phone: '(212) 255-5025'
)

b8 = Business.create!(
  body: 'dry cleaning automatic',
  name: 'Alba dry cleaning',
  lat: 40.711222,
  lng: -74.006211,
  category: 'dry cleaning',
  pic_url: ["https://s3-media2.fl.yelpcdn.com/bphoto/0QhM6FZgIZD8GNUj-0iTOw/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/tPLu23O_Yp2GKnRywg2rBw/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/oJrqvDlqIoZUgPmURHWk7w/o.jpg"],
  address: '140 Nassau St, New York, NY 10038',
  phone: '(212) 608-0111'
)

b9 = Business.create!(
  body: 'AutoCraft specializes in high quality and unique auto customization from a team who has been in the business for decades. We provide services as simple as window tinting and …',
  name: 'Autocraft NYC',
  lat: 40.764102,
  lng: -73.997508,
  category: 'auto',
  pic_url: ["https://s3-media4.fl.yelpcdn.com/bphoto/Mxz_Ml6dIZYoDymTGuj0Qg/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/AWA1s_Mo4imiGzJuod5sNQ/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/1almdEYS3o3B6HmjAQubHw/o.jpg"],
  address: '621 W 46th St, New York, NY 10036',
  phone: '(212) 255-8939'
)

b10 = Business.create!(
  body: 'They have really cool original gear.',
  name: 'Hard Turn',
  lat: 40.758745,
  lng: -73.985923,
  category: 'shopping',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/Y6vIRdiXaZ2amYS7Tmeb_g/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/w8fZmheS1aQs548UzEjFUA/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/kz9jLmk8R0vthjJ2JNAEyQ/ls.jpg"],
  address: '625 8th Ave #201, New York, NY 10018',
  phone: '(212) 564-6030'
)

b11 = Business.create!(
  body: 'This is the Asian version of Sephora in a way.',
  name: 'Ume Cosme',
  lat: 40.748434,
  lng: -73.988383,
  category: 'beauty',
  pic_url: ["https://s3-media4.fl.yelpcdn.com/bphoto/s0JgcsrDlIEnH-lFjmY13A/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/cdsTnjw_3SgajCotzrgxnQ/o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/iScTdjRdEhH6TutvnykvWA/o.jpg"],
  address: '1265 Broadway, New York, NY 10001',
  phone: '(917) 409-0378'
)

b12 = Business.create!(
  body: 'Red rabbit club is Gilded Lily rebranded. Same location, same decor, same cramped space, similar vibe.',
  name: 'Red Rabbit Club',
  lat: 40.741745,
  lng: -74.005805,
  category: 'nightlife',
  pic_url: ["https://s3-media3.fl.yelpcdn.com/bphoto/m3TMipU55pL9JkmBP-d6Ow/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/H4lQS-jsHcTqumDNOiEOqg/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/S50PdwCBgdea5x1GHW3hiA/o.jpg"],
  address: '408 W 15th St New York, NY 10011',
  phone: '(917) 648-0376'
)

b13 = Business.create!(
  body: 'I came here on a Thursday night for my birthday party. Despite the rain that night, when entering the doors to see the gold plated doors with the iconic Playboy tradema',
  name: 'Playboy Club NYC',
  lat: 40.759784,
  lng: -73.996469,
  category: 'nightlife',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/B6b9gCEEnVQiQJ_1BORivg/ls.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/zPb4xjvKEN7BcFUgw2YBAQ/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/2ITYF8BPLnBgAqByDe6cEQ/ls.jpg"],
  address: '512 W 42nd St New York, NY 10036',
  phone: '(212) 644-8227'
)

b14 = Business.create!(
  body: 'Excellent service, great cocktails and food, awesome views, and a swanky upscale vibe without being pretentious.',
  name: 'Ascent Lounge',
  lat: 40.768337,
  lng: -73.982511,
  category: 'nightlife',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/ki2uUjnyl1Bd0GYHxS5NBQ/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/K1QcdF49F8BYIP_ft_6FGA/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/_eUiJ-VATyDu3Azxqb9sXA/ls.jpg"],
  address: '10 Columbus Cir New York, NY 10019',
  phone: '(212) 823-9770'
)

b15 = Business.create!(
  body: 'Missing Paris from your recent trip to France? Never been but looking for the cheapest hour long trip to France you can find in NYC? This restaurant is your ticket to an immersive experience.',
  name: 'Amélie',
  lat: 40.732596,
  lng: -73.997721,
  category: 'restaurants',
  pic_url: ["https://s3-media3.fl.yelpcdn.com/bphoto/vmFY7h5byVrl5b1u97iWrg/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/2MWEmUwrR3U9ijB3Q3mJkA/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/mUpgURXCbfa_l77CBFGUjw/ls.jpg"],
  address: '22 W 8th St New York, NY 10011',
  phone: '(212) 533-2962'
)

b16 = Business.create!(
  body: 'I can tell you that the cuisine is wonderful. It will take time to prepare. Perhaps call ahead and let them know you are committed for a given time.',
  name: 'Ipanema Restaurant',
  lat: 40.756910,
  lng: -73.980649,
  category: 'restaurants',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/ll-cLUXkbZmG_0ZbJqz6BA/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/Z9GgFLcE4nEuARtkxQgCWQ/ls.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/rV5swL7Unk9aDRBQaVwStA/ls.jpg"],
  address: '43 W 46th St New York, NY 10036',
  phone: '(646) 791-7171'
)

b17 = Business.create!(
  body: 'If, like me, you feel at first it might be a little pricy or too trendy, I suggest suspending judgment until you try it',
  name: 'TONCHIN NEW YORK',
  lat: 40.750208,
  lng: -73.984592,
  category: 'restaurants',
  pic_url: ["https://s3-media4.fl.yelpcdn.com/bphoto/MGxDmG4c8tEZOfhQOmMw5w/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/ZHA_DAnyhJ0eXonNEizFHA/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/D25NVNM5PYouD-EQQZ8jQw/ls.jpg"],
  address: '13 W 36th St New York, NY 10018',
  phone: '(646) 692-9912'
)

b18 = Business.create!(
  body: 'Already trying to figure out how I can use Damian and his team again.  They are terrific.',
  name: '212-PAINTER',
  lat: 40.744599,
  lng: -73.987534,
  category: 'home service',
  pic_url: ["https://s3-media4.fl.yelpcdn.com/bphoto/b2WVhk8pMaPrLlXQPpsSNw/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/Ph3z7Eef2iiPetCOw9hJ_w/ls.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/5uKEgltazPCczc_G0TP8uA/ls.jpg"],
  address: '244 5th Ave New York, NY 10001',
  phone: '(212) 724-6837'
)

b18 = Business.create!(
  body: 'Come n done did a great job,they replaced all wood flooring, baseboards,crown moldings, they did our bathroom renovation,we finally have a walk-in shower and painted whole house Highly recommend them',
  name: 'Aspiro Renovations',
  lat: 40.749926,
  lng: -73.973027,
  category: 'home service',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/Dx8BKxYYUfMcryugPVnchQ/ls.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/bZm3lrc2nN5Ns3yQRTIUiQ/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/DIJYqI3pjac9fAByPSVeQg/o.jpg"],
  address: '220 E 42nd St New York, NY 10017',
  phone: '(646) 522-6232'
)

b19 = Business.create!(
  body: 'Little J Cleaners is your dashing, eco-friendly Dry Cleaners service with FREE clothing pick & delivery to your home or office. Green cleaning solutions reduce our environmental footprint while cleansing clients’ clothing and possessions in an effective manner.',
  name: 'Little J Cleaners',
  lat: 40.753669,
  lng: -73.969073,
  category: 'dry cleaning',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/2TSaFMhkjSjDU1iQDoGV_g/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/gs9YIoT6UnhU28gUnsWVNw/o.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/myrL09alh4SrilTLU2pQsw/o.jpg"],
  address: '301 E 48th St New York, NY 10017',
  phone: '(212) 935-2411'
)

b20 = Business.create!(
  body: 'We are specialized in Alteration, and Dry Clean service. We will deliver anywhere in Manhattan please call in for inquiry',
  name: 'Sammy Dry Cleaners & Tailor',
  lat: 40.738337,
  lng: -73.984573,
  category: 'dry cleaning',
  pic_url: ["https://s3-media3.fl.yelpcdn.com/bphoto/yYbdCazFLCELuRzYQ8mRHQ/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/_4s7mAaYHVzGSQUPF9wbBQ/o.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/-jKnw-vbMO6TYrtKqivcdg/o.jpg"],
  address: '144 E 22nd St New York, NY 10010',
  phone: '(212) 780-9888'
)

b21 = Business.create!(
  body: 'Prestige Automotive handles all of your automotive needs in New York City. See us for tires, wheels, and auto repair services in New York, NY, Bronx, NY, Fort Lee, NJ, and surrounding areas. We have 24-hour towing available by calling 212-222-2277',
  name: 'Prestige Automotive',
  lat: 40.818623,
  lng: -73.955055,
  category: 'auto',
  pic_url: ["https://s3-media3.fl.yelpcdn.com/bphoto/hCn4GEE540fCShj2s-IA5A/o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/UY03tuFiA4s48eaLBDjaFg/o.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/HmG4y4n6nJEZM2WQOfWDbA/o.jpg"],
  address: '547 W 133rd St New York, NY 10027',
  phone: '(347) 966-7771'
)

b22 = Business.create!(
  body: 'Our Business specializes in all types of auto repairs! (Audi Volkswagon and all types of cars) We also offer a full service body repair shop! Towing services for all types of vehicles! Locksmith work as well',
  name: 'Manhattan Automotive',
  lat: 40.762091,
  lng: -73.995020,
  category: 'auto',
  pic_url: ["https://s3-media2.fl.yelpcdn.com/bphoto/RVev-GF-6cwDgqbtCegvnw/o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/yql6BdxrAse67lhfxk8lYQ/o.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/DxvE2S8lDaOCCh54avOAeg/o.jpg"],
  address: '517 W 45th St Manhattan, NY 10036',
  phone: '(646) 460-9026'
)

b23 = Business.create!(
  body: 'Such a great experience! I wanted to celebrate a recent promotion and needed a little help playing the part, but I was also hoping not to break my bank account. I did a lot of research, and found the value of this product to be amazing',
  name: 'Ian Rios New York',
  lat: 40.746917,
  lng: -73.983367,
  category: 'shopping',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/6tu6nBX1zk4s-FAw3BInSQ/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/nFS74vz1Ficd3I4RxG7mVw/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/WGtMrJVi2IA3tyXOxmdbmg/o.jpg"],
  address: '167 Madison Ave New York, NY 10016',
  phone: '(347) 761-2262'
)

b24 = Business.create!(
  body: 'I am always looking for the small boutique that offers nice clothes that I wont see on everybody.',
  name: 'Alter',
  lat: 40.729713,
  lng: -73.957366,
  category: 'shopping',
  pic_url: ["https://s3-media1.fl.yelpcdn.com/bphoto/-zwMH7CZnbogAJu_IlgEug/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/5_N0oZIU1OYo2nLiooED5A/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/KBIRa7G8IIXXL_rEAWp-pw/o.jpg"],
  address: '140 Franklin St Brooklyn, NY 11222',
  phone: '(718) 349-0203'
)

b25 = Business.create!(
  body: 'At an affordable price in the trendiest part of town (east village) you will find city glow.',
  name: 'City Glow',
  lat: 40.725938,
  lng: -73.987508,
  category: 'beauty',
  pic_url: ["https://s3-media2.fl.yelpcdn.com/bphoto/XbBwmimDhHvYC5Te9arTwQ/o.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/RcKmNpLcKxkkHVGZGGECKw/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/HRKi97Uye2K9vHlHaO7nOw/o.jpg"],
  address: '336 E 5th St New York, NY 10003',
  phone: '(212) 837-2199'
)

b26 = Business.create!(
  body: 'You can also "BYOB" (build your own box) here, do your nails, hair and much more here',
  name: 'Birchbox Soho',
  lat: 40.725291,
  lng: -74.001060,
  category: 'beauty',
  pic_url: ["https://s3-media4.fl.yelpcdn.com/bphoto/7x8zP12Zu1XgQ24bhOMpMg/o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/m1D651jDhzPQWj5rFh-RtQ/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/zfUwG66AYmktLTI33NaKJw/o.jpg"],
  address: '433 W Broadway New York, NY 10012',
  phone: '(646) 589-8500'
)

u1 = User.create!(
  firstname: 'star',
  lastname: 'warz',
  email: '3948794@gmail.com',
  zipcode: 83746,
  password: 'hunter12',
  img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Leonardo_DiCaprio_January_2014.jpg/212px-Leonardo_DiCaprio_January_2014.jpg"
)

u2 = User.create!(
  firstname: 'Jack',
  lastname: 'Ryan',
  email: '39eru@gmail.com',
  zipcode: 837998,
  password: '947843',
  img_url: "https://www.hollywoodreporter.com/sites/default/files/2011/08/kanyewest_a.jpg"
)

u3 = User.create!(
  firstname: 'Bob',
  lastname: 'Hiss',
  email: '39e9ri@gmail.com',
  zipcode: 837998,
  password: '938473',
  img_url: "http://www.sayelbatimes.com/wp-content/uploads/2015/02/nicki-minaj.jpg"
)

u4 = User.create!(
  firstname: 'Justin',
  lastname: 'Wu',
  email: 'ifj9rew@gmail.com',
  zipcode: 93485,
  password: '439584549',
  img_url: "http://images6.fanpop.com/image/photos/39500000/justin-bieber-2016-justin-bieber-39528402-500-415.jpg"
)

u5 = User.create!(
  firstname: 'Rihanna',
  lastname: 'May',
  email: '3498tu3w@gmail.com',
  zipcode: 48590,
  password: '4905843',
  img_url: "https://vignette.wikia.nocookie.net/randomonialand/images/c/cb/Rihanna-headshot-big.jpg/revision/latest?cb=20130111215016"
)

u6 = User.create!(
  firstname: 'Draky',
  lastname: 'T',
  email: '903rhitr@gmail.com',
  zipcode: 29384,
  password: 'fireball3489',
  img_url: "https://3m3y892ngk5k1mjv4e2in6jm-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/drake-287x300.jpg"
)

u7 = User.create!(
  firstname: 'Jeff',
  lastname: 'L',
  email: 'fio2u28@gmail.com',
  zipcode: 32893,
  password: '8j9feuf889',
  img_url: "https://res.cloudinary.com/allamerican/image/fetch/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/856887/large_Bezos_Jeff_3.jpg"
)

u8 = User.create!(
  firstname: 'Jenni',
  lastname: 'N',
  email: '79iru98@gmail.com',
  zipcode: 49847,
  password: '9oi3424r',
  img_url: "https://ewedit.files.wordpress.com/2015/01/jennifer-lawrence_240.jpg"
)

Review.create!(
  business_id: b1.id,
  author_id: u1.id,
  body: "I would recommend this spot for those are looking for a good happy hour. The food is good although it is pricy for its quality lol. Still to kill hunger once you drink. Also music is okay. Even though it's an irish bar,  I think they can add more trap music because I see lots of younger than older people here. Nevertheless, they have lots of TVs for different sporting events thats going around. I would recommend.",
  rating: 4
)

Review.create!(
  business_id: b1.id,
  author_id: u4.id,
  body: "
I've often walked by here, and it looked appealing so I stopped in for a sandwich and drink. 24 hours later, I'm still praying to my porcelain throne.

Don't eat the chicken sandwich.",
  rating: 1
)

Review.create!(
  business_id: b1.id,
  author_id: u3.id,
  body: "I usually get take out from here for lunch while I'm at the office, but decided to come in for lunch to meet up with a friend in NY from out of town who is vegan and gluten-free.  Will probably stick to take out from now on... The service:
   Could NOT get the servers to crack a smile.  Later realized I noticed them smile, but only after talking to their co-workers.  They seemed VERY put out that we wanted to combine two tables on the banquette, so we could both sit on the booth side during lunch.  This was at 1:30 and there were two other tables in the restaurant.  The rest was empty.  Even after assuring them several times that we would absolutely move if they needed the table, they still looked completely indignant and inconvenienced.  There would be nothing that would console them.  /shrug
    The food: Definitely still some of the best Thai food in NYC.  I love their green curry and their mango salad was beautiful and delicious.  The only reason they get 4 stars instead of 3.  They would get 5 if the service was even remotely friendly.
     So again, get take out.  :)",
  rating: 5
)

Review.create!(
  business_id: b2.id,
  author_id: u2.id,
  body: "I usually go to Talent for Thai food but I decided to try this place out with a friend.  We came at the beginning of lunch at 11:30am so the place was empty.  The decor was pretty and the restaurant was pretty spacious for a typical restaurant in NYC.  We ordered the lunch special which comes with vegetable soup, appetizer, and entree for $9.50.  I ordered the chicken larb salad for the appetizer and the tofu pad kee mao for entree.  The vegetable soup was small and not memorable.  It had a really weird sweet aftertaste.  I feel like they could offer a drink instead.  The chicken larb salad was good, tasted fresh and had a lot of chicken.  The tofu pad kee mao was spicy and delicious.  The service was fast and friendly.   Talent has a better lunch deal (drink, appetizer, entree for about the same price) but Lan Larb has higher quality food.  I would come back for lunch.",
  rating: 5
)

Review.create!(
  business_id: b2.id,
  author_id: u3.id,
  body: "
Nice rooftop lounge with both indoor and outdoor seating right smack in the middle of Chinatown, formerly where Silver Palace stood if I'm not mistaken. Decor is contemporary with great lively choice of music. Patrons are dressed to impress. The views of the city from the outdoor rooftop is spectacular. Expect to pay a pretty penny for drinks here, with cocktails at $15 a pop, and $10 for a bottled beer, excluding tip. Wait times for ordering drinks and using the bathroom can get pretty long during peak hours. On a positive note, there's no cover. Here's a tip: if the hotel asks, tell them you're staying at the hotel, and take the elevator to the rooftop. Otherwise, they send you through the restaurant next door, where a long line usually forms.

I'd suggest coming here with a group of friends to open bottle service by the rooftop, which is probably your best bet for a fun filled weekend night.",
  rating: 5
)


Review.create!(
  business_id: b3.id,
  author_id: u1.id,
  body: "great services",
  rating: 4
)

Review.create!(
  business_id: b3.id,
  author_id: u5.id,
  body: "Absolutely delicious!
Started with the aga tofu appetizer and it was the best I have ever eaten. Sake suggested by the server was soft, smooth, a bit fruity as requested, and chilled perfectly.
The chirashi as the main course: surprising variety of very fresh sushi plated beautifully! First time my chirashi came with eggplant: great addition! Loved how the sushi rice was decorated with roe on top. The wasabi was obviously made from scratch as was the jalapeño relish.
Completed the meal with Mochi ice cream:  vanilla, strawberry and green tea. The Mochi had a balanced blend of softness and texture with the sweet fresh ice cream in the center.
My server was excellent, kind, and attentive! She even brought a cup of hot tea at the end just in case, and it hit the spot. Thank you!
Definitely recommend dining here!",
  rating: 5
)

Review.create!(
  business_id: b4.id,
  author_id: u4.id,
  body: "They have the right idea with the decor. The aesthetic is cool. But that's about it. The restaurant seemed to be poorly managed. The food, well, was extremely underwhelming.
The ribs, a half a rack is all that's needed. Lacked flavor and quality.
he beef rib/brisket was tough. A brisket can be delicious if it's fatty, but it should practically melt in your mouth. This brisket was too tough to chew.
The Branzino was okay.
The prawns were good. The broccoli was terrible. The wings were moist, rather than having any crisp/texture. Aka, they were terrible. Over all, the best thing that hit our table was something we didn't even order - the fried potatoes.
We discovered this spot on Infatuation's site. It's clear that infatuation is now recommending restaurants bc they need material to write about. Save your money and eat at the Odeon down the block.
here's too much great food out there. I can't imagine this spot lasting longer than a year.",
  rating: 3
)


Review.create!(
  business_id: b5.id,
  author_id: u2.id,
  body: "Javon J. came in to do an install to mount an IKEA Kallax box unit on the bedroom wall (4 box). As a heads up make sure you have a screws and anchors as well as proper hardware for the job (luckily there was one nearby on 62nd and 4th ave).
He was not only early to the appointment, but super nice, knowledgeable, and professional throughout the whole process. He was efficient and finished earlier than expected. My wife and I would definitely recommend Javon for any handy job if you live in the NYC area.",
  rating: 5
)

Review.create!(
  business_id: b5.id,
  author_id: u1.id,
  body: "It makes no sense why I was charged $171 / cleaning for a package of four cleanings (for a studio) when the one-time cleaning costs only $138. The price was not clearly noted when booking on mobile and was obviously not listed on the email receipt. Very deceptive...
UPDATE: Spoke with Customer Support below. They explained that much of the pricing is per hour (so what one might assume is $56 is actually $56/hour for three hours, plus undisclosed service fee of $3, hence $171 total). So the lack of transparency and confusing pricing schemes continues to frustrate. I'd recommend MyClean who I've switched to for better honesty. Wish I'd read the other reviewers' comments on pricing before getting into this one!",
  rating: 1
)

Review.create!(
  business_id: b6.id,
  author_id: u4.id,
  body: "Christine did an amazing job cleaning our home in record time. She hit everything we asked for, including the oven (which was a feat in and of itself). She was punctual, brought all the supplies necessary, and left the house smelling great! We can't wait to see her next month! Maid Sailors are amazing-use them.",
  rating: 5
)

Review.create!(
  business_id: b7.id,
  author_id: u5.id,
  body: "Superb!!!!   Eko Flooring & Woodwork restored all of my old 4 1/2 inch oak floors and breathed new life into my home.  My floors were stained in a number of areas, particularly near my steam radiators and they were able to successfully remove all of the dark water marks from my floors.  Other ares of my floors were uneven and un-leveled and Eko Flooring came in and made my floors look completely new.  They water-popped my floors and used the Rosewood Bona Stain and i am just in love!  My re-finished floors make my 1930's home seem brand new. It now possesses a warm rustic, contemporary chic look to the floors that makes the entire home seem rich and modern.  The team at Eko Flooring are knowledgeable and  professional.  They took their time to explain to me what all my options were to assist me in achieving the exact look i was going for.  I also hired Eko Flooring to refinish my deck and it came out stunning. I am pleased with the entire experience from beginning to end. They worked very clean, used top of the line products and were respectful.  When people walk into my home today the first thing that they notice now are my floors! Thank you Eko Flooring for helping me turn my house into a home.",
  rating: 5
)

Review.create!(
  business_id: b8.id,
  author_id: u3.id,
  body: "This place was (and bizarrely still is) the best rated cleaner in the area, so I called and opened an account. I spoke with Lumi who seemed nice at first, despite only telling me everything would be fine when I asked how to show what was dry cleaning vs laundry in the first bag I left.
I left a note on the bad and texted him, and despite all that, he laundered the dry cleaning and then never responded to my text after that.
Dont use this place.",
  rating: 1
)

Review.create!(
  business_id: b8.id,
  author_id: u4.id,
  body: "Really good. Service is excellent. You'll pay extra (Manhattan prices) but when in a pinch, they always come through!",
  rating: 1
)

Review.create!(
  business_id: b9.id,
  author_id: u4.id,
  body: "I recently got a new car and wanted to install front and rear dash cams, as well as an anti-laser/radar system. I originally went to another shop but after taking a deposit they became unresponsive. All I can say is Stefano and his team at Auto Design NYC were the exact OPPOSITE!
I was nervous about having aftermarket mods installed but from day one Stefano was there to answer my questions; all day every day. He was patient and truly listened before making recommendations. Scheduling was a breeze and the work was completed on time. From a price perspective I would put him in the middle. He wasn't the cheapest but he wasn't the most expensive either. Nonetheless, I was happy to pay him after seeing the awesome work he and the team did.
He even took care of the little things for me like inspection and a wash. Truly an all-around awesome experience!",
  rating: 5
)

Review.create!(
  business_id: b9.id,
  author_id: u1.id,
  body: "If you want cosmetic auto work done in the Tri-State area, this is the place to go.  Stefano is incredibly passionate about the work he does, is totally honest and a perfectionist.  Treats your car as his own.  So easy to work with, shop is sophisticated and professional.  All this is done on time and on budget.  I reached out to him via yelp given the favorable reviews (I live in Manhattan) and we quickly developed a dialogue.  Stefano and I discussed what I wanted done with my Audi- he guided me through his thoughts and at no time did I think he was pressuring me to do anything.  His prices were fair and reasonable given the quality of the work.  I left a few choices up to him and he did a great job.  Shortly after I picked up my car, I received many compliments from strangers asking me where I went for the customized work done.  I highly recommend NYC Auto design without any reservations. The workmanship is top notch.",
  rating: 5
)

Review.create!(
  business_id: b9.id,
  author_id: u5.id,
  body: "I brought my Porsche Panamera to Stefano to get a new radar detector a couple years ago.  Since then, if I ever need anything else for my car I have my go to place.  I know I'm going to get a top off the line job done at a very reasonable and honest price.  Being a female in a men's dominated setting in NYC It's common for these guys to try and take advantage thinking I don't know what I'm doing.  I have no worries with Stefano because he took the time to go over every detail of the job and what it's going to cost and the final bill reflects just that.   Auto Design is the place to go if you have any concerns about someone trying to 'get one over' on you.",
  rating: 5
)

Review.create!(
  business_id: b10.id,
  author_id: u3.id,
  body: "They have really cool original gear. Prices are good I couldn't get anything on my lunch but I'll be back.",
  rating: 4
)

Review.create!(
  business_id: b11.id,
  author_id: u3.id,
  body: "I only bought products in it's online shop, but to the physical store, it's amazing, the store look like a treasure house inside, the feeling with buying online are completely different. The product is super rich and high quality, picking dazzling and never want leave here, recommend to visit the physical store.",
  rating: 4
)

Review.create!(
  business_id: b11.id,
  author_id: u2.id,
  body: "Cool shop filled with mostly Japanese cosmetics & beauty supplies (some Korean items too). They also sell Japanese snacks and cute trinkets/phone cases. I had a wonderful time looking at the products, and was astounded by the items they were selling (items that were recently being sold in Japan/Korea). Bad part is that even though they had the latest items, they were really overpriced. If you can afford it, then this place is your paradise. But for those who don't feel like spending too much on items, then this was a bummer. I still go to oo35 to do my Korean skincare/makeup shopping, as it is more affordable. However, Ume is still a cool shop to visit regardless.",
  rating: 3
)

Review.create!(
  business_id: b12.id,
  author_id: u1.id,
  body: "Red rabbit club is Gilded Lily rebranded. Same location, same decor, same cramped space, similar vibe.
  The opening night was filled with a more mature crowd, relative to the young, college kid vibes you'd normally get from the previous Gilded Lily.
  The type of people there ranged highly, from men and women that are very 'Im hipster artistic cool casual' and wore sneakers to women/men that dresses to the nine in sky high platform stilettos/suits.",
  rating: 2
)

Review.create!(
  business_id: b12.id,
  author_id: u4.id,
  body: "Came here for the first time in a club with my baby in mine, and it is about 21 only, and my baby has not been there in a dance club before, and he wanted to get more alcohol drinks on it. So excited for my baby for the date night.",
  rating: 5
)

Review.create!(
  business_id: b12.id,
  author_id: u6.id,
  body: "Have traveled the world and sampled the best nightlife venues there is and Red Rabbit is by far one of the best overall EXPERIENCES I've had inside a club.
  First of all the staff was on point, I was here on a crowded night and my party had no issues getting to our table, ordering our bottles and starting the party!!!
  Our waitress and buss team was on point, not a min went by that some one did not have a full cup, our space was maintained and clean THE ENTIRE NIGHT!! This is a huge pet peeve of mine as my experience in most clubs as the night goes on the waitstaff and supporting team are non attentive and waiting to go home. Our crew was with us to the end and I mean end because we closed the place down.
  Was lucky enough to me one of the new owners, he actually came our table and asked how things were going and if there was anything they can improve? I actually couldn't believe this was happening, I have been going to night life venues for 15+ years and this has NEVER happened I believe his name was Rich, and I must say it was a nice touch to see his attentiveness to his patrons experience, and I'm confident he will be successful there because of it.
  Decor was completely different from the guilded lily, was there numerous times, they made some dope changes and the sound system is insane. Being a big fan of anything red the scene is set by the dim red lights and the party is jumping! DJ was on point and the crowd was reacting to each song like it was concert!
  I couldn't believe how much was going, between the dancers, a pretty dope magician, robots dressed in red lights, and endless surprises I really was amused by the experience!!
  From a night life vet, mark my words, you will bear more from red rabbit club in the near future, there is absolutely nothing like it in NYC. Looking forward to my return this weekend!! Thank you for an amazing time!!",
  rating: 5
)

Review.create!(
  business_id: b12.id,
  author_id: u3.id,
  body: "Went to the grand opening which was awesome, so I decided come back this past weekend with a few friends, and had an amazing time! The staff is incredible and was very accommodating to  all of our requests. I love the atmosphere, vibes, and the music. It's a lot different from all of the other nightclubs and bars in the city, and in a VERY good way! 5* I would highly recommend!",
  rating: 5
)

Review.create!(
  business_id: b13.id,
  author_id: u2.id,
  body: "Wow what a fun place! Hottest place in NYC right now. Beautifully done, they spared no expense. Deep mahogany wood trim, chandeliers and vintage prints from the magazine hanging on the velvet walls. The food was excellent too! We had the big eye tuna, oysters gratin and chicken Milanese. Everything was great and service from our bunny server was on point! The bunnies are gorgeous in their classic Playboy outfits! This is the type of place where it's fun just for a drink at the bar (they have awesome dj every night to dance to) or a nice dinner in the lounge. There's also a nightclub in the back but it's not open yet, I hope they get that up and running soon!  Wouldn't that be fun, to party with the Playboy bunnies! This is a sexy spot and a really fun experience. Will be back for sure!",
  rating: 5
)

Review.create!(
  business_id: b13.id,
  author_id: u6.id,
  body: "Bottle service took forever they came out with juices and soda in cans on the sides which I think didn't  look nice ... There was no toilet paper in any of the women's stalls until a coworker guy came in and refilled them . Other then that the club was ok not what I was expecting I thought it would be more upscale .",
  rating: 2
)

Review.create!(
  business_id: b13.id,
  author_id: u8.id,
  body: "I had a key when the last Playboy Club was here, so I was excited when it reopen. We came here after it was only open a few days. They check your reservations before you enter the first door. You are only entitle to go to the main room unless you have a membership. The room is magnificent. The service is outstanding. The food is very good but many items are Asian since the chef is Asian. If you are are remembering the sexy playboy bunnies outfit from the past, forget about it. It is now a very conservative outfit. In fact you see more at a Hooters. The bottom line, it is a very attractive lounge/restaurant for a date night or to go with a group of friends. Definitely, I will be going back.",
  rating: 5
)

Review.create!(
  business_id: b14.id,
  author_id: u4.id,
  body: "Went here for drinks after an amazing meal at Del posto.
  The Cocktails were super yummy.... Less crowded when we reached at 10...but was a nice crowd by 11:30pm...dj and dancing.... :) :) lots of fun!",
  rating: 4
)

Review.create!(
  business_id: b14.id,
  author_id: u3.id,
  body: "Beautiful lounge - we've been coming here for 3 years now. The crowd is different depending on the time of the night. I prefer going on the earlier side on a Saturday (before 8pm) and you'll get a seat overlooking Central Park. And when you're done you can go get groceries from Whole Foods downstairs when there are no lines",
  rating: 5
)

Review.create!(
  business_id: b14.id,
  author_id: u8.id,
  body: "The drinks were delicious but the vibe here is too swanky for me. The price point of the drinks are closer to $20 than $10 and the wait time for service was long considering it was pretty empty prior to my group arriving. Even though I wouldn't go out of my way to visit here again, I deeply enjoyed both of my drinks and would recommend both to anyone who does visit.",
  rating: 3
)

Review.create!(
  business_id: b14.id,
  author_id: u2.id,
  body: "What an incredible night! We came to celebrate my niece's 21st birthday (intimate group) and Martija, Amanda , and Juan made this an incredible night.  The service was impeccable- they were so attentive and made sure her day was special (even bringing out brownies at the end and singing happy birthday). Btw brownies were warm and also semi sweet. Just simply delicioso. As always the fish tacos are excellent and the ambience perfect.  Thank you Christina (corporate) for making this a memorable night.",
  rating: 5
)

Review.create!(
  business_id: b15.id,
  author_id: u6.id,
  body: "This was one of the worst restaurant experiences I have ever had in New York, and I've been here for eight years. I came November 3 at 3:30 pm with two friends. We just wanted to have cheese and wine, nothing crazy. The waiter told us brunch was closing soon so we ordered right away. We never place our wine order. Finally, after flagging two other servers we finally got our waiter. Our wine didn't arrive until we had finished our entire cheese board AND it was the wrong flight. No on came to check on our table so there was no chance to tell them. We never got water for the table and had to fill water from our own personal water bottles. Our server came to drop the check and said that the shift was changing but to take our time and relax. Right after that, another server came to the table three times checking to see if we were ready to close out. We said we wanted to finish our wines. When we spoke to a manger we explained what happened. He stared blankly. Did not care. Asked us to pay and then stay for next round if we wanted. We told him the service was terrible. He literally yelled terrible and walked away. Will not come again, obviously. Will not recommend to friends. This restaurant need to do some serious customer service trainings.",
  rating: 1
)

Review.create!(
  business_id: b15.id,
  author_id: u2.id,
  body: "Amélie? No... you mean FLAVOR PALACE? Yeees.
  Escargot here. Do it. Also their patê, which we annihilated. Also don't overlook their crunchy vibrant acidic pickled veggies!
  Ordered a flight of wine, escargot (w crispy bread), duck liver patê.... alongside their $30 pick any five charcuterie and cheese board. The blue cheese knocked our socks off. What a serious mouthgasm. All of it. Fuck yeah.
  *This place gets packed. You can eat a full dinner at the bar so make sure to secure a nice little Resoooo on Yelp prior.",
  rating: 4
)

Review.create!(
  business_id: b16.id,
  author_id: u5.id,
  body: "I ate at Ipanema for the first time when my friends visited me from Atlanta. We all wanted to try something new and saw GREAT reviews for this restaurant! We had never had Brazilian/Portuguese cuisine, gave it a shot and we absolutely lovedddd it!
  The food was DELICIOUS. We ordered a variety of dishes and shared.
  We ordered the Picanha, Feijoada Completa, Camarao Empanado and the Churrasco Ipanema. The service was great and the ambiance was very reasonable for group dinners and even a date. I would recommend 10/10 and will definitely be going back. The reviews on here were all correct~",
  rating: 5
)

Review.create!(
  business_id: b16.id,
  author_id: u8.id,
  body: "Came here with a group of 5 on a Friday night. It was busy but we were able to get reservations the day before. The place is pretty big, with seating across two levels.
  There's not much atmosphere, but the food and service were great! We got:
  + One pitcher of sangria, one pitcher of caprahinias - nice and strong
  + Pasteis (three varieties of empanadas) - DELICIOUS!
  + Churrasco Misto - DELICIOUS!
  Our friends also loved what they got but I can't remember what the dishes were called (courtesy of the aforementioned pictures lol).
  Overall a solid choice for Brazilian/Portuguese food! Maybe a little pricier than you can probably find elsewhere (but remember, it's Midtown).",
  rating: 4
)

Review.create!(
  business_id: b16.id,
  author_id: u3.id,
  body: "A friend recommended this location as a nice, upper scale restaurant for a date. My partner and I went here to celebrate a few good news and it did not disappoint! We each had the caipirinha which was nicely done -- they did not skimp us on the alcohol. We also had the calamari which was delicious with the mango sauce. Then for my entree I decided to get the churrasco ipanema. It was a very good portion size, and the crab and shrimp on top with the cheese made for a nice marriage of flavors and texture.
  The service here was very good! Our server was very friendly and attentive -- seems like he's been working there for a while and genuinely enjoys it. It's a good place to go for a nice date, with out of state visitors, or for a business meeting -- not really the place for children.
  We look forward to dining here again.",
  rating: 4
)

Review.create!(
  business_id: b17.id,
  author_id: u7.id,
  body: "I cannot day enough good things about Damian and his team! I am relocating to NY from another state and needed my apartment repainted in a very short timeframe. I was only in town for 2 days to get estimates and my original painter cancelled on me. I contacted Damian after seeing his great reviews and he met me the very next day to assess my apartment. He was extremely through during our meeting and in the estimate he provided. I felt very confident in his expertise after our meeting and hired his team. They just wrapped up work on my apartment and it looks amazing! They have a high attention to detail and are very high quality. I have included before and after pictures below for reference. Thank you Damian!",
  rating: 5
)

Review.create!(
  business_id: b17.id,
  author_id: u1.id,
  body: "I had to cover my red and pink living room walls in white. After a long stressful search I landed on this yelp recommendation. A really reliable team, they did the painting job asap, efficiently and really REALLY carefully. I came back in the afternoon to the house entirely clean and fixed up. Thank you!!",
  rating: 4
)

Review.create!(
  business_id: b19.id,
  author_id: u2.id,
  body: "This place is such a gem!
  I called them up and needed a dress hemmed and mot only did they hem the dress they also took in some parts of the strap which was so needed. Oh did I mention that this was a same day service? Oh and did I also mention it was all done and ready when I got there?
  It is a little more for same day service but I was so pleased that I didn't mind at all. Oh and the manager that I think everyone love, Roy, is really nice. I left smiling bcos he's truly that awesome.
  Keep it up.",
  rating: 5
)

Review.create!(
  business_id: b20.id,
  author_id: u4.id,
  body: "Such great prices, friendly and fast! Nothing has gotten lost, and some of the best tailoring I've had in New York. Even gave us a laundry tag and bag with our name and address on it because they were worried about our other laundry bag (a longchamp I had been using because our other laundry place broke our two laundry bags and refused to fix them). They remember your name and truly treat you like family. My boyfriend almost swears by their dry cleaning. They can do anything. We are so excited to have them in the village!",
  rating: 4
)

Review.create!(
  business_id: b20.id,
  author_id: u6.id,
  body: "Everyone at Sammy's are  always so polite and accommodating.. the go out of their way with customer service and if you need something altered or tailored, they do amazing work.
  I highly recommend them",
  rating: 5
)

Review.create!(
  business_id: b22.id,
  author_id: u2.id,
  body: "love the service i took my car in because another shop told me i needed $4000 worth of work on my audi replacing 2 turbo units due to a leake replace a water pump and timing belt sure enough i came here for an estimate which was free and found out the leake was from my water pump and not the turbo units and was charged $1275 which was $950 less than the dealer quated me and my car was ready the next day. living in n.y where everything is so expensive and you cant take a risk of any mechanic trying to sell you something you dont need all i have to say was that i had a good experience with these guys and hope you do too. they are very nice and proffesional",
  rating: 5
)

Review.create!(
  business_id: b22.id,
  author_id: u5.id,
  body: "OK, so it was snowing like crazy this morning and I drove over to the West Side to do some errands and my car overheated. I called AAA but the garage they assigned to tow me had only one truck working and it was out towing a car near JFK. Great. I cautiously drove up to the 96th Street Mobil gas station, leaving the car on 95th Street because the road was blocked off. At the station I asked if someone could walk down my car and put some coolant in, and was told no. But they gave me the number for Dani, who works for Manhattan Automotive and as luck would have it he was in the neighborhood. He picked me up in his tow truck, drove me to the car, took a look at it, drove me back to the Mobil station where I bought some coolant, back to the car, put the coolant in, refused any money and I started toward home. Only a few blocks later the car overheated again, so I called Dani again. He came right away and towed me home. He was pleasant and knowledgeable. I plan to take my car to my regular mechanic on Monday, but will call Manhattan Automotive for an estimate, once I know what' wrong.",
  rating: 4
)

Review.create!(
  business_id: b23.id,
  author_id: u1.id,
  body: "I have such a wonderful experience working with Ksenia of Ian Rios. I think it's fair to say that I have not come across many places that cater suits for women. Ksenia was very professional, attentive to clients point of view, knowledgeable about different time periods and style of suits and passionate about all those details. I learned so much from her like I just need to button one button, where to put the pin, how much ass the jacket should cover, lol. Everything is in those details, as she would always say. The whole process was fun and yes, I am a repeat costumer. My first suit was a beautiful blue suit with fun fish lining. I look sharp and my boss said I take my unit to the next level with my new style :) My next one is all year round sugar plum color. I can't wait. So ladies, it's time to suit up.",
  rating: 5
)

Review.create!(
  business_id: b24.id,
  author_id: u6.id,
  body: "I live in the neighborhood and was ready to have Alter be my go-to place for clothes.
  Then this happened: I bought a $60 (not expensive) sweater, wore a several times and it started to fall apart. I assumed it was defective and took it back in hopes of replacing it with an identical piece. I really liked it.
  Here's how it went down: I was told by the manager that he could smell me on it and that he couldn't be certain of how I had treated it. Yes, he told me he could smell me on it. He said that Alter has a 5 day return policy and doesn't care if something is defective because there was no proof that I had not destroyed this piece of clothing made in China in the handful of times that I had worn it. Somehow smelling me on it was proof of this. SMELLED ME ON IT, seriously.
  After an argument, he generously (and he told me how generous this was) offered to allow me to exchange the piece for something the same or more expensive RIGHT THEN - no credit, no coming back another day. So, instead of giving me a $60 credit and the chance to come back and shop again and probably buy something nicer, I was forced to choose something right then.
  As I took my exchange, he muttered, I just lost $60. First of all, we all know that the store did not pay $60 for the piece, and second, you didn't lose the cost of one poorly made piece clothing, you lost all the money I would have ever spent there.
  So the value of a customer is less than one cheap piece of clothing. Got it. Good luck with that.",
  rating: 1
)

Review.create!(
  business_id: b24.id,
  author_id: u7.id,
  body: "I was given a Christmas gift of over $150 that was too small, from Alter clothing boutique, but because I live an hour subway ride away from Greenpoint, I couldn't get there to return it until January 26. My hope was to exchange the item for store credit. I had just come from a similar circumstance at another Greenpoint clothing boutique up the street, Wolves Within, where I had a horribly rude experience and where they would not give me store credit or offer any help at all (see my Yelp review). BUT to my great surprise-- Alter was the complete opposite experience!!!!!  The sales person at Alter said I could return my item for store credit if I used up the credit that day. So this lovely young woman and I had a blast as she helped me find items to use up the credit.
  These are neighborhood shops in a neighborhood where my family has lived for nearly 30 years, long before those shops ever existed, and I was born decades before these two young sales women were ever conceived.  The stark difference in attitude was blatant and says everything about management.  One store (Alter) clearly respects their shoppers and takes pride in hiring sales people who are polite, respectful and who cultivate a relationship with its clientele and community.  The other one (Wolves Within) couldn't give a damn about their clients or their community.
  In the end it barely mattes what the shop sells-- after all this is New York, you can get what ever they are selling somewhere else (or even find it online).  So if you don't have polite and respectful customer service, and store policies that cater to the customer, what is the point of having a brick and mortar shop?  ALTER is a great example of why to have a brick and mortar shop and how to cultivate a neighborhood clientele-- and they have high quality goods!",
  rating: 5
)

Review.create!(
  business_id: b25.id,
  author_id: u3.id,
  body: "This beauty spa is a welcome addition to the East Village, and I'm so glad I stumbled upon it. I love a good beauty treatment and try to fit them in as a way to relax, treat myself and fool myself into thinking I can lie about my age, but like most NYers, I have little spare time so convenience is key. Have you ever been to a spa and just know that the table you're on and the equipment being used have not been properly cleaned, like ever? Those kind of places are all over the East Village. You know, the kind of places where you're not sure if you'll get offered a happy ending as part of the service?  That's not for me, so I usually have to go over to SoHo or, god forbid, to midtown for a good treatment. And let's face it, no one who lives in the EV wants to go above 14th St unless absolutely necessary. But those days are long gone now that City Glow is here. It's small but immaculately kept, and just feels cozy in a no-frills kind of way.
  I've been in a few times for lashes, and Anastasia kills it every time. She's diligent, professional and has such a calming presence that you find yourself dozing off as she works on you. My only worry with her is that I will start saying some crazy stuff in my sleep. I also had one facial there, and it was one of the best I've ever had. Most of the time when I get a facial, either my face is torn apart or it seems like the esthetician did nothing but rub some oils on it, but here I really felt and saw the difference.
  I also love that this is a woman-owned business, started by two ladies who worked hard to build knowledge and skills, and to open their own space. They really know their stuff!  It's so hard to manage a successful small business in NYC so hats off to them for doing it with such class and being the ones who actually do the work. I'd rather give my money to kick-ass women entrepreneurs than some faceless owner any day.",
  rating: 5
)

Review.create!(
  business_id: b26.id,
  author_id: u8.id,
  body: "Birchbox Soho is a magical wonderland of friendly employees, makeup and other products. They have pretty polishes, haircare items to holler about, and you can customize a box of deluxe samples in the back. I also like that they have a men's section so you can bring the man in you're life with you and he can get his own retail therapy. It's also a good time to shop for the man in your life for the upcoming holidays.
  Definitely worth the trip if you're in NoHo.",
  rating: 5
)

Review.create!(
  business_id: b26.id,
  author_id: u3.id,
  body: "Hmm... not sure what the bad reviews are about. I like this store, if you get a Birchbox in the mail, then that is exactly how this place is.  Only more items to purchase either in sample size or regular sizes.  Yes, the service here varies.  At times, the staff are super friendly and other times they just ignore you.  Whatever, I like looking around and if I need help and they continue to ignore me or give me an attitude then that's when I have a problem.  Also, if you have an appointment and miss it, expect that your name will be put on the bottom of the list.  That is just how it is, if you do not want that to happen then arrive on time for your appointment.
  Cute Birchbox store, will definitely keep coming when I am around.",
  rating: 3
)

Review.create!(
  business_id: b26.id,
  author_id: u5.id,
  body: "Disappointed is how my visit went.
  As a person in the customer service industry I was surprised int the lack of help and or greeting given to my friend and me during this trip.
  The previous visit we couldn't walk 2 feet without someone asking to assist us or suggesting product for our skin type.
  This time however there were about 20 associates in the store stocking what I can assume was a shipment they had just received. No one smiled or greeted us, nor suggested anything while we browsed around. Once my friend made her selection we went to the register surly we would be greeted and acknowledged. Wrong! Not only did my friend spend over $100 during the transactions we were completely ignored until the register was giving the cashier problems then did she speak to us to have us move to another register so she can complete the transaction.
  A little note for the management staff at birch box... regardless of how much inventory needs to be stocked, acknowledging your guest will not only help your sales for the day but also get rid of the inventory that your staff was so keen on getting placed on the sales floor.",
  rating: 1
)
