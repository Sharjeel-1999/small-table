import React from "react";
import "./smalltable.css"

const Smalltable=()=>{
    return(
        <div className="body">
<p>SMall Table section</p>
 

   <div className="main">
    <div className="first">
    <table>
    <h4 className="h4">Hoverable Table</h4>
    <hr/>
        <tr id="header">
            <th>User</th>
            <th>Product</th>
            <th>Sale</th>
            <th className="status">Status</th>
            
        </tr>
        <tr>
            <td>John </td>
            <td>Doe </td>
            <td>25 </td>
            <td  className="th">USA </td>
           

        </tr>
        <tr>
            <td>John </td>
            <td>Doe </td>
            <td>25 </td>
            <td className="tx">USA </td>
           

        </tr>
      
        <tr>
            <td>steve </td>
            <td>Doe </td>
            <td>28 </td>
            <td className="ty">USA </td>
          

        </tr>
        <tr>
            <td>simo </td>
            <td>Doe </td>
            <td>26 </td>
            <td className="tz">USA </td>
          
        </tr>
        <tr>
            <td>karim </td>
            <td>Doe </td>
            <td>21 </td>
            <td className="ta">USA </td>
           

        </tr>
      

    </table>
    </div>
<div className="second">
<table>
    <h4 className="h4">Hoverable Table</h4>
    <hr/>
        <tr id="header">
            <th>User</th>
            <th>Product</th>
            <th>Sale</th>
            <th className="status">Status</th>
            
        </tr>
        <tr>
            <td>John </td>
            <td>Doe </td>
            <td>25 </td>
            <td  className="th">USA </td>
           

        </tr>
        <tr>
            <td>John </td>
            <td>Doe </td>
            <td>25 </td>
            <td className="tx">USA </td>
           

        </tr>
      
        <tr>
            <td>steve </td>
            <td>Doe </td>
            <td>28 </td>
            <td className="ty">USA </td>
          

        </tr>
        <tr>
            <td>simo </td>
            <td>Doe </td>
            <td>26 </td>
            <td className="tz">USA </td>
          
        </tr>
        <tr>
            <td>karim </td>
            <td>Doe </td>
            <td>21 </td>
            <td className="ta">USA </td>
           

        </tr>
      

    </table>
</div>
   </div>

        </div>
    );
}



export default Smalltable;