import axios from 'axios';
import { PhotoType } from '../components/Profile/Photo';
import { ProfileType } from '../reduxe/profile_reducer';

export type UserType = {
  id: number;
  name: string;
  status?: string;
  photos: PhotoType;
  followed: boolean;
};

type getProfileResponseType = {
  resultCode: number;
  messages: Array<string> | null;
  data: ProfileType;
};

type getUserResponseType = {
  items: Array<UserType>;
  totalCount?: number;
  error?: string;
};

type ResponseType = {
    resultCode: number;
    messages: Array<string> | null;
    data: object;
};

type ResponsePhotoType = {

    data: { photos: PhotoType };
    resultCode: number;
    messages: Array<string> | null;

};

export type AuthPropsType = {
  id: number | null;
  login: string | null;
  email: string | null;
};

// type authDataType = {
//   email: string;
//   password: string;
//   login: string;
// };

type ResponseAuthType = {

    data: AuthPropsType;
    messages: Array<string> | null;
    resultCode: number;
};

type getCaptchaType = {

    url: string;

};

export enum ResultCode {
  Succsess = 0,
  Error = 1,
  Captcha = 10
}

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
    return instence.post(
      `follow/${id}`,
      {},
      {
        withCredentials: true,
      }
    )
    .then(res => res.data)
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
  getProfile(userId: number): Promise<getProfileResponseType> {
    return instence.get(`profile/${userId}`);
  },
  getStatus(userId: number): Promise<{ data: string }> {
    return instence.get(`profile/status/${userId}`);
  },
  updateStatus(body: { status: string }): Promise<ResponseType> {
    return instence.put('profile/status', body)
    .then(res =>  res.data);
  },
  savePhoto(photo: File): Promise<ResponsePhotoType> {
    const formData = new FormData();
    formData.append('image', photo);
    return instence.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => res.data)
  },
  saveProfile(body: ProfileType): Promise<ResponseType> {
    return instence.put('profile', body).then((res) => res.data);
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
    return instence.post('auth/login', body).then((res) => res.data);
  },
  logout(): Promise<ResponseType> {
    return instence.delete('auth/login').then((res) => res.data);
  },
  me(): Promise<ResponseAuthType> {
    return instence.get('auth/me', {
      withCredentials: true,
    }).then(res => res.data)
  },
  getCaptcha(): Promise<getCaptchaType> {
    return instence.get('security/get-captcha-url')
    .then(res => res.data)
  },
};
