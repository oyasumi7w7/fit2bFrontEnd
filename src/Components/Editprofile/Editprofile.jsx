import React from "react";
import './Editprofile.css';

const Editprofile = (props) => {
    
    return (
        <div className="main-editprofile">
            <div className="bg">
                <div className="wrap">
                    <fieldset>
                        <form>
                            <div className="Title">
                                <h1><strong>Profile Image Upload</strong></h1>
                            </div>
                            <div className="img">
                                {/* <input type="file" /> */}
                                <img src="public/profile.png" width={150} />

                            </div>
                            <div className="AddEditForm">
                                <span className="photo" title="Upload your Avatar!"></span>
                                <input type="file" className="btn" accept="image/png, image/gif, image/jpeg"/>
                                <input name="First Name" type="text" defaultValue={props.profile.firstName} />

                                <br />
                                <input name="Last Name" type="text" defaultValue={props.profile.lastName} />

                                {/* <br />
                                <input name="Email" type="text" defaultValue={props.profile2.email} /> */}

                                <br />
                                <div id="shape">
                                    <div class='item1'><input id='input1' type="number" defaultValue={props.profile.birthday} name="yrs" required />Yrs</div>
                                    <div class='item1'><input id='input1' type="number" defaultValue={props.profile.weight} name="weight" required />Kg</div>
                                    <div class='item1'><input id='input1' type="number" defaultValue={props.profile.height} name="height" required />Cm</div>
                                    <br />

                                </div>

                                <br />
                                <div>
                                    <input name="New Password" type="password" placeholder="New Password" />

                                    <br />
                                    <input name="Confirm New Password" type="password" placeholder="Confirm New Password" />

                                </div>

                                <br />
                                <div id="button">
                                    <a href='/' ><button className='login1' type="submit" >Save</button></a>
                                    <a href='/' ><button className='signup1' type="submit" >Submit</button></a>
                                </div>

                            </div>


                        </form>
                    </fieldset>
                </div>

            </div>

        </div>
    )
}

export default Editprofile;