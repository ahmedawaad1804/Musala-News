import axiosInstance from './axiosInstance';
import {getAllNews} from './request';
export default {
  getAllNews: () => {
    return axiosInstance.get(getAllNews);
  },
};
