// Create transform data function
export const transformDataApi = (data) => {
    if(!data){
        return;
    }
    return {
        data: data.result
    }
}