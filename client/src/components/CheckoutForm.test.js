import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const head = screen.getByText(/Checkout Form/i);
    expect(head).toBeInTheDocument(/Checkout Form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    let info = {firstname:'simo',lastname:'jimy',address:'123 2nd ave',city:'new york city',state:'new york',zip:'101254'};
    const firstname = screen.getByLabelText(/first Name/i) 
    fireEvent.change(firstname,{value:info.firstname})

    const lastname = screen.getByLabelText(/last Name/i) 
    fireEvent.change(lastname,{value:info.lastname})

    const address = screen.getByLabelText(/address/i) 
    fireEvent.change(address,{value:info.address})

    const city = screen.getByLabelText(/city/i) 
    fireEvent.change(city,{value:info.city})

    const state = screen.getByLabelText(/state/i) 
    fireEvent.change(state,{value:info.state})

    const zip = screen.getByLabelText(/zip/i) 
    fireEvent.change(zip,{value:info.zip})

 
    fireEvent.click(screen.getByRole(/button/i));
   
    });

    
        

    
