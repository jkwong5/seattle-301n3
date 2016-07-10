(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
<<<<<<< HEAD

    var render = Handlebars.compile($('#repo-template').html());

=======
  var render;
>>>>>>> ef2f25eee6ec31e4df18aa5e7a626c2e31cbb700

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();
<<<<<<< HEAD
    $('#about ul').append(
=======

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#about ul').append(
      // REVIEW: we added the `name` property here as our initial filter property. Try
      // changing it to see what happens!
>>>>>>> ef2f25eee6ec31e4df18aa5e7a626c2e31cbb700
      repos.with('name').map(render)
    );
  };

<<<<<<< HEAD
  // The jQuery `append` method lets us append an entire array of HTML elements at once,
  // So we can use a little FP to transform our data-set into DOM nodes:
  // REVIEW: we added the `name` property here as our initial filter property. Try
  // changing it to see what happens!

=======
>>>>>>> ef2f25eee6ec31e4df18aa5e7a626c2e31cbb700
  module.repoView = repoView;
})(window);
