(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.

<<<<<<< HEAD
    $.ajax({
      url: 'https://api.github.com/users/jkwong5/repos?per_page=10&sorted=updated',
      type: 'GET',
      headers: {'authorization': 'token ' + token},
      success: function(data){
        repos.all = data;
        // data.forEach(function(ele){
        //   console.log(ele);
        // });
      }
    }).done(callback);
=======
>>>>>>> ef2f25eee6ec31e4df18aa5e7a626c2e31cbb700
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
