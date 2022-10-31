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

    const pURL = 'http://0.0.0.0:5001/api/v1/places_search/';
    $.post(
        {
            url: pURL,
            data: {},
            dataType: 'json',
            contentType: 'application/json'
        }
    ).done((res) =>{
        // console.log(res);
        $.each(res, (key, place) =>{
            const desc = $('<div class="description"></div>').html(place.description);
            const numofRooms = $('<div class="number_rooms"></div>').text(place.number_rooms);
            const maxGuest = $('<div class="max_guest"></div>').text(place.max_guest);
            const numofBath = $('<div class="number_bathrooms"></div>').text(place.number_bathrooms);
            const name = $('<h2 class="name"></h2>').text(place.name);
            const priceByNight = $('<div class="price_by_night"></div>').text(place.price_by_night);
            const titleBx = $('<div class="title_box"></div>').append(name).append(priceByNight);
            const infor = $('<div class="information"></div>').append(maxGuest).append(numofRooms).append(numofBath);
            const article = $('<article></article>').append(titleBx).append(infor).append(desc);

            $('section.places').append(article);
        })
    })
  });
  