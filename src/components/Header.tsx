// StateLess Component
function Header() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date();
  const dayName = days[today.getDay()];
  const monthName = monthNames[today.getMonth()];

  return (
    <div>
      <div className='header'>
        <div className='time-stemp'>
          <div className='date-stemp'>
            <div className='date'>
              <p>{today.getDate()}</p>
            </div>
            <div className='month-year'>
              <p className='month'>{monthName}</p>
              <p className='year'>{today.getFullYear()}</p>
            </div>
          </div>
          <div className='day'>
            <p>{dayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
