var apiKey = require('./../.env').apiKey;

function gitHub(username) {
  this.username = username;
}

gitHub.prototype.Getuserinfo = function(){
  var username = this.username;
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(respond){
    console.log(respond);
      $("#userinfo").html("<h3>Name: " + respond.name + "<br>Email: " + respond.email + "<br>Location: " + respond.location + "<br>Bio: " + respond.bio + "</h3>" );
  }).fail(function(error){
    alert(error.responseJSON.message);
  });

};

gitHub.prototype.getRepos = function(){
  var username = this.username;
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repos){
      $("#list").append("<li><span class='fight'>" + repos.name + "</span><ul><li><span class ='discrp'>Description: " + repos.description + "</li></span><li>Date: "+ moment(repos.created_at).format("MM/DD/YY") +"</li></li></ul></li>");
    });
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};

exports.gitHubModule = gitHub;
