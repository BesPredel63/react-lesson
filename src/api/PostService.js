import axios from "axios";

export default class PostService {
    // добавляем к запросу query параметры, чтобы в headers запроса появился параметр x-total-count
    static async getAll(limit = 10, page = 1) {
        // добавляем дополнительный аргумент для функции axios.get, в котором указываем название query запроса и значение, которое мы в него передаем
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id) {
        // добавляем к url адресу id поста
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }
}