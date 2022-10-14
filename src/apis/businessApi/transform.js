// Create transform data function
const transformDataApi = (data) => {
    if(!data){
        return;
    }
    return {
        data: data.result
    }
}