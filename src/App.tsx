import React, {useState} from 'react';
import './App.css';
import {EHiragana, hiragana} from "./hiragana";
import TestView from "./Test";
import {EGatakana} from "./gatakana";

function App() {
    const [selection, setSelection] = useState<string[]>([])
    const [start, setStart] = useState<boolean>(false);
    const [gatakana, setGatakana] = useState<boolean>(false);

    const toggleItems = (e: any) => {
        const {value} = e.target.dataset;
        let res;

        if (selection.includes(value)) {
            res = selection.filter((v: string) => v !== value)
        } else {
            res = [...selection, value]
        }

        setSelection(res)
        console.log(res)
    }

    const onStart = () => {
        setStart(true)
    }

    const reset = () => {
        setStart(false)
        setSelection([])
    }

    const toggleGatakana = () => {
        setGatakana(!gatakana);
    }

    const selectAll = () => {
        setSelection(Object.keys(hiragana))
    }

    const resetSelection = () => {
        setSelection([])
    }

    return (
        !start
            ? <div className="text-center">
                <div className="h1 my-5">ひらがな / カタカナ</div>
                <div>
                    <div className="list-group my-5 mx-auto container p-0">
                        <div className="row justify-content-end m-0">
                            <button type="button" onClick={toggleGatakana} className={`btn btn-sm m-2 ${gatakana ? "btn-dark" : "btn-outline-dark" }`}>カタカナ</button>
                            <button type="button" onClick={selectAll} className="btn btn-sm m-2 mr-2 btn-outline-dark">전체 선택</button>
                            <button type="button" onClick={resetSelection} className="btn btn-sm m-2  btn-outline-info">전체 취소</button>
                        </div>
                        {
                            Object.keys(hiragana).map((h: string) =>
                                <div onClick={toggleItems} key={h} data-value={h} className={`list-group-item list-group-item-action list-group-item-light ${selection.includes(h) ? "active" : ""}`}>
                                    {
                                        // @ts-ignore
                                        gatakana? `${EHiragana[h]} / ${EGatakana[h]}`  : `${EHiragana[h]}`
                                    }
                                </div>)
                        }
                    </div>
                </div>
                <button onClick={onStart} type="button" className="btn btn-outline-dark btn-lg btn-block w-50 mx-auto">Start</button>
            </div>
            : <TestView selection={selection} reset={reset} gatakana={gatakana}/>

    );
}

export default App;
