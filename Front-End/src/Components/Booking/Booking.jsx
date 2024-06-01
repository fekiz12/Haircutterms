import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 Pazar, 6 Cumartesi
  };

  const getTimes = (date) => {
    if (!isWeekday(date)) {
      return [];
    }
    let times = [];
    for (let hour = 9; hour < 17; hour++) {
      if (hour !== 12) {
        times.push(`${hour < 10 ? '0' + hour : hour}:00`);
        if (hour < 16) {
          times.push(`${hour < 10 ? '0' + hour : hour}:30`);
        }
      }
    }
    return times;
  };

  const handleChangeDate = (e) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    setSelectedTime('');
    setError('');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setError('');
  };

  const handleCreateOrUpdateAppointment = () => {
    const dateString = selectedDate.toDateString();
    const count = appointments.filter(app => app.date === dateString && app.time === selectedTime).length;

    if (count >= 3) {
      setError('Bu tarih ve saatte zaten üç randevu var.');
      return;
    }

    if (editingIndex >= 0) {
      const updatedAppointments = [...appointments];
      updatedAppointments[editingIndex] = { date: dateString, time: selectedTime };
      setAppointments(updatedAppointments);
      setEditingIndex(-1);
    } else {
      setAppointments([...appointments, { date: dateString, time: selectedTime }]);
    }

    setSelectedTime('');
  };

  const handleEditAppointment = (index) => {
    setEditingIndex(index);
    setSelectedDate(new Date(appointments[index].date));
    setSelectedTime(appointments[index].time);
  };

  const handleDeleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  const [editingIndex, setEditingIndex] = useState(-1);
  const times = getTimes(selectedDate);

  return (
    <div className="book-container">
      <div className="book-date">
        <input
          type="date"
          onChange={handleChangeDate}
          value={selectedDate.toISOString().substring(0, 10)}
          min="2024-01-01"
          max="2025-01-01"
        />
        <div className="timeselect">
          <h2>Müsait Zamanlar</h2>
          {times.length > 0 ? (
            <ul>
              {times.map(time => (
                <li key={time} onClick={() => handleTimeSelect(time)} className={time === selectedTime ? 'selected' : ''}>
                  {time}
                </li>
              ))}
            </ul>
          ) : (
            <p>Seçilen zamanda randevu bulunmamaktadır.</p>
          )}
          {selectedTime && (
            <button onClick={handleCreateOrUpdateAppointment}>{editingIndex >= 0 ? 'Güncelle' : 'Randevu Oluştur'}</button>
          )}
        </div>
        {error && <p className="error">{error}</p>}
      </div>
      {appointments.length > 0 && (
        <div className="appointment-info">
          <h2>Randevu Detayları</h2>
          {appointments.map((appointment, index) => (
            <div key={index}>
              <p>Gün: {appointment.date}</p>
              <p>Saat: {appointment.time}</p>
              <button onClick={() => handleEditAppointment(index)}>Düzenle</button>
              <button onClick={() => handleDeleteAppointment(index)}>Sil</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Booking;





