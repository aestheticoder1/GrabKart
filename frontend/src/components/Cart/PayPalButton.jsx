import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton({ amount, onSuccess, onError }) {
  return (
    <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID
    , currency: "USD" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [{
              reference_id: "ORDER_12345",
              amount: { currency_code: "USD", value: parseFloat(amount).toFixed(2) }
            }]
          });
        }}
        onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
