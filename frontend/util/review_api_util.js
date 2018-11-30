export const fetchAllReviews = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews'
  });
};
