import React from 'react';
import Image from 'next/image';

const CompanyPage = () => (
  <>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Student home page for Project Janus" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Company Home - Project Janus</title>
    </head>
    <body>
      <nav className="navbar navbar-expand-sm navbar-light mt-4">
        <h1 className="name position-absolute start-0 px-5" style={{ fontSize: '10px' }}>
          Project Janus
        </h1>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center gap-5 w-100" style={{ fontSize: '20px' }}>
            <a href="/home">HOME</a>
            <a href="/profile">PROFILE</a>
            <a href="/browse">BROWSE</a>
          </div>
          <div className="position-absolute end-0 px-5">
            <a href="/logout">LOGOUT</a>
          </div>
        </div>
      </nav>

      <main className="container my-5">
<div className="row mb-5">
<Image
  src="/company-logo.jpg"
  alt="Company Logo"
  className="img-fluid rounded-circle me-3"
  width={150}
  height={150}
/>
<div>
  <p className="mb-1 fw-bold">COMPANY NAME</p>
  <p className="mb-0">Location: Foo</p>
</div>
<div className="card p-3 shadow-sm">
  <h5>OVERVIEW</h5>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </p>
</div>
</div>

<div className="row">
</div>
<div className="card p-3 mt-4 shadow-sm text-center mx-auto">
<div className="row" key={`career-${crypto.randomUUID()}`}>
<div className="row" key={`career-${Math.random().toString(36).slice(2, 11)}`}>
{[...Array(3)].map(() => (
<div className="row" key={`career-${Math.random().toString(36).substr(2, 9)}`}>
  <div className="col-md-6">
    <div className="p-3 mt-4 shadow-sm">
<div className="row" key={`career-${Math.random().toString(36).slice(2, 11)}`}>
    </div>
  </div>
  <div className="col-md-6">
    <div className="p-3 mt-4 shadow-sm">
      <h5>AVAILABILITY</h5>
    </div>
  </div>
  <div className="col-5">SKILL</div>
  <div className="col-5">SALARY</div>
  <div className="row">
      <div className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </div>
  </div>
  </div>
</div>
))}
</div>
</div>
</div>
</main>
</body>

<footer className="navbar navbar-expand-sm navbar-light mt-4 fixed-bottom bg-light">
<div className="container d-flex justify-content-between align-items-center">
<div className="link">
<a
href="https://project-janus-3.github.io/project-janus.github.io/"
className="gray-link"
target="_blank"
rel="noopener noreferrer"
>
https://project-janus-3.github.io/project-janus.github.io/
</a>
</div>
<div className="text-end row">
<a href="/contact" className="gray-link text-center">
CONTACT US
</a>
<form className="mt-2">
<input type="text" className="form-control mb-2" placeholder="Your message" />
<button type="submit" className="btn btn-primary form-control">
Send
</button>
</form>
</div>
</div>
</footer>
</>
);
export default CompanyPage;
