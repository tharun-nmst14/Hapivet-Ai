function showDoctorAlert() {
  alert('Dr. Reddy is available from 10 AM to 5 PM. Slots open!');
}

document.addEventListener('DOMContentLoaded', () => {
  const doctorList = document.getElementById('doctorList');
  if (doctorList) {
    const doctors = ['Dr. Reddy', 'Dr. Sharma', 'Dr. Mehta'];
    doctors.forEach(doc => {
      const li = document.createElement('li');
      li.textContent = doc;
      li.onclick = () => alert(`Consultation request sent to ${doc}`);
      doctorList.appendChild(li);
    });
  }

  const form = document.getElementById('bookingForm');
  if (form) {
    form.onsubmit = e => {
      e.preventDefault();
      alert('Appointment booked successfully!');
    };
  }
});

function simulateHealth() {
  const temp = (36 + Math.random() * 5).toFixed(1);
  const heart = Math.floor(60 + Math.random() * 80);
  const status = (temp > 39 || heart > 120) ? '⚠️ Pet health abnormal! Contact vet.' : '✅ Pet health normal.';
  document.getElementById('healthStatus').textContent = `Temp: ${temp}°C | HR: ${heart} bpm → ${status}`;
}