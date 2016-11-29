function words(statement){
	var count = 1;
	var found = false;
	statement = statement.replace(/\s\s+/g, " "); // replacing multiple spaces as one
	var words = statement.split(/[\n|\t|\s]/); // delimeters used to split the statement
	var wordCount = {};  //The object to be returned
	for(var i = 0; i < words.length; i++){
			if (words[i] == words[index]){
	    		continue;   // continue if this word has been counted
	  		}
	  
		for(var j = i+1; j < words.length; j++){
			if(words[i] === words[j]){
				count++;
				found = true;
			}
		}
		if(!found){
		  count = 1; // set count to 1 if there is only one occurence of the word
		}
    	wordCount[words[i]] = count;  // fill in the result to be returned

	    if(count > 1){
	      var index = i; // get the index of the current word being checked
	    }

	    found = false;
	}
	
	return wordCount 
}

module.exports = {words:words}