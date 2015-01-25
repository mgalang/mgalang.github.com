(function(exports){
  var canvas1 = new fabric.StaticCanvas('canvas1');

  fabric.Image.fromURL('img/pic1.jpg', function(img1){
    fabric.Image.fromURL('img/pic2.jpg', function(img2){
      // create blend filter with image2
      var filter = new fabric.Image.filters.Blend({
        image: img2,
        mode: 'add',
        alpha: 0.9
      });

      // push filter to image1
      img1.filters.push(filter);

      // apply filters and re-render canvas when done
      img1.applyFilters(canvas1.renderAll.bind(canvas1));

      // add image1 onto canvas1
      canvas1.add(img1);
    });
  });

  var canvas2 = new fabric.StaticCanvas('canvas2');

  fabric.Image.fromURL('img/pic2.jpg', function(img1){
    // create blend filter with color
    var filter = new fabric.Image.filters.Blend({
      color: '#ff0000',
      mode: 'multiply'
    });

    // push filter to image1
    img1.filters.push(filter);

    // apply filters and re-render canvas when done
    img1.applyFilters(canvas2.renderAll.bind(canvas2));

    // add image1 onto canvas2
    canvas2.add(img1);
  });

})(window);
