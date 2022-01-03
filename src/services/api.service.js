import axios from 'axios'

class ApiService {
    test () {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

export default new ApiService()