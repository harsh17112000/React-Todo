import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

function Onlydata(props) {


    const [color,setColor] = useState(false);

    const reading = ()=>{
        setColor(true);
    };

    
    return (
        <div className="items">
      
            <li style={{textDecoration : color ? "line-Through":null}}

             onClick={reading}>   {props.text}  </li>
            <Tooltip title="Delete">
            <Button className="dltbtn" onClick={()=>{
                props.dltitems(props.id)
            }}>
                <DeleteIcon />
            </Button>
            </Tooltip>
        </div>
    );
};

export default Onlydata;


// {{textDecoration : color ? "lineThrough" : null}} 