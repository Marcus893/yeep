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
  pic_url: 'https://www.chelseapub.ca/public/images/gallery/dd4c40bd83bda793d99d6be019825787.jpg',
  address: '336 3rd Ave, New York, NY 10010',
  phone: '(212) 679-6931'
)

b2 = Business.create!(
  body: 'There\'s no cover.',
  name: 'Rooftop 93',
  lat: 40.717019,
  lng: -73.995165,
  category: 'nightlife',
  pic_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/mA3457kUSZwEEB7g0EEvLQ/ls.jpg',
  address: '93 Bowery, New York, NY 10002',
  phone: '(212) 966-9033'
)

b3 = Business.create!(
  body: 'UN square, amazing sushi',
  name: 'Sushi Ryusei',
  lat: 40.748378,
  lng: -73.975209,
  category: 'restaurant',
  pic_url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/38664864/miami-lure-fishbar-sushi-414.0.jpg',
  address: '216 E 39th St, New York, NY 10016',
  phone: '(212) 983-8880'
)

b4 = Business.create!(
  body: 'Don\'t miss the shrimp and the sliders',
  name: 'Holy Ground',
  lat: 40.716095,
  lng: -74.008585,
  category: 'restaurant',
  pic_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/wrOGPch2IZZ0xc0nJfzt8Q/ls.jpg',
  address: '112 Reade St, New York, NY 10013',
  phone: '(646) 882-0666'
)

b5 = Business.create!(
  body: 'cheap and fast home services',
  name: 'Handy',
  lat: 40.764979,
  lng: -73.977895,
  category: 'home service',
  pic_url: 'https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2018/01/cleaning-service.jpg',
  address: '60 2nd Ave, New York, NY 10022',
  phone: '(718) 427-4640'
)

b6 = Business.create!(
  body: 'fast house cleaning service',
  name: 'YiWan home services',
  lat: 40.758359,
  lng: -73.93170,
  category: 'home service',
  pic_url: 'http://wecleandubai.com/wp-content/uploads/2018/08/15-Most-Neglected-Areas-to-Clean-in-Business-Environment.jpg',
  address: '247 W 38th St #601, New York, NY 10018',
  phone: '(212) 876-1000'
)

b7 = Business.create!(
  body: 'cheap and discount!',
  name: 'Richair home solutions',
  lat: 40.775893,
  lng: -73.958990,
  category: 'home service',
  pic_url: 'https://www.maids.com/media/1255/bigstock-197197558.jpg',
  address: '322 8th Ave, New York, NY 10001',
  phone: '(212) 255-5025'
)

b8 = Business.create!(
  body: 'dry cleaning automatic',
  name: 'Alba dry cleaning',
  lat: 40.711222,
  lng: -74.006211,
  category: 'dry cleaning',
  pic_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/0QhM6FZgIZD8GNUj-0iTOw/ls.jpg',
  address: '140 Nassau St, New York, NY 10038',
  phone: '(212) 608-0111'
)

b9 = Business.create!(
  body: 'AutoCraft specializes in high quality and unique auto customization from a team who has been in the business for decades. We provide services as simple as window tinting and …',
  name: 'Autocraft NYC',
  lat: 40.764102,
  lng: -73.997508,
  category: 'auto',
  pic_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/Mxz_Ml6dIZYoDymTGuj0Qg/ls.jpg',
  address: '621 W 46th St, New York, NY 10036',
  phone: '(212) 255-8939'
)

b10 = Business.create!(
  body: 'They have really cool original gear.',
  name: 'Hard Turn',
  lat: 40.758745,
  lng: -73.985923,
  category: 'shopping',
  pic_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/Y6vIRdiXaZ2amYS7Tmeb_g/ls.jpg',
  address: '625 8th Ave #201, New York, NY 10018',
  phone: '(212) 564-6030'
)

b11 = Business.create!(
  body: 'This is the Asian version of Sephora in a way.',
  name: 'Ume Cosme',
  lat: 40.748434,
  lng: -73.988383,
  category: 'beauty',
  pic_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/s0JgcsrDlIEnH-lFjmY13A/ls.jpg',
  address: '1265 Broadway, New York, NY 10001',
  phone: '(917) 409-0378'
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
