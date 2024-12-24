import axiosInstance from "./axiosInstance";

const apiService = {
    get: async (url, params = {}, headers = {}) => {
        try {
            const response = await axiosInstance.get(url, {
                params,
                headers
            });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    post: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosInstance.post(url, data, { headers });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    put: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosInstance.put(url, data, { headers });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    patch: async (url, data = {}, headers = {}) => {
        try {
            const response = await axiosInstance.patch(url, data, { headers });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },

    delete: async (url, params = {}, headers = {}) => {
        try {
            const response = await axiosInstance.delete(url, {
                params,
                headers
            });
            return response.data;
        } catch (error) {
            handleApiError(error);
        }
    },
};

const handleApiError = (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "An error occurred");
};

export default apiService;
