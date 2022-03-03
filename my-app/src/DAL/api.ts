import axios from 'axios';
import { ResultCode, UserType, AuthPropsType, authBodyType, ProfileType, PhotoType } from '../types/type';

type ResponseType<D = {}> = {
  resultCode: ResultCode;
  messages: Array<string> | null;
  data: D;
};

type getUserResponseType = {
  items: Array<UserType>;
  totalCount?: number;
  error?: string;
};

type getCaptchaType = {
  url: string;
};

const instence = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/' as string,
  headers: {
    'API-KEY': '6a995dcb-f758-48c0-a11e-158549677c15' as string,
  },
});
export const userAPI = {
  getUsers(
    currentPage: number,
    pageSize: number
  ): Promise<getUserResponseType> {
    return instence
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  followUser(id: string): Promise<ResponseType> {
    return instence
      .post(
        `follow/${id}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data);
  },
  unfollowUser(id: string): Promise<ResponseType> {
    return instence
      .delete(`follow/${id}`, {
        withCredentials: true,
      })
      .then((res) => res.data);
  },
};

export const profileAPI = {
  getProfile(userId: number): Promise<ResponseType<ProfileType>> {
    return instence.get(`profile/${userId}`);
  },
  getStatus(userId: number): Promise<{ data: string }> {
    return instence.get(`profile/status/${userId}`);
  },
  updateStatus(body: { status: string }): Promise<ResponseType> {
    return instence.put('profile/status', body).then((res) => res.data);
  },
  savePhoto(photo: File): Promise<ResponseType<{ photos: PhotoType }>> {
    const formData = new FormData();
    formData.append('image', photo);
    return instence
      .put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },
  saveProfile(body: ProfileType): Promise<ResponseType> {
    return instence.put('profile', body).then((res) => res.data);
  },
};



export const auth = {
  login(body: authBodyType): Promise<ResponseType> {
    return instence.post('auth/login', body).then((res) => res.data);
  },
  logout(): Promise<ResponseType> {
    return instence.delete('auth/login').then((res) => res.data);
  },
  me(): Promise<ResponseType<AuthPropsType>> {
    return instence
      .get('auth/me', {
        withCredentials: true,
      })
      .then((res) => res.data);
  },
  getCaptcha(): Promise<getCaptchaType> {
    return instence.get('security/get-captcha-url').then((res) => res.data);
  },
};
