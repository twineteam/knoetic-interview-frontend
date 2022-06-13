import { useState } from 'react'

// Given counter_list string, try to parse the object and verify the schema
const tryParseCounter = (counterListStr) => {
    try {
        const list = JSON.parse(counterListStr)
        list.forEach((counter, idx) => {
            if (typeof counter.name !== 'string') throw new Error(`Missing counter name at index ${idx}`)
            if (typeof counter.count !== 'number') throw new Error(`Missing counter count at index ${idx}`)
        })
        return list
    } catch (e) {
        return []
    }
}

const COUNTER_LIST_KEY = 'counter_list'

// Return counter list { name, count }
export function useCounterList() {
    const [counterList, _setCounterList] = useState(() => {
        if (localStorage.getItem(COUNTER_LIST_KEY)) {
            return tryParseCounter(localStorage.getItem(COUNTER_LIST_KEY)) || []
        }
        return []
    })
    const setCounterList = (nextData) => {
        localStorage.setItem(COUNTER_LIST_KEY, JSON.stringify(nextData))
        _setCounterList(nextData)
    }
    const add = (defaultName = 'New Counter') => {
        setCounterList([...counterList, { count: 0, name: defaultName }])
    }
    const remove = (idx) => {
        setCounterList([...counterList.slice(0, idx), ...counterList.slice(idx + 1)])
    }
    const editName = (idx, nextName) => {
        counterList[idx].name = nextName
        setCounterList([...counterList])
    }
    const upCount = (idx) => {
        counterList[idx].count = counterList[idx].count + 1
        setCounterList([...counterList])
    }
    const downCount = (idx) => {
        counterList[idx].count = counterList[idx].count - 1
        setCounterList([...counterList])
    }
    return {
        counterList,
        actions: { add, remove, editName, upCount, downCount }
    }
}
