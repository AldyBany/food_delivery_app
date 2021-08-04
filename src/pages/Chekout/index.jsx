import React from 'react'
import Logo from '../../components/common/Logo'
import {Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import GooglePayButton from '@google-pay/button-react'
import {Link} from 'react-router-dom'
import './styles.css';

const Checkout = () => {

    const history = useHistory()

    const handleSubmit = ()=>{
        history.push('/')
    }
    return (
        <div className="checkout-page">
            <div className='cart-header'>
                <Logo />
            </div>
            <div className="checkouts">
                <h1 className='orders-heading'>Your Checkout</h1>

                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label>Fullname</label>
                        <input type="text" placeholder="Fullname"/>
                    </div>

                    <div className="form-input">
                        <label>Phone Number</label>
                        <input type="text" placeholder="xxxx xxxx"/>
                    </div>

                    <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                        },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '1',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                    }}
                    onLoadPaymentData={paymentRequest => {
                    console.log('Success', paymentRequest);
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log('Payment Authorised Success', paymentData)
                        return { transactionState: 'SUCCESS'}
                    }
                    }
                    onPaymentDataChanged={paymentData => {
                        console.log('On Payment Data Changed', paymentData)
                        return { }
                    }
                    }
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='Buy'
                />
                </form>

                
            </div>
            <Link to="/cart" className="btn">
               <i className='fas fa-long-arrow-alt-left'></i> Back
            </Link>
        </div>
    )
}

export default Checkout
