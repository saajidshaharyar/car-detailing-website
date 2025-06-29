// Book.tsx
// ------------------------------
// This React component allows users to confirm a car detailing appointment
// by selecting a date and time. It pulls data from Firebase Firestore to
// check for existing bookings, uses EmailJS to send confirmation emails to
// both the user and business, and redirects users if form data is missing.
// ------------------------------
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../UI/Button';
import { db } from '../../lib/firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
} from 'firebase/firestore';

const Book: React.FC = () => {
  const navigate = useNavigate();

  // Form state and booking selections
  const [formData, setFormData] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  // Tracks which hours are already booked for each date
  const [bookedDates, setBookedDates] = useState<Record<string, number[]>>({});
  const [bookedSlots, setBookedSlots] = useState<number[]>([]);

  // Load form data from sessionStorage, or redirect to contact form
  useEffect(() => {
    const stored = sessionStorage.getItem('contactForm');
    if (stored) {
      setFormData(JSON.parse(stored));
    } else {
      navigate('/contact');
    }
  }, [navigate]);

  // Fetch all existing bookings from Firebase to determine availability
  useEffect(() => {
    const fetchAllBookings = async () => {
      const snapshot = await getDocs(collection(db, 'bookings'));
      const bookingsMap: Record<string, number[]> = {};
      snapshot.forEach((doc) => {
        const data = doc.data();
        const date = data.bookingDate;
        const hour = parseInt(data.bookingTime.split(':')[0]);
        if (!bookingsMap[date]) bookingsMap[date] = [];
        bookingsMap[date].push(hour);
      });
      setBookedDates(bookingsMap);
    };
    fetchAllBookings();
  }, []);

  // When a new date is selected, update available time slots
  useEffect(() => {
    if (!selectedDate) return;
    const dateStr = selectedDate.toDateString();
    setBookedSlots(bookedDates[dateStr] || []);
  }, [selectedDate, bookedDates]);

  // Determines if a date should be selectable (e.g., not fully booked or a Friday)
  const isAvailableDate = (date: Date) => {
    if (date.getDay() === 5) return false;
    const dateStr = date.toDateString();
    const slots = bookedDates[dateStr] || [];
    const hours = Array.from({ length: 8 }, (_, i) => i + 10);
    const isFullyBooked = hours.every(hour => [hour, hour - 1, hour - 2].some(h => slots.includes(h)));
    return !isFullyBooked;
  };

  // Determines if a specific hour is still available for booking
  const isAvailableTime = (hour: number) => {
    for (let booked of bookedSlots) {
      if ([booked, booked + 1, booked + 2].includes(hour)) return false;
    }
    return hour >= 10 && hour <= 17;
  };

  const formatTimeLabel = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:00 ${period}`;
  };

  // Handles final submission: stores booking in Firebase and sends email confirmations
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !formData) return;

    const key = selectedDate.toDateString();
    const bookingData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      bookingDate: key,
      bookingTime: selectedTime,
      createdAt: Timestamp.now(),
    };

     try {
      // Save to Firestore
      await addDoc(collection(db, 'bookings'), bookingData);

      // Send emails via backend API
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingData }),
      });
      
      // Resets form
      setSuccess(true);
      sessionStorage.removeItem('contactForm');
      setSelectedDate(null);
      setSelectedTime('');
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('There was an issue sending the email.');
    }
  };

  // ------------------------------ UI Starts Here ------------------------------
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen pt-20 transition-all duration-300 font-sans">
      <section className="w-full bg-gradient-to-r from-gradient-start to-gradient-end text-white">
        <div className="container mx-auto p-12 lg:p-20 text-center max-w-3xl">
          <h1 className="text-5xl font-accent tracking-widest uppercase mb-6">Confirm Your Booking</h1>
          <p className="text-xl font-sans">
            Select a time slot to finalize your detailing service. We'll confirm within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-heading tracking-wide mb-6 text-primary-500">Choose a Date and Time</h2>
            {success ? (
              <div className="text-green-600 dark:text-green-400 text-xl font-semibold">
                Your booking was successful! We’ll be in touch to confirm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Select Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setSelectedTime('');
                    }}
                    filterDate={isAvailableDate}
                    minDate={new Date()}
                    placeholderText="Choose a date (no Fridays)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
                {selectedDate && (
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Selected Date: <span className="font-semibold">{selectedDate.toDateString()}</span>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Select Time</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Choose a time</option>
                    {[...Array(24).keys()].map((hour) =>
                      hour >= 10 && hour <= 17 ? (
                        <option
                          key={hour}
                          value={`${hour}:00`}
                          disabled={!isAvailableTime(hour)}
                          className={!isAvailableTime(hour) ? 'text-gray-400 bg-gray-100 italic cursor-not-allowed' : ''}
                        >
                          {formatTimeLabel(hour)} {!isAvailableTime(hour) ? '(Unavailable)' : ''}
                        </option>
                      ) : null
                    )}
                  </select>
                </div>
                {selectedTime && (
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    Selected Time: <span className="font-semibold">{selectedTime}</span>
                  </div>
                )}
                <Button type="submit" variant="primary" size="lg">
                  Confirm Booking
                </Button>
              </form>
            )}
          </div>

          <div className="lg:pl-12 animate-fadeIn">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">Your Info</h2>
            {formData && (
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Name:</strong> {formData.firstName} {formData.lastName}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Phone:</strong> {formData.phone}</li>
                <li><strong>Package:</strong> {formData.service}</li>
                <li><strong>Details:</strong> {formData.message}</li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
