
var gitHub = require('./../js/github.js').gitHubModule;

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var result= new gitHub(username);
    // result.getRepos();
    result.Getuserinfo();
  });
});
