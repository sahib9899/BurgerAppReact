import React, { useState } from 'react'
import { connect } from 'react-redux'
import './BottomSection.css'
import { increment, decrement } from '../Actions'
import { mainReducer } from '../Reducers/mainReducer'
import { Button, Modal } from 'react-bootstrap'
import OrderConfirm from '../OrderConfirm/OrderConfirm'
import { Link } from 'react-router-dom'

function BottomSection(props) {
    const [show, setShow] = useState(false)
    const data = props.data;
    const {salad, tomato, cheese, meat} = data;
    let price = 100;
    if(data){
         price = 100 + (salad*20 + tomato*20 + cheese*30 + meat*40);
    }
              
    return (
        <>
        <div className='bottom-section'>
            <div className='price-section'>
                <h3>Total Price : ₹{price}.00 </h3>
            </div>
            <div className='extra-addings'>
                <div className='salad-option'>
                    <h3>Salad</h3>
                    <div>
                        <button className='remove-button' onClick={()=> props.decrement('salad')} > Remove </button>
                        <button className='add-button' onClick={()=>props.increment('salad')}> Add</button>
                    </div>
                </div>
                
                <div className='tomato-option'>
                    <h3>Tomato</h3>
                    <div>
                        <button className='remove-button' onClick={()=> props.decrement('tomato')}> Remove </button>
                        <button className='add-button' onClick={()=> props.increment('tomato')} > Add</button>
                    </div> 
                </div>
                <div className='cheese-option'>
                    <h3>Cheese</h3>
                    <div>
                        <button className='remove-button' onClick={()=> props.decrement('cheese')}> Remove </button>
                        <button className='add-button' onClick={()=> props.increment('cheese')}> Add</button>
                        </div>
                </div>
                <div className='meat-option'>
                <h3>Meat</h3>
                    <div>
                        <button className='remove-button' onClick={()=> props.decrement('meat')}> Remove </button>
                        <button className='add-button' onClick={()=> props.increment('meat')}> Add</button>
                    </div>
                </div>
                <div className='order-option'>
                    <button onClick={()=>setShow(true)} className='order-button' >Order Now</button>
                </div>
            </div>

           {  
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>Order Details </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You've ordered a Burger with following delicioous addings
                        <ul>
                            <li>Salad : {salad} </li>
                            <li>Tomato : {tomato} </li>
                            <li>Cheese : {cheese} </li>
                            <li>Meat : {meat}</li>
                            <h5>Grand Total : ₹{price}.00 </h5>
                        </ul>
                    </Modal.Body>
                      <Modal.Footer>
                        <Button  variant="secondary" onClick={()=>setShow(false)}>
                          Cancle
                        </Button>
                        <Link to={'/orderConfirm'}> 
                        <Button variant="primary" >
                          Confirm
                        </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            }
            
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
    data: state.mainReducer,
    }
}

const mapDispatchToProps =  {
    increment, 
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);
