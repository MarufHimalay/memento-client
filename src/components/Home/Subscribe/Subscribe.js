import React from 'react';

const Subscribe = () => {
    return (
        <div >
            <h3 style={{color: 'gold'}} className="text-center">Get in touch</h3>
            <div className="container  w-75 pb-4">
            <h3 className="text-center" style={{color:"#FF1493"}}>Subscribe to get offers via Email..</h3>
            <form style={{border:'3px solid #FF1493', padding:"10px", marginTop:"30px"}} >
                <label style={{color:"#FF1493", padding:"10px"}}>Name..</label>
                <input style={{border:"1px solid #FF69B4"}} placeholder="Adam Smith" className="form-control" type="text"/>
                <label style={{color:"#FF1493", padding:"10px"}}>Email..</label>
                <input style={{border:"1px solid #FF69B4"}} placeholder="adam@gmail.com" className="form-control" type="text"/>
                <label style={{color:"#FF1493", padding:"10px"}}>Message..</label>
                <input style={{height:"150px", border:"1px solid #FF69B4"}} className="form-control" type="text"/>
                <div className="d-flex justify-content-end mt-3">
                <input style={{backgroundColor:"#FF00FF", border:"none", color:'white'}} className="btn" type="submit" value="Submit"/>
                </div>
                
            </form>
            </div>
        </div>
    );
};

export default Subscribe;