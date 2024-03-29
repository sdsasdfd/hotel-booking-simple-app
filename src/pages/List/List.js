import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import "./List.css";

import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lOptionText">
                  Min Price <small>per night</small>
                </span>
                <input className="lsOptionInput" type="number" />
              </div>
              <div className="lsOptionItem">
                <span className="lOptionText">
                  Max Price <small>per night</small>
                </span>
                <input className="lsOptionInput" type="number" />
              </div>
              <div className="lsOptionItem">
                <span className="lOptionText">Adult</span>
                <input
                  placeholder={options.adult}
                  min={1}
                  className="lsOptionInput"
                  type="number"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lOptionText">Children</span>
                <input
                  min={0}
                  placeholder={options.children}
                  className="lsOptionInput"
                  type="number"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lOptionText">Room</span>
                <input
                  min={1}
                  placeholder={options.room}
                  className="lsOptionInput"
                  type="number"
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
