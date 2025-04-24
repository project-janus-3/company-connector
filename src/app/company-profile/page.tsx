'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CompanyPage: React.FC = () => {
return (
    <>
      <main className="container my-5">
        <div className="row mb-5">
          <div className="col-auto">
            <Image
              src="/company-logo.jpg"
              alt="Company Logo"
              className="img-fluid rounded-circle me-3"
              width={150}
              height={150}
            />
          </div>
          <div className="col">
            <p className="mb-1 fw-bold">COMPANY NAME</p>
            <p className="mb-0">Location: Foo</p>
          </div>
        </div>

        <div className="card p-3 shadow-sm mb-5">
          <h5>OVERVIEW</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="card p-3 mt-4 shadow-sm text-center mx-auto">
          {[...Array(3)].map((_, i) => (
            <div className="row mb-4" key={`career-${i}`}>
              <div className="col-md-6">
                <div className="p-3 mt-4 shadow-sm border">
                  <h5>AVAILABILITY</h5>
                  <p>Full-Time / Internship</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 mt-4 shadow-sm border">
                  <h5>DETAILS</h5>
                  <p>Skill: React, Node.js</p>
                  <p>Salary: $60k+</p>
                  <div className="card mt-2">
                    <p className="p-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CompanyPage;
