import * as Api from './api';
import {
    GET_SYSTEM_ANALYTICS,
} from './constant';

export const getUserDetails = () => {
    return {
        type: GET_SYSTEM_ANALYTICS,
        payload: Api.getUserDetails()
    }
};