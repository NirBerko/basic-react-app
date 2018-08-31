import axios from 'axios'

export const getUserDetails = async () => {
    return await axios.get(`/getUserDetails`).then(res => res.data);
};