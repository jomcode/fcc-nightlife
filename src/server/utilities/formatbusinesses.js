const formatBusinesses = businesses => businesses.map(b => Object.assign({}, {
  rating: b.rating,
  reviewCount: b.review_count,
  name: b.name,
  phone: b.display_phone,
  imageUrl: b.image_url,
  snippet: {
    text: b.snippet_text
  },
  id: b.id,
  isOpen: !b.is_closed,
  location: {
    city: b.location.city,
    zipCode: b.location.postal_code,
    state: b.location.state_code,
    displayAddress: b.location.display_address.slice(0)
  }
}));

module.exports = formatBusinesses;
