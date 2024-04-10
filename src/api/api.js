import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`,
                {
                    withCredentials: true,
                }
            )
            .then(response => response.data)
    },
}