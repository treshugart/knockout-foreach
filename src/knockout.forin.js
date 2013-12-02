define(['knockout'], function(ko) {

  function buildContext(obj, ctx) {
    var props = [];

    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        props.push({
          key: a,
          val: obj[a]
        });
      }
    }

    return props;
  };

  ko.virtualElements.allowedBindings.forin = true;

  return {
    init: function(el, value, bindings, model, context) {
      ko.applyBindingsToNode(el, {
        foreach: buildContext(ko.unwrap(value()), context)
      });

      return {
        controlsDescendantBindings: true
      };
    }
  };

});