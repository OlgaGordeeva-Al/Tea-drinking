ymaps.ready(init);

async function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.95, 32.44],
    zoom: 1,
  });
  const entrys = await fetch('/getentry');
  const arrentrys = await entrys.json();
  

  for (let i = 0; i < arrentrys.length; i++) {
    if (arrentrys[i].coordinates) {
      const myPlacemark1 = new ymaps.Placemark(arrentrys[i].coordinates, {
        balloonContent: `ПОДРОБНЕЕ: <a href="/card/${arrentrys[i]._id}">${arrentrys[i].title}</a>`,
      }, {
        iconLayout: 'default#image',
        // iconImageClipRect: [[0, 0], [26, 47]],
        iconImageHref: 'img/green-tea.svg',
        // iconImageSize: [25, 37],
        // iconImageOffset: [-25, -37],
      });
      myMap.geoObjects.add(myPlacemark1);
    }
  }
}

