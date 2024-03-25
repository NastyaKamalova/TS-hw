import type { UserType } from "../api/api";

interface UserProps {
    user: UserType | null
}

type GetFullName = (firstName: string, lastName: string) => string;
const getFullName: GetFullName = (firstName, lastName) => firstName + ' ' + lastName;

const User = ({ user }: UserProps) => {
    return(
        <>
        <h1>User Page</h1>
        {
            !user ? (
                <>loading...</>
            ) : (
                <>
                    <div>name: {user.name}</div>
                    <div>surname: {user.surname}</div>
                    <div>full name: {getFullName(user.name, user.surname)}</div>
                    <div>age: {user.age}</div>
                </>
            )
        }

        </>
    )
}

export default User;