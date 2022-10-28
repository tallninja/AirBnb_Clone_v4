const $ = window.$;
const amenities = [];

$(document).ready(function () {
  $('.amenity_checkbox').click(function () {
    const amenityId = $(this).data('id');
    if (amenities.includes(amenityId)) {
      const index = amenities.indexOf(amenityId);
      if (index !== -1) {
        amenities.splice(index, 1);
      }
    } else {
      amenities.push(amenityId);
    }
    console.log(amenities);
  });
});
