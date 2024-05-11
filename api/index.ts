import axiosConfig from "@/configs/axios";

const axiosGet = (url: string, config = {}) => {
	return axiosConfig.get(url, config);
};

const axiosPost = (url: string, data = {}, config = {}) => {
	return axiosConfig.post(url, data, config);
};

export { axiosGet, axiosPost };
