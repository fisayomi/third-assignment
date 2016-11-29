function words(statement){
	var count = 1;
	var found = false;
	statement = statement.replace(/\s\s+/g, " "); // replacing multiple spaces as one
	var words = statement.split(/[\n|\t|\s]/);
	var val = {};
	for(var i = 0; i < words.length; i++){
			if (words[i] == words[index]){
	    		continue;
	  		}
	  
		for(var j = i+1; j < words.length; j++){
			if(words[i] === words[j]){
				count++;
				found = true;
			}
		}
		if(!found){
		  count = 1;
		}
    	val[words[i]] = count;

	    if(count > 1){
	      var index = i;
	    }
	    found = false;
	}
	
	return val 
}

module.exports = {words:words}