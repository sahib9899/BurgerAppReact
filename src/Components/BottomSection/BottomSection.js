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
            
            <div className='extra-addings'>
                <div className='salad-option'>
                    <h3>Salad</h3>
                    <div>
                        <Button variant='danger' className='remove-button' onClick={()=> props.decrement('salad')} > &nbsp;-&nbsp; </Button>
                        <label><h4>{salad}</h4></label>
                        <Button variant='success' className='add-button' onClick={()=>props.increment('salad')}> &nbsp;+&nbsp;</Button>
                    </div>
                </div>
                
                <div className='tomato-option'>
                    <h3>Tomato</h3>
                    <div>
                        <Button variant='danger' className='remove-button' onClick={()=> props.decrement('tomato')}> &nbsp;-&nbsp; </Button>
                        <label><h4>{tomato}</h4></label>
                        <Button variant='success' className='add-button' onClick={()=> props.increment('tomato')} > &nbsp;+&nbsp;</Button>
                    </div> 
                </div>
                <div className='cheese-option'>
                    <h3>Cheese</h3>
                    <div>
                        <Button variant='danger' className='remove-button' onClick={()=> props.decrement('cheese')}> &nbsp;-&nbsp; </Button>
                        <label><h4>{cheese}</h4></label>
                        <Button variant='success' className='add-button' onClick={()=> props.increment('cheese')}> &nbsp;+&nbsp;</Button>
                        </div>
                </div>
                <div className='meat-option'>
                <h3>Meat</h3>
                    <div>
                        <Button variant='danger' className='remove-button' onClick={()=> props.decrement('meat')}> &nbsp;-&nbsp; </Button>
                        <label><h4>{meat}</h4></label>
                        <Button variant='success' className='add-button' onClick={()=> props.increment('meat')}> &nbsp;+&nbsp;  </Button>
                    </div>
                </div>
                <div className='price-section'>
                      <h4>Total Price : ₹{price}.00 </h4>
                    <p>Your order includes a Large size burger with following addings,<br />
                    Salad {salad}, Tomato {tomato}, Cheese {cheese} and Meat {meat} </p>
                 </div>
                <div className='order-option'>
                    <Button variant='warning' onClick={()=>setShow(true)} className='order-button' >Order Now</Button>
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
