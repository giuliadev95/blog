'use client'; // Required to use { useState }, which manages the Toggle() function for the mobile menu under the hood.
import Navbar from "./Navbar 2";

export default function Header() {
    return ( 
        // Define a stycky Navbar on every device
        <div>
            
                <Navbar/>
            
        </div>       
    )
}