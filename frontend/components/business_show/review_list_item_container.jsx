import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body } = review;
  return (
    <div>
      <ul>
        <li className="review">
          <div className="review-container">
            <div className="user-info">
              <div className="profile-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Leonardo_DiCaprio_January_2014.jpg/212px-Leonardo_DiCaprio_January_2014.jpg" />
              </div>
            </div>
            <div className="info">
              <section className="name"><a>Danny B.</a></section>
              <section className="review-count">
                <div>
                  <i className="fa fa-star"></i>
                </div>
                <span>32</span>
                <span className="light-weight">reviews</span>
              </section>
              <section className="photo-count">
                <i className="fa fa-camera"></i>
                <span>18</span>
                <span className="light-weight">photos</span>
              </section>
            </div>
          </div>
          <div className="review-info">
            <div className="review-content">
              <div className="rate">
                <div className="star"></div>
                <span className="date">4/7/2017</span>
              </div>
              <p className="body">I would say this place is good. But just personally I like chicken that's more tender, the meat was too hard for me. Flavor was good and the seasoning they offer was tasty. Winter melon soup and the rice was tasty! The owner was standing at the door watch people eat which is kinda awkward for such a small space.....</p>
            </div>
          </div>
        </li>

        <li className="review">
          <div className="review-container">
            <div className="user-info">
              <div className="profile-img">
                <img src="https://www.hollywoodreporter.com/sites/default/files/2011/08/kanyewest_a.jpg" />
              </div>
            </div>
            <div className="info">
              <section className="name"><a>Mike C.</a></section>
              <section className="review-count">
                <div>
                  <i className="fa fa-star"></i>
                </div>
                <span>22</span>
                <span className="light-weight">reviews</span>
              </section>
              <section className="photo-count">
                <i className="fa fa-camera"></i>
                <span>67</span>
                <span className="light-weight">photos</span>
              </section>
            </div>
          </div>
          <div className="review-info">
            <div className="review-content">
              <div className="rate">
                <div className="star"></div>
                <span className="date">9/5/2016</span>
              </div>
              <p className="body"> I usually get take out from here for lunch while I'm at the office, but decided to come in for lunch to meet up with a friend in NY from out of town who is vegan and gluten-free.  Will probably stick to take out from now on... The service:
               Could NOT get the servers to crack a smile.  Later realized I noticed them smile, but only after talking to their co-workers.  They seemed VERY put out that we wanted to combine two tables on the banquette, so we could both sit on the booth side during lunch.  This was at 1:30 and there were two other tables in the restaurant.  The rest was empty.  Even after assuring them several times that we would absolutely move if they needed the table, they still looked completely indignant and inconvenienced.  There would be nothing that would console them.  /shrug
                The food: Definitely still some of the best Thai food in NYC.  I love their green curry and their mango salad was beautiful and delicious.  The only reason they get 4 stars instead of 3.  They would get 5 if the service was even remotely friendly.
                 So again, get take out.  :)</p>
            </div>
          </div>
        </li>

        <li className="review">
          <div className="review-container">
            <div className="user-info">
              <div className="profile-img">
                <img src="http://www.sayelbatimes.com/wp-content/uploads/2015/02/nicki-minaj.jpg" />
              </div>
            </div>
            <div className="info">
              <section className="name"><a>Nicky G.</a></section>
              <section className="review-count">
                <div>
                  <i className="fa fa-star"></i>
                </div>
                <span>13</span>
                <span className="light-weight">reviews</span>
              </section>
              <section className="photo-count">
                <i className="fa fa-camera"></i>
                <span>52</span>
                <span className="light-weight">photos</span>
              </section>
            </div>
          </div>
          <div className="review-info">
            <div className="review-content">
              <div className="rate">
                <div className="star"></div>
                <span className="date">3/15/2016</span>
              </div>
              <p className="body"> I usually go to Talent for Thai food but I decided to try this place out with a friend.  We came at the beginning of lunch at 11:30am so the place was empty.  The decor was pretty and the restaurant was pretty spacious for a typical restaurant in NYC.  We ordered the lunch special which comes with vegetable soup, appetizer, and entree for $9.50.  I ordered the chicken larb salad for the appetizer and the tofu pad kee mao for entree.  The vegetable soup was small and not memorable.  It had a really weird sweet aftertaste.  I feel like they could offer a drink instead.  The chicken larb salad was good, tasted fresh and had a lot of chicken.  The tofu pad kee mao was spicy and delicious.  The service was fast and friendly.   Talent has a better lunch deal (drink, appetizer, entree for about the same price) but Lan Larb has higher quality food.  I would come back for lunch.</p>
            </div>
          </div>
        </li>


      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);
