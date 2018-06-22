class CacheService{
    constructor(){
        this.cache = {};
    }
    setDataByKey(data,key){
        this.cache[key] = data;
    }
    getDataByKey(key){
        return this.cache[key];
    }
}
const cacheServiceObj = new CacheService()
export default cacheServiceObj;