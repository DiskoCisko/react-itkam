import axios from 'axios';
import { PhotoType } from '../components/Profile/Photo';
import { ProfileType } from '../reduxe/profile_reducer';
import { UserType } from '../reduxe/user-reducer';

type ResponseType = {
  resultCode: number;
  messages: Array<string> | null;
  data: object;
};

type ResponsePhotoType = {
  resultCode: number;
  messages: Array<string> | null;
  data: PhotoType;
};

type authDataType = {
  email: string;
  password: string;
  login: string;
};

type ResponseAuthType = {
  resultCode: number;
  messages: Array<string> | null;
  data: authDataType;
};

type getCaptchaType = {
  url: string;
}

const instence = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6a995dcb-f758-48c0-a11e-158549677c15',
  },
});
export const userAPI = {
  getUsers(currentPage: number, pageSize: number): Promise<UserType> {
    return instence
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  followUser(id: number): Promise<ResponseType> {
    return instence.post(
      `follow/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
  },
  unfollowUser(id: number): Promise<ResponseType> {
    return instence.delete(`follow/${id}`, {
      withCredentials: true,
    });
  },
};

export const profileAPI = {
  getProfile(userId: number): Promise<ProfileType> {
    return instence.get(`profile/${userId}`);
  },
  getStatus(userId: number): Promise<string> {
    return instence.get(`profile/status/${userId}`);
  },
  updateStatus(body: string): Promise<ResponseType> {
    return instence.put('profile/status', body);
  },
  savePhoto(photo: File): Promise<ResponsePhotoType> {
    const formData = new FormData();
    formData.append('image', photo);
    return instence.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(body: ProfileType): Promise<ResponseType> {
    return instence.put('profile', body);
  },
};

export type authBodyType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};

export const auth = {
  login(body: authBodyType): Promise<ResponseType> {
    return instence.post('auth/login', body);
  },
  logout(): Promise<ResponseType> {
    return instence.delete('auth/login');
  },
  me(): Promise<ResponseAuthType> {
    return instence.get('auth/me', {
      withCredentials: true,
    });
  },
  getCaptcha(): Promise<getCaptchaType> {
    return instence.get('security/get-captcha-url');
  },
};
