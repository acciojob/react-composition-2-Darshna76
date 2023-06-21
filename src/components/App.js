import React, { useState } from "react";
import "../styles/App.css";
function App() {

    let [scrval,setScrval] = useState("");

    function setscrvalfunc(e){
        setScrval(scrval + e.target.innerText);
    }

    function calculate(){
        try {
            let result = eval(scrval)
            setScrval(result);
        } catch (error) {
            setScrval("Error");
        }
       
    }

    function clearscr(){
        setScrval("");
    }


    return (
        <>
            <table>
                <tr className="screen">
                   <td colSpan={4}>{scrval}</td>
                </tr>
                <tr>
                    <td onClick={clearscr}>C</td>
                    <td onClick={setscrvalfunc}>/</td>
                    <td onClick={setscrvalfunc}>*</td>
                    <td onClick={setscrvalfunc}>-</td>
                </tr>
                <tr>
                    <td onClick={setscrvalfunc}>7</td>
                    <td onClick={setscrvalfunc}>8</td>
                    <td onClick={setscrvalfunc}>9</td>
                    <td rowSpan={2} onClick={setscrvalfunc}>+</td>
                </tr>
                <tr>
                    <td onClick={setscrvalfunc}>4</td>
                    <td onClick={setscrvalfunc}>5</td>
                    <td onClick={setscrvalfunc}>6</td>
                </tr>
                <tr>
                    <td onClick={setscrvalfunc}>1</td>
                    <td onClick={setscrvalfunc}>2</td>
                    <td onClick={setscrvalfunc}>3</td>
                    <td rowSpan={2} onClick={calculate}>=</td>
                </tr>
                <tr>
                    <td onClick={setscrvalfunc}>0</td>
                    <td onClick={setscrvalfunc}>.</td>
                    <td onClick={setscrvalfunc}> </td>
                </tr>
            </table>
        </>

    )
}

export default App;
