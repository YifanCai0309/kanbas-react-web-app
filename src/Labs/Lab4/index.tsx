import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function lab4(){
    function sayHello(){
        alert("Hello");
    }
return (
<div className="container">
    <h1>Lab 4</h1>
    <ClickEvent/>
    <PassingDataOnEvent/>
    <PassingFunctions theFunction={sayHello}/>
    <EventObject/>
    <Counter/>
    <BooleanStateVariables/>
    <StringStateVariables/>
    <DateStateVariable/>
    <ObjectStateVariable/>
    <ArrayStateVariable/>
    <ParentStateComponent/>
    <ReduxExamples/>
</div>
);
}