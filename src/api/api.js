import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "17c75427-6dd7-48a6-8850-bc0553a8fc15"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data;
            })
    },
    follow  (userId)  {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    }
};

export const profileAPI = {
    getProfile (userId)  {
        return instance.get(`profile/` +userId)
        .then(response => {
            return response.data
        })
    }
};

export const authAPI = {
    me ()  {
        return instance.get(`auth/me`).then(response => {
                return response.data
            })

    },
};
