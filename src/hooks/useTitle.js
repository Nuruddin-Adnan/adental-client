import { useEffect } from "react"

const useTiele = (title) => {
    useEffect(() => {
        document.title = `${title} - ADENTAL`
    }, [title])
}

export default useTiele;