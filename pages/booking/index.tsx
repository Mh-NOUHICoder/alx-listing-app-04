import axios from "axios";
import { FormEvent, ChangeEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setError(null);
    setSuccess(null);
  }

  function validate(values: FormData) {
    const errs: Errors = {};
    if (!values.firstName.trim()) errs.firstName = "First name is required";
    if (!values.lastName.trim()) errs.lastName = "Last name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Enter a valid email";
    if (!values.phoneNumber.trim()) errs.phoneNumber = "Phone number is required";
    if (!values.cardNumber.trim()) errs.cardNumber = "Card number is required";
    else if (!/^\d{13,19}$/.test(values.cardNumber.replace(/\s+/g, ""))) errs.cardNumber = "Enter a valid card number";
    if (!values.expirationDate.trim()) errs.expirationDate = "Expiration date is required";
    if (!values.cvv.trim()) errs.cvv = "CVV is required";
    else if (!/^\d{3,4}$/.test(values.cvv)) errs.cvv = "Enter a valid CVV";
    if (!values.billingAddress.trim()) errs.billingAddress = "Billing address is required";
    return errs;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validation = validate(formData);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setError("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed! A confirmation email will be sent shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
      setErrors({});
    } catch (err: any) {
      console.error("Booking submit error:", err?.response || err);
      const msg = err?.response?.data?.message || "Failed to submit booking. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Confirm Booking</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium">First name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded border p-2 ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Last name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded border p-2 ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        <div className="mt-3">
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className={`mt-1 block w-full rounded border p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mt-3">
          <label className="block text-sm font-medium">Phone number</label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`mt-1 block w-full rounded border p-2 ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <label className="block text-sm font-medium">Card number</label>
            <input
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              inputMode="numeric"
              className={`mt-1 block w-full rounded border p-2 ${errors.cardNumber ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Expiration</label>
            <input
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className={`mt-1 block w-full rounded border p-2 ${errors.expirationDate ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.expirationDate && <p className="text-red-500 text-sm">{errors.expirationDate}</p>}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              inputMode="numeric"
              className={`mt-1 block w-full rounded border p-2 ${errors.cvv ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Billing address</label>
            <input
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className={`mt-1 block w-full rounded border p-2 ${errors.billingAddress ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.billingAddress && <p className="text-red-500 text-sm">{errors.billingAddress}</p>}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-60"
          >
            {loading ? "Processing..." : "Confirm & Pay"}
          </button>
        </div>

        <div className="mt-4">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
        </div>
      </form>
    </div>
  );
}