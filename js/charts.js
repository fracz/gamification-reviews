// Generated by CoffeeScript 1.9.3
(function() {
  var chart, mcrBar, mcrPie;

  chart = function(type, id, data) {
    return {
      selector: id,
      type: type,
      data: data,
      options: {
        animationSteps: 60,
        responsive: true,
        scaleFontColor: '#CCC',
        scaleLineColor: '#999'
      }
    };
  };

  mcrPie = function(id, mobile, pc) {
    return chart('pie', id, [
      {
        value: mobile,
        color: '#00A000',
        highlight: '#00B000',
        label: 'Mobile'
      }, {
        value: pc,
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'PC'
      }
    ]);
  };

  mcrBar = function(id, mobile, pc) {
    return chart('bar', id, {
      labels: ['Mobile', 'PC'],
      datasets: [
        {
          fillColor: '#1a53a1',
          data: [mobile, pc]
        }
      ]
    });
  };

  window.CHARTS = [
    mcrPie('#mcr-reviews', 79, 102), mcrPie('#mcr-comments', 1103, 1323), mcrBar('#mcr-comments-avg', 14, 13), mcrBar('#mcr-smells-avg', 8.9, 8.8), mcrBar('#mcr-worthless', 3.9, 3.6), (function() {
      var pie;
      pie = mcrPie('#mcr-comment-types', 454, 649);
      pie.data[0].label = 'Predefined';
      pie.data[1].label = 'Text';
      return pie;
    })()
  ];

}).call(this);
