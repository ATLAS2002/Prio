'ues client'
import { poppins } from '@/styles/fonts'
import styles from '@/styles/modules/header.module.css'
import { useState } from 'react'

const HeaderButton = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div
        className={`${poppins.className} ${styles.bg} text-9xl text-purple-300 opacity-80 absolute top-0 left-0 px-28 py-20 text-left selection:bg-purple-700 selection:text-purple-200`}>
            <h1>
                <button onClick={() => setShow(!show)}>Prio</button>
                <span className={`${show ? 'opacity-100' : 'opacity-0'}`}>
                    ritize the People you love the most.
                </span>
            </h1>
        </div>
    )
}

export default HeaderButton;