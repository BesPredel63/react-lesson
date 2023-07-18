import {useState} from "react";

export const useFetching = (callback) => {
    // отслеживаем состояние индикатора загрузки
    const [isLoading, setIsLoading] = useState(false)
    // отслеживаем возможно возникающие ошибки
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            // запускаем индикатор загрузки
            setIsLoading(true)
            // обрабатываем принимаемую callback функцию
            await callback(...args)
        } catch (e) {
            // выводим сообщение об ошибке
            setError(e.message)
        } finally {
            // завершаем отображение загрузчика
            setIsLoading(false)
        }
    }
    // параметры, которые возвражает хук
    return [fetching, isLoading, error]
}
