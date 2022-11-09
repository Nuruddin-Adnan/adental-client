import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - ADENTAL`
    }, [title])
}

export default useTitle;