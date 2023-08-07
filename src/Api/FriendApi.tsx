import axios from "axios"

const url: string = 'http://localhost:3400/api/v1'

export const beFriend = async (userID: string, friendID: string) => {
    try {
        return await axios.post(`${url}/${userID}/${friendID}/be-friend`,).then((res: any) => {
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
} 