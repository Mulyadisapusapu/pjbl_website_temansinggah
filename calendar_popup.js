const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const monthNamesID = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const start = new Date();
const end = new Date(start.getFullYear(), start.getMonth() + 11, 1);

let currentYear = start.getFullYear();
let currentMonth = start.getMonth();

let checkInDate = null;
let checkOutDate = null;

const container = document.getElementById("calendar-container");
const m1Label = document.getElementById("m1Label");
const m2Label = document.getElementById("m2Label");
const btnPrev = document.getElementById("prevGlobal");
const btnNext = document.getElementById("nextGlobal");
const resetBtn = document.getElementById("resetButton");

const nightsCount = document.getElementById("nightsCount");
const dateRange = document.getElementById("dateRange");
const checkInDisplay = document.getElementById("checkInDisplay");
const checkOutDisplay = document.getElementById("checkOutDisplay");
const clearCheckInBtn = document.getElementById("clearCheckIn");
const clearCheckOutBtn = document.getElementById("clearCheckOut");

renderCalendars();
updateHeader();

function renderCalendars() {
  container.innerHTML = "";

  const cal1 = createCalendar(currentYear, currentMonth);

  const nextMonth = (currentMonth + 1) % 12;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  const cal2 = createCalendar(nextYear, nextMonth);

  container.appendChild(cal1);
  container.appendChild(cal2);

  updateHeader();
  updateDateDisplays();
}

function updateHeader() {
  const m1 = `${monthNames[currentMonth]} ${currentYear}`;

  let nm = (currentMonth + 1) % 12;
  let ny = currentMonth === 11 ? currentYear + 1 : currentYear;

  const m2 = `${monthNames[nm]} ${ny}`;

  m1Label.textContent = m1;
  m2Label.textContent = m2;

  if (
    currentYear === start.getFullYear() &&
    currentMonth === start.getMonth()
  ) {
    btnPrev.classList.add("month-arrow-disabled");
  } else {
    btnPrev.classList.remove("month-arrow-disabled");
  }

  if (currentYear === end.getFullYear() && currentMonth === end.getMonth()) {
    btnNext.classList.add("month-arrow-disabled");
  } else {
    btnNext.classList.remove("month-arrow-disabled");
  }
}

function createCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const offset = (firstDay + 6) % 7;

  const div = document.createElement("div");
  div.classList.add("calendar-content");

  div.innerHTML = `<div class="calendar-grid"></div>`;

  const grid = div.querySelector(".calendar-grid");

  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  days.forEach((d) => {
    const el = document.createElement("div");
    el.classList.add("calendar-day");
    el.textContent = d;
    grid.appendChild(el);
  });

  for (let i = 0; i < offset; i++) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = document.createElement("div");
    date.classList.add("calendar-date");
    date.textContent = d;

    const thisDate = new Date(year, month, d);
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    if (thisDate < todayStart) {
      date.classList.add("date-disabled");
    } else {
      date.addEventListener("click", () => handleDateClick(thisDate, date));

      // Check if this date is selected
      if (checkInDate && isSameDate(thisDate, checkInDate)) {
        date.classList.add("active");
      }
      if (checkOutDate && isSameDate(thisDate, checkOutDate)) {
        date.classList.add("active");
      }

      // Check if this date is in range
      if (
        checkInDate &&
        checkOutDate &&
        thisDate > checkInDate &&
        thisDate < checkOutDate
      ) {
        date.classList.add("in-range");
      }
    }

    grid.appendChild(date);
  }

  return div;
}

function handleDateClick(date) {
  if (!checkInDate || (checkInDate && checkOutDate)) {
    // Set check-in
    checkInDate = date;
    checkOutDate = null;
  } else if (date > checkInDate) {
    // Set check-out
    checkOutDate = date;
  } else {
    // Reset and set new check-in
    checkInDate = date;
    checkOutDate = null;
  }

  renderCalendars();
}

function isSameDate(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function formatDate(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear();
  return `${m}/${d}/${y}`;
}

function formatDateLong(date) {
  const monthName = monthNames[date.getMonth()].substring(0, 3);
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthName} ${day}, ${year}`;
}

function updateDateDisplays() {
  if (checkInDate) {
    checkInDisplay.textContent = formatDate(checkInDate);
    clearCheckInBtn.style.display = "block";
  } else {
    checkInDisplay.textContent = "--/--/----";
    clearCheckInBtn.style.display = "none";
  }

  if (checkOutDate) {
    checkOutDisplay.textContent = formatDate(checkOutDate);
    clearCheckOutBtn.style.display = "block";
  } else {
    checkOutDisplay.textContent = "--/--/----";
    clearCheckOutBtn.style.display = "none";
  }

  if (checkInDate && checkOutDate) {
    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );
    nightsCount.textContent = `${nights} night${nights > 1 ? "s" : ""}`;
    dateRange.textContent = `${formatDateLong(checkInDate)} - ${formatDateLong(
      checkOutDate
    )}`;
  } else if (checkInDate) {
    nightsCount.textContent = "0 nights";
    dateRange.textContent = `${formatDateLong(checkInDate)} - Pilih checkout`;
  } else {
    nightsCount.textContent = "0 nights";
    dateRange.textContent = "Pilih tanggal";
  }
}

function resetDates() {
  checkInDate = null;
  checkOutDate = null;
  renderCalendars();
}

btnPrev.addEventListener("click", () => {
  if (btnPrev.classList.contains("month-arrow-disabled")) return;

  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendars();
});

btnNext.addEventListener("click", () => {
  if (btnNext.classList.contains("month-arrow-disabled")) return;

  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendars();
});

resetBtn.addEventListener("click", resetDates);

clearCheckInBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  checkInDate = null;
  checkOutDate = null;
  renderCalendars();
});

clearCheckOutBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  checkOutDate = null;
  renderCalendars();
});
