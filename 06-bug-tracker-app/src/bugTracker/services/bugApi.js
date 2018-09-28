import axios from 'axios';

let baseUrl = 'http://localhost:3030/bugs';

function getAll(){
	return axios
		.get(baseUrl)
		.then(response => response.data)
}

function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(baseUrl, bugData)
			.then(response => response.data);
		//new bug - post
	} else {
		//old bug - put
		return axios
			.put(`${baseUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

function remove(bugData){
	return axios
		.delete(`${baseUrl}/${bugData.id}`)
		.then(response => response.data);
}

let bugApi = { getAll, save, remove };

export default bugApi;