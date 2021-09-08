import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import book from "./images/book.png";
import Onlydata from './Onlydata';
import Tooltip from '@material-ui/core/Tooltip';

function TodoApp() {

    const [newval,setNewval] = useState("");

    const [add,setAdd] = useState([]);

    const [validation,setValidation] = useState("");

    const searchdata = (event)=>{
        const {name,value} = event.target;
        setNewval(value);
    };

    const additems = ()=>{

        if(newval === ""){
            setValidation("Null Not Allowd");
        }
        else{
            setAdd((oldval)=>{
                console.log([...oldval,newval]);
                return [...oldval,newval];
            });
            setNewval("");
            setValidation("");
        }
    };

    const dlt = (id)=>{
        setAdd((preval)=>{
            return preval.filter((curel,index)=>{
                return index !== id;
            });
        });
    };

   

    return (
        <div className="main-container">
            <div className="todo-box">
            <img src={book} alt="book"  className="todoimg"/>
            <h2 className="heading">Write Your Todo List Here</h2>
            { <h3 className="validation"> {validation} </h3> }
                <div className="input-container">
                    <input type="text" autoComplete="off"
                    onChange={searchdata}
                    value={newval}
                     name="search" 
                     placeholder=" Enter Your Task"
                      />
                    <Tooltip title="Add">
                    <Button className="addbtn" onClick={additems}>
                        <AddIcon />
                    </Button>
                    </Tooltip>
                </div>
                <div className="store-container">
                    <ol>
                    {
                        add.map((curnvalt,ind)=>{
                            return <Onlydata key={ind}
                            id = {ind}
                             text={curnvalt} 
                                dltitems = {dlt}
                             />
                        })
                    }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
