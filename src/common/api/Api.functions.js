const API_BASE_URL = 'http://llamas.kunnect.co/kunnect'

/* User Endpoints */

export const changePasswordAPI = () => `${API_BASE_URL}/user/changePassword`;

export const createUserAPI = () => `${API_BASE_URL}/user`;

export const forgotPasswordAPI = () => `${API_BASE_URL}/user/forgotPassword`;

export const getUserDataAPI = () => `${API_BASE_URL}/user`;

export const loginAPI = () => `${API_BASE_URL}/login`;

export const verifyMailAPI = () => `${API_BASE_URL}/user/verify`;

/* Kuluster Endpoints */

export const createKulusterAPI = () => `${API_BASE_URL}/kuluster`;