(function(window, undefined) {
  var dictionary = {
    "6210c73a-7f87-4cb9-9e1d-8bffc4029650": "Location",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "9ae28311-ada2-4b53-a225-b0740d70735b": "Job list",
    "e2cf73be-043b-458d-8b6a-323c6d6c9973": "Post Job",
    "1f962bd9-be19-4c1f-9d4a-e91920073ad5": "Success",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);