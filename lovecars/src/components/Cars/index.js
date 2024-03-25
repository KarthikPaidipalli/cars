import { Component } from "react";
import Header from "../Header";
import "./index.css"
class Cars extends Component{
    state={nameofcar:"",brandofcar:""}

    carnamenetred =(event)=>{
        this.setState({nameofcar:event.target.value})
    }

    carbrandnetred =(event)=>{
        this.setState({brandofcar:event.target.value})
    }

    render(){
        const{nameofcar,brandofcar}=this.state
        return(
            <div>
                <Header/>
                <div className="carscontainer">
                    <div className="formofcollection">
                        <label htmlFor="carbrand" className="labels">Enter the brand name</label>
                        <input type="text" id="carbrand" value={brandofcar} onChange={this.carbrandnetred} className="inputs" placeholder="Brand name"/>
                        <label htmlFor="carname" className="labels">Enter the brand name</label>
                        <input type="text" id="carname" value={nameofcar} onChange={this.carnamenetred} className="inputs" placeholder="Car name"/>
                        <div className="buttonsalign">
                        <a href={`https://www.cardekho.com/${brandofcar}/${nameofcar}`} target="_blank" rel="noopener noreferrer"><button className="detailbutton">Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cars