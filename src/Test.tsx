import React, {useEffect, useState} from "react"
import {hiragana} from "./hiragana";
import {gatakana} from "./gatakana";
import {shuffle} from "./util";

interface ITest {
    selection: string[],
    reset: any,
    gatakana: boolean
}

export default function TestView({selection, reset, gatakana: isGatakana} : ITest) {
    const [items, setItems] = useState<any>([]);
    const [target, setTarget] = useState<any>(undefined);
    const [answer, setAnswer] = useState<boolean>(false);

    useEffect(() => {
        init()
    }, [selection])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const {key} = e;

        if (key === "Enter") {
            next();
        }
    }

    const next = () => {
        if (answer) {
            setAnswer(false)
            setTarget(items.pop())
        } else {
            setAnswer(true)
        }
    }

    const init = () => {
        const allItems: string[] = [];

        setAnswer(false)

        selection.forEach((sel) => {
            // @ts-ignore
            allItems.push(...hiragana[sel])

            if (isGatakana) {
                // @ts-ignore
                allItems.push(...gatakana[sel])
            }
        })

        shuffle(allItems);
        setItems(allItems);
        setTarget(allItems.pop())
    }

    useEffect(() => {
        // @ts-ignore
        window.onkeydown = handleKeyDown
        window.onclick = next
    })

    const reStart = (e : any) => {
        e.stopPropagation();

        setAnswer(false)
        init()
    }

    const resetAll = () => {
        setAnswer(false)
        reset();
    }


    return (
        target
            ? <div style={{
                fontSize: "300px"
            }} className="text-center h1"
            >
                <button onClick={reStart} className="d-block btn btn-outline-dark m-5 ml-auto">ReStart</button>
                {Object.keys(target)[0]}
                <div style={{
                    fontSize: "150px"
                }}>{answer &&  Object.values(target)[0] as string }</div>
            </div>
            : <div>
                <button onClick={init} type="button" className="btn btn-outline-dark btn-lg btn-block w-50 mx-auto mt-5">Re Start</button>
                <button onClick={resetAll} type="button" className="btn btn-outline-dark btn-lg btn-block w-50 mx-auto mt-5">Reset</button>
            </div>
    )
}