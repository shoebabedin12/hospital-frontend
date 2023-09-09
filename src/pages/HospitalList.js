import React from "react";
import { Link } from "react-router-dom";

const HospitalList = () => {
  return (
    <>
      <div className="add-new-report">
        <div className="report-body">
          <h2 className="profile-heading">Hospital List</h2>
          <div className="data-table-filter admin">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-md-2  mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    Search Report
                  </label>
                  <div className="col-sm-12">
                    <input
                      id="by_name"
                      type="text"
                      className="form-control search"
                      id="h-name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-3 mb-md-2 mb-lg-5 row">
                  <label for="h-name" className="col-sm-12 col-form-label">
                    By Doctor
                  </label>
                  <div className="col-sm-12">
                    <select id="by_status" className="form-select custom_input">
                      <option value="all">Select One</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-1 mb-md-2 mb-lg-5 row">
                  <label
                    for="h-name"
                    className="col-12 col-form-label opacity-0"
                  >
                    By Status
                  </label>
                  <div className="col-12 d-flex justify-content-end img-ctrl-btn align-items-center mb-3">
                    <a
                      href="/admin/add_new_hospital_page"
                      className="btn plus add-more-btn "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="31"
                        height="32"
                        fill="none"
                        viewBox="0 0 31 32"
                      >
                        <path fill="url(#pattern0)" d="M0 0H31V32H0z"></path>
                        <defs>
                          <pattern
                            id="pattern0"
                            width="1"
                            height="1"
                            patternContentUnits="objectBoundingBox"
                          >
                            <use
                              transform="matrix(.00202 0 0 .00195 -.016 0)"
                              xlinkHref="#image0_1_1424"
                            ></use>
                          </pattern>
                          <image
                            id="image0_1_1424"
                            width="512"
                            height="512"
                            xlinkHref="data:image/png;base64,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"
                          ></image>
                        </defs>
                      </svg>
                      <span className="text-white"> ADD NEW </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* @foreach ($errors->all() as $error)
                <li style="list-style: none" className="alert alert-dark theme-alert">{{ $error }}</li>
            @endforeach

            @if (session('success'))
                <div className="alert alert-success">
                    {!! session('success') !!}
                </div>
            @endif

            @if (session('error'))
                <div className="alert alert-danger">
                    {!! session('error') !!}
                </div>
            @endif */}

          <table
            id="example"
            className="cell-border table-responsive w-100"
          >
            <thead className="">
              <tr>
                <th className="">
                  <span className="">User ID</span>
                </th>
                <th className="">
                  <span className="">User Name </span>
                </th>
                <th className="">
                  <span className="">Email</span>
                </th>
                <th className="">
                  <span className="">Phone</span>
                </th>
                <th className="">
                  <span className="">Status</span>
                </th>
                <th className="">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="User ID">
                  <p className="">01</p>
                </td>
                <td data-label="User Name">
                  <p className="">shoeb</p>
                </td>
                <td data-label="Email">
                  <p className="">shoeb@gmail.com</p>
                </td>
                <td data-label="Phone">
                  <p className="">+88010101001</p>
                </td>
                <td data-label="Status">
                  <p className="">Active</p>
                </td>
                <td>
                  <Link to="#">
                    <img src={require("./../assets/images/edit.png")} alt="" />
                  </Link>

                  <Link to="#">
                    <img src={require("./../assets/images/eye.png")} alt="" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HospitalList;
