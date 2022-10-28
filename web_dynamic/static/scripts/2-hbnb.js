$(function () {
  const amenities = [];
  const amenityCheckbox = $('.amenity_checkbox');

  amenityCheckbox.click(function () {
    const amenityId = $(this).data('id');
    if (amenities.includes(amenityId)) {
      const index = amenities.indexOf(amenityId);
      if (index !== -1) amenities.splice(index, 1);
    } else amenities.push(amenityId);
    console.log(amenities);
  });

  const URL = 'http://0.0.0.0:5001/api/v1/status/';
  const apiStatus = $('#api_status');

  $.get(URL, (res, status) => {
    if (res.status === 'OK') apiStatus.addClass('available');
    else apiStatus.removeClass('available');
  });
});
