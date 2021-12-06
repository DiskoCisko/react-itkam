import axios from 'axios';

const instence = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6a995dcb-f758-48c0-a11e-158549677c15'
    },

})
export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instence.get(`users?page=${currentPage}&count=${pageSize}`,{
            withCredentials: true
        })
        .then((response)=>{
            return response.data
        })
    },
    followUser(id) {
        return instence.post(`follow/${id}`,{},{
            withCredentials: true,    
        })
    },
    unfollowUser(id) {
        return instence.delete(`follow/${id}`,{
            withCredentials: true,
        })
    },   
    
}

export const profileAPI = {
    getProfile (userId) {
        return instence.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instence.get(`profile/status/${userId}`)
    },
    updateStatus (body) {
        return instence.put(`profile/status`, body)
    },
    savePhoto (photo) {
        const formData = new FormData();
        formData.append("image", photo)
        return instence.put(`profile/photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
    } )},
    saveProfile (body) {
        return instence.put(`profile`, body)
    }
}

export const auth = {
    login(body) {
        return instence.post(`auth/login`, body)
    },
    logout() {
        return instence.delete(`auth/login`)
    },
    me () {
        return instence.get('auth/me', {
            withCredentials: true
        })  
    }
    
}