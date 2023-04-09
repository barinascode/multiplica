/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';
import HttpError from '../utilities/http-error';
import type HttpRepository from '@shared/core/domain/repositories/http.repository';


const headers = {
	'Content-Type': 'application/json'
};

class HttpRepositoryImpl implements HttpRepository {

	async get<T>(path: string, params?: Record<string, any>, config?: any){
		try {
			const {data} = await axios.get<T>(
				path, { 
					...config,
					params: params,
					headers
				});
			
			return data as T;
		} catch (error) {
		
			if(error instanceof AxiosError){

				if (error.response) {
				// The client was given an error response (5xx, 4xx)
					throw new HttpError(error?.response?.data?.message, {'cause' : error?.response?.data});

				} else if (error.request) {
				// The client never received a response, and the request was never left
					throw new HttpError(error?.message, {'cause' : error?.request});

				} else {
				// Anything else
					throw new HttpError(error?.message, {'cause' : error?.cause});
				}
			}

	
		}
	}

	async post<T>(path: string, params?: Record<string, any>, config?: any){
		try {
			const result = await axios.post<T>(path, { ...params }, { ...config, headers });
			return result as T;
		} catch (error) {
			if(error instanceof AxiosError){

				if (error.response) {
					// The client was given an error response (5xx, 4xx)
					throw new HttpError(error?.response?.data?.message, {'cause' : error?.response?.data});

				} else if (error.request) {
					// The client never received a response, and the request was never left
					throw new HttpError(error?.message, {'cause' : error?.request});

				} else {
					// Anything else
					throw new HttpError(error?.message, {'cause' : error?.cause});
				}

			}
		}
	}
			
	async put<T>(path: string, params?: Record<string, any>, config?: any){
		return axios.put<T>(path, { ...params }, { ...config, headers });
	}

	async delete<T>(path: string, params?: any, config?: any){
		return axios.delete<T>(path, { ...config, params: params, headers });
	}
}

export default HttpRepositoryImpl;