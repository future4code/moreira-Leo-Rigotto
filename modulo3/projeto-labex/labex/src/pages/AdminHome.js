import { useCheck } from "../services/useCheck"

export const AdminHome = () => {

    useCheck()

    const isLoggedIn = useCheck()

    return <div>
        {isLoggedIn.checked ? <p>AdminHome</p> : <></>}
    </div>
}