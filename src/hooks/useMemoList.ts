import { useCallback, useState } from "react"

export const useMemoList = () => {
    const [memos, setMemos] = useState<string[]>([])
    const addTodo = useCallback((text: string) => {
        if (text === "") {
            alert("文字を入力してください")
            return
        }
        const newMemos = [...memos]
        newMemos.push(text)
        setMemos(newMemos)
    }, [memos])

    const deleteTodo = useCallback((index: number) => {
        const newMemos = [...memos]
        newMemos.splice(index, 1)
        setMemos(newMemos)
    }, [memos])

    return {memos, addTodo, deleteTodo}
}