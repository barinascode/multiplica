interface HttpRepository {
    get: <T>(_path: string, _params?: Record<string, any>, _config?: any) => Promise<T | any>;
    post: <T>(_path: string, _params?: Record<string, any>, _config?: any) => Promise<T | any>;
    put: <T>(_path: string, _params?: Record<string, any>, _config?: any) => Promise<T | any>;
    delete: <T>(_path: string, _params?: any, _config?: any) => Promise<T | any>;
}

export default HttpRepository;