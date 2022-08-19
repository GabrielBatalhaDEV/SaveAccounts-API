import {connect} from "../database"

interface IUser {
  name: string
  email: string
  password: string
}


const userSchema = new connect.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true}
})

const User = connect.model<IUser>("User",userSchema)
