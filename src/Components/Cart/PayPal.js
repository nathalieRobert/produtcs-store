import { PayPalButton } from "react-paypal-button-v2";
import React, { Component } from 'react'

export default class PayPal extends Component {

  
        render() {
            return (
              <PayPalButton
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      currency_code: "USD",
                      value: this.props.total
                    }
                  }],
                  // application_context: {
                  //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                  // }
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.order.capture().then(function(details) {
                  // Show a success message to your buyer
                  alert("Transaction completed by " + details.payer.name.given_name);
       
                  // OPTIONAL: Call your server to save the transaction
                  return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                      orderID: data.orderID
                    })
                  });
                });
              }}
                options={{
                  clientId: "ASexR86b3R5C1eW8MfvzOvTsnW_gVVb7u8RS72X19eoujpIQzMm4KXNRTmFBwRnyHNevp4z4e7hOG0iV"
                }}
              />
            );
          }
        }