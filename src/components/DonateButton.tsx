import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = () => {
  const [amount, setAmount] = useState("2.50");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const validAmount = parseFloat(amount) >= 2.5;

  return (
    <div className="donate-section">
      <label htmlFor="donation" style={{ display: "block", marginBottom: "8px" }}>
        Ingrese el monto a donar (mínimo $2.50):
      </label>
      <input
        id="donation"
        type="number"
        min="2.50"
        step="0.01"
        value={amount}
        onChange={handleChange}
        style={{ padding: "8px", marginBottom: "16px", width: "150px" }}
      />

      {validAmount ? (
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            console.log("✅ Pago aprobado:", details);
          
            const amount = details.purchase_units[0].amount.value;
            const payer = details.payer;
          
            // Enviar al backend
            try {
              const res = await fetch("http://localhost:8000/donation/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, payer }),
              });
          
              if (!res.ok) throw new Error("Error al registrar la donación");
          
              const json = await res.json();
              alert(`Gracias por tu donación, ${payer.name.given_name}!`);
              window.location.href = "/thankyou";
            } catch (err) {
              console.error("❌ Error registrando la donación:", err);
              alert("Ocurrió un problema registrando tu donación.");
            }
          }}
          onError={(err) => {
            console.error("❌ Error con PayPal:", err);
            alert("Hubo un error al procesar el pago.");
          }}
        />
      ) : (
        <p style={{ color: "red" }}>El monto debe ser al menos $2.50</p>
      )}
    </div>
  );
};

export default DonateButton;
