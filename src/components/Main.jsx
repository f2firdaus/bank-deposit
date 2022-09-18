import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuildingColumns,
  faCheck,
  faSackDollar,
    faGear,
    faCircle,
  faEnvelope,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

import Profile from "./Profile.png";
const Main = () => {
  return (
    <div className="main">
      <div className="left-side">
        <div className="profile">
          <img src={Profile} alt="profile" className="profile" />
          <h4 className="name">Firdaus Naseem</h4>
        </div>
        <div className="profile-details">
          <div className="details">
            <div className="home icon">
              <FontAwesomeIcon icon={faHouse} />
              <a href="/">Home</a>
            </div>

            <div className="deposit icon">
              <FontAwesomeIcon icon={faBuildingColumns} />
              <a href="/" className="home">
                Deposits
              </a>
            </div>
            <div className="other icon">
              <FontAwesomeIcon icon={faCheck} />
              <a href="/">Others</a>
            </div>
            <div className="payment icon">
              <FontAwesomeIcon icon={faSackDollar} />

              <a href="/">Payments</a>
            </div>

            <div className="setting icon">
              <FontAwesomeIcon icon={faGear} />

              <a href="/">Setting</a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="message">
          <FontAwesomeIcon className="fnicon" icon={faEnvelope} />
          <img src={Profile} alt="profile" className="profile1" />
        </div>
        <div className="active-deposite">
          <div className="inactive">
            <h4 className="active">Active Deposit</h4>
            <div className="two">
              <h4>2</h4>
            </div>
          </div>
          <FontAwesomeIcon className="circle" icon={faCirclePlus} />
        </div>
        <div className="funds">
          <div className="funduper">
            <table>
              <tr>
                <th>&nbsp;&nbsp; Property</th>
                <th>Move in date</th>
                <th>Rent</th>
                              <th>Deposit</th>
                              <th>Status</th>
                              
              </tr>
              <tr>
                <td>
                  <div class="div-img">
                    <img
                      src={Profile}
                      alt="profile"
                      className="img-1"
                      width="30px"
                    />
                    Firdaus Naseem
                  </div>
                </td>
                <td>19 September 2022</td>
                <td>$3000</td>
                <td>$9000</td>
                              <td>Awaiting Bank Processing</td>
                              <td className="td1">
                              <FontAwesomeIcon icon={faCircle}  />
                                  </td>
              </tr>

              <tr>
                <td>
                  <div class="div-img">
                    <img
                      src={Profile}
                      alt="profile"
                      className="img-1"
                      width="30px"
                    />
                    Firdaus Naseem
                  </div>
                </td>
                <td>19 September 2022</td>
                <td>$3000</td>
                              <td>$9000</td>
                              <td>Payment Processed</td>
                              <td className="td2">
                              <FontAwesomeIcon icon={faCircle}  />
                </td>
              </tr>
            </table>
            <div className="btn">
              <button className="btnactive btn1">All Active Deposite</button>
            </div>
          </div>
          <div className="funddown">
            <div className=" active1">
              <div className="inactive inactive1 ">
                <h4 className="active">Active Deposit</h4>
                <div className="two">
                  <h4>8</h4>
                </div>
              </div>
                      </div>
                      <table>
              <tr>
                <th>&nbsp;&nbsp; Property</th>
                <th>Move in date</th>
                <th>Rent</th>
                              <th>Deposit</th>
                              <th>Status</th>
              </tr>
              <tr>
                <td>
                  <div class="div-img">
                    <img
                      src={Profile}
                      alt="profile"
                      className="img-1"
                      width="30px"
                    />
                    Firdaus Naseem
                  </div>
                </td>
                <td>19 September 2022</td>
                <td>$3000</td>
                              <td>$9000</td>
                              <td>Awaiting Bank Processing</td>
                              <td className="td"><FontAwesomeIcon icon={faCircle}  />

                </td>
              </tr>

              <tr>
                <td>
                  <div class="div-img">
                    <img
                      src={Profile}
                      alt="profile"
                      className="img-1"
                      width="30px"
                    />
                    Firdaus Naseem
                  </div>
                </td>
                <td>19 September 2022</td>
                <td>$2000</td>
                              <td>$10000</td>
                              <td>Expired  Processing</td>
                              
                              <td className="td4">
                              <FontAwesomeIcon icon={faCircle}  />
                                  </td>

              </tr>
            </table>
            <div className="btn">
              <button className="btnactive">All Closed Deposite</button>
            </div>    
                      
                      
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
