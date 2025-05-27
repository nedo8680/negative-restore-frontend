import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Donation {
  payer: string;
  amount: number;
  timestamp: string;
}

export default function ThankYou() {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    fetch("https://negative-restore-backend.onrender.com/donations/")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gracias por apoyar 💖</h1>
      {donations.length === 0 ? (
        <p>No hay donaciones registradas todavía.</p>
      ) : (
        <ul className="space-y-2">
          {donations.map((donation, index) => (
            <li key={index} className="border rounded p-2 shadow-sm">
              <strong>{donation.payer}</strong> donó <strong>${donation.amount.toFixed(2)}</strong> el{" "}
              {new Date(donation.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
        <Link to="/" className="btn-back-to-home">
            Volver a la página principal
        </Link>
    </div>
  );
}
