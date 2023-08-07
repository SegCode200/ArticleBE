import axios from "axios"

const url: string = 'http://localhost:3400/api/v1'

export const viewAuthor = async () => {
    try {
        return await axios.get(`${url}/get-authors`).then((res: any) => {
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
} 

export const AuthorsCategory = async(id: string, props:string)=>{
    try {
        console.log(props)
        return await axios.post(`${url}/${id}/catergory-author`, props).then((res: any) => {
            console.log("All Data",res)
            return res.data.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}