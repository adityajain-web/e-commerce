import React, { useEffect, useState } from 'react'

const Header = () => {
    const [width, setWidth] = useState(993)

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    }, [width])

    return (
        <>
            <header>
                {
                    width > 992 ? <>
                        <nav>
                            desktop
                        </nav>
                    </> : <>
                        <nav>
                            mobile
                        </nav>
                    </>
                }
            </header>
        </>
    )
}

export default Header