import jwt from "jsonwebtoken"

const genToken = (id)=> {
    try {
        const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        return token
    } catch (error) {
        console.log("gen token error", error)
        throw error
    }
}
export default genToken