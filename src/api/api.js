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
        return instance.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const profileAPI = {
    getProfile (userId)  {
        return instance.get(`profile/` +userId)
        .then(response => {
            return response.data
        });
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status:status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
