import { useContext } from 'react';

import UserContext from "../contexts/UserContext"

export default function Today() {
    const { user } = useContext(UserContext);
    console.log(user);

    return <p>/hoje</p>
}