module.exports = {
	findMinMax: function findMinMax(array){
		var min = array[0];
		var max = array[0];
		var result = [];

		for ( var i = 1; i < array.length; i++){
			if (array[i] < min){
				min = array[i];
			}
			if (array[i] > max){
				max = array[i];
			}
		}
		
		if(min == max){
			result[0] = min
			return result;
		}

		else{
			result[0] = min;
			result[1] = max;
			return result;
		} 
	}

}