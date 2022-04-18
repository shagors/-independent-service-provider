import React from 'react';
import { Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './Checkout.css'

const Checkout = () => {
    const handleButtonSend = (e) => {
        e.preventDefault();
        toast('Thanks for booking')
    }
    return (
        <div className='container checkout-container'>
            <Form onSubmit={handleButtonSend}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="number" placeholder="your phone number" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="your email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={6} placeholder='share me your thought and which package you want to ?' required/>
                </Form.Group>
                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Send me Booking</span>
                </button>
            </Form>
            <ToastContainer position='top-center'/>
        </div>
    );
};

export default Checkout;