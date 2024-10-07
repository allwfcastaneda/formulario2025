import React, { useState, useEffect } from "react";
import { CalendarWrapper } from "./styled";
import holidays from "./CalendarFeriados.json";
import Tooltip from "./../Tooltip/Tooltip";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [feriados, setFeriados] = useState({ Chile: [], Peru: [] });
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setFeriados(holidays);
  }, []);

  const handleMouseEnter = (event) => {
    const selectedDay = event.target.textContent;
    const month = parseInt(event.target.getAttribute("data-month"));
    const year = parseInt(event.target.getAttribute("data-year"));
    const holiday = getHolidayContent(selectedDay, month, year);

    if (holiday) {
      const rect = event.target.getBoundingClientRect();
      setTooltip({
        visible: true,
        content: holiday,
        top: rect.top + window.scrollY - 45,
        left: rect.left + window.scrollX - -12,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const getHolidayContent = (day, month, year) => {
    const holiday = feriados.Chile.concat(feriados.Peru).find((h) => {
      const date = new Date(h.date);
      return (
        date.getUTCDate() === parseInt(day) &&
        date.getUTCMonth() === month &&
        date.getUTCFullYear() === year
      );
    });
    return holiday ? holiday.name : "";
  };

  const renderMonthDays = (month, year) => {
    const startDate = new Date(Date.UTC(year, month, 1));
    const endDate = new Date(Date.UTC(year, month + 1, 0));
    const days = [];
    const holidaysInMonth = {
      Chile: feriados.Chile.filter((h) => {
        const date = new Date(h.date);
        return date.getUTCMonth() === month && date.getUTCFullYear() === year;
      }),
      Peru: feriados.Peru.filter((h) => {
        const date = new Date(h.date);
        return date.getUTCMonth() === month && date.getUTCFullYear() === year;
      }),
    };

    // Ajustar para que la semana comience en lunes
    let emptyDaysAtStart = startDate.getUTCDay(); // Días vacíos al inicio
    emptyDaysAtStart = emptyDaysAtStart === 0 ? 6 : emptyDaysAtStart - 1; // Ajustar para que la semana comience en lunes

    // Rellenar días vacíos antes del primer día del mes
    for (let i = 0; i < emptyDaysAtStart; i++) {
      days.push({ day: null });
    }

    // Rellenar los días del mes
    for (let i = 1; i <= endDate.getUTCDate(); i++) {
      days.push({
        day: i,
        isHoliday: holidaysInMonth.Chile.concat(holidaysInMonth.Peru).some(
          (h) => {
            const date = new Date(h.date);
            return (
              date.getUTCDate() === i &&
              date.getUTCMonth() === month &&
              date.getUTCFullYear() === year
            );
          }
        ),
      });
    }

    // Rellenar días vacíos al final para completar la última fila
    const emptyDaysAtEnd = (7 - (days.length % 7)) % 7;
    for (let i = 0; i < emptyDaysAtEnd; i++) {
      days.push({ day: null });
    }

    return days;
  };

  const renderCalendar = () => {
    const months = Array.from({ length: 12 }, (_, i) => i);
    return (
      <div className="calendario-container">
        {months.map((month, i) => (
          <div className="calendario-box" key={i}>
            <div className="calendario-titulo">
              <h3>
                {capitalizeFirstLetter(
                  new Date(2024, month).toLocaleString("es-ES", {
                    month: "long",
                  })
                )}
              </h3>
            </div>
            <div className="calendario-dias h5">
              <h4>L</h4>
              <h4>M</h4>
              <h4>M</h4>
              <h4>J</h4>
              <h4>V</h4>
              <h4>S</h4>
              <h4>D</h4>
            </div>
            <div className="calendario-dias">
              {renderMonthDays(month, 2024).map(({ day, isHoliday }, i) =>
                isHoliday ? (
                  <h5
                    key={i}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={getHolidayClass(day, month, 2024)}
                    data-month={month}
                    data-year={2024}
                  >
                    {day}
                  </h5>
                ) : (
                  <h5 key={`${i}f`} className="hidden-day">
                    &nbsp;
                  </h5>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getHolidayClass = (day, month, year) => {
    const isHolidayInChile = feriados.Chile.some((h) => {
      const date = new Date(h.date);
      return (
        date.getUTCDate() === day &&
        date.getUTCMonth() === month &&
        date.getUTCFullYear() === year
      );
    });
    const isHolidayInPeru = feriados.Peru.some((h) => {
      const date = new Date(h.date);
      return (
        date.getUTCDate() === day &&
        date.getUTCMonth() === month &&
        date.getUTCFullYear() === year
      );
    });

    if (isHolidayInChile && isHolidayInPeru) return "ambos";
    if (isHolidayInChile) return "cl";
    if (isHolidayInPeru) return "pe";
    return "";
  };

  const renderLegend = () => (
    <div className="leyenda">
      <div>
        <span className="circle cl"></span> Chile
      </div>
      <div>
        <span className="circle pe"></span> Perú
      </div>
      <div>
        <span className="circle ambos"></span> Ambos
      </div>
    </div>
  );

  return (
    <CalendarWrapper>
      {renderLegend()}
      {renderCalendar()}
      {tooltip.visible && (
        <Tooltip
          content={tooltip.content}
          position={{ top: tooltip.top, left: tooltip.left }}
        />
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
