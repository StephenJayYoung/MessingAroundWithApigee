
function saveWord(entry){

	var client = new Usergrid.Client({
   orgName:"XXXXXXXX", // use your organization
   appName:"sandbox",
   logging: true,
   buildCurl: true
  });

var options = {
    type:"entry",
    word: "foo",
    def: "See 'bar'."
  };

client.createEntity(options, function(error, result){
    if(error) {
      console.log("There was an error!");
    } else {
      console.log("It worked!");
    }
  });


$(function(){
	var entry ={};
	entry.word="Foo";
	entry.def = "see 'Bar'.";
	saveWord(entry);

});