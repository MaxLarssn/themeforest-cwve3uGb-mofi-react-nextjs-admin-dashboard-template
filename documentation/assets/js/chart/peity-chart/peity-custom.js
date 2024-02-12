$(".bar-colours-3").peity("bar", {
  fill: function(_, i, all) {
    var g = parseInt((i / all.length) * 145)
    return "rgb(145, " + g + ", 252)"
  },
  width: '100',
  height: '82'
})
