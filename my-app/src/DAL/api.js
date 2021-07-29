import axios from 'axios';
import { FOLLOW_USER } from '../reduxe/actions';

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
    getProfile (userId) {
        return instence.get(`profile/${userId}`)
    }
}

export const auth = {
    me () {
        return instence.get('auth/me', {
            withCredentials: true
        })  
    }
    
}