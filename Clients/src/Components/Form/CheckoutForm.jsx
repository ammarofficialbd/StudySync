import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import './CheckoutForm.css'
import { ImSpinner9 } from 'react-icons/im'
import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useAuth from '../../hooks/useAuth'
import useRole from '../../hooks/useRole'
const CheckoutForm = ({  paymentInfo,handleCloseModal , refetch}) => {
  const role =useRole()
  const stripe = useStripe()
  const elements = useElements()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [clientSecret, setClientSecret] = useState()
  const [cardError, setCardError] = useState('')
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    // fetch client secret
    if (paymentInfo.totalFee && paymentInfo.totalFee > 1) {
      getClientSecret({ price: paymentInfo.totalFee })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentInfo.totalFee])

  //   get clientSecret
  const getClientSecret = async price => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price)
   // console.log('clientSecret from server--->', data)
    setClientSecret(data.clientSecret)
  }

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault()
    setProcessing(true)
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement)

    if (card == null) {
      return
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('[error]', error)
      setCardError(error.message)
      setProcessing(false)
      return
    } else {
     // console.log('[PaymentMethod]', paymentMethod)
      setCardError('')
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      //console.log(confirmError)
      setCardError(confirmError.message)
      setProcessing(false)
      return
    } 

    if (paymentIntent.status === 'succeeded') {
      //console.log(paymentIntent)
       //1. Create payment info object
    const bookingInfo = {
      ...paymentInfo,
      transactionId: paymentIntent.id,
      date: new Date()
    }
    delete paymentInfo._id
     // console.log(bookingInfo)
       try {
        // 2. save payment info in booking collection (db)
        const { data } = await axiosSecure.post('/add-booked', bookingInfo)
        console.log(data)

        // update ui
        refetch()
        toast.success('Room Booked Successfully')
        navigate('/dashboard/booked-session')
      } catch (err) {
        console.log(err)
      } 
    }

    setProcessing(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <div className='flex mt-2 justify-around'>
          
          <button
            disabled={!stripe || !clientSecret || processing}
            type='submit'
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            {processing ? (
              <ImSpinner9 className='animate-spin m-auto' size={24} />
            ) : (
              `Pay ${paymentInfo?.totalFee}`
            )}
          </button>
          <button
            onClick={handleCloseModal}
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
          >
            Cancel
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

CheckoutForm.propTypes = {
  paymentInfo: PropTypes.object,
  refetch: PropTypes.func,
}

export default CheckoutForm