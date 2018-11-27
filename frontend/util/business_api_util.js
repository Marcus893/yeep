export const fetchBusinesses = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/businesses',
    data
  });
};

export const fetchBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${id}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const createBusiness = business => (
  $.ajax({
    method: 'POST',
    url: 'api/businesses',
    data: { business }
  })
);
