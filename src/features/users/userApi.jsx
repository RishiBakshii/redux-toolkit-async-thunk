export const getUserDataApi=async()=>{
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const json=await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}