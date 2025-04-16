import React from 'react';
import Script from 'next/script';
import Image from 'next/image';

const CompanyPage = () => {
  <>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Student home page for Project Janus" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Company Home - Project Janus</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="globals.css" />
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
            <button className="btn btn-link" type="button" onClick={() => console.log('Logging out...')}>LOGOUT</button>
          </div>
        </div>
      </nav>

      <main className="container my-5">
        <div className="row mb-5">
          <div className="card p-3 shadow-sm profile-sidebar-content">
            <div className="d-flex align-items-center mb-4">
              <Image
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/
                free-company-logo-design-template-f02206903dcc70505736cca7fd9c5104_screen.jpg
                ?ts=1638867492"
                alt="Company logo"
                className="img-fluid rounded-circle me-3"
                style={{ width: '150px', height: '150px' }}
                width={150}
                height={150}
              />
              <div>
                <p className="mb-1 fw-bold">COMPANY NAME</p>
                <p className="mb-0">Location: Foo</p>
                <div className="card p-3 shadow-sm">
                  <h5>OVERVIEW</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card p-3 mt-4 shadow-sm text-center mx-auto">
            <h5>CAREERS FOR UH STUDENT/GRADS</h5>
            <div className="container" style={{ height: '300px', overflowY: 'auto' }}>
              <div className="row">
                <div className="container">
                  {[...Array(3)].map((_, index) => {
                    const uniqueKey = `row-${index}-${Math.random()}`;
                    return (
                      <div className="row" key={uniqueKey}>
                        <div className="col-md-6">
                          <div className="p-3 mt-4 shadow-sm">
                            <h5>POSITION</h5>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
            <button type="button" className="btn btn-link gray-link text-center">
              CONTACT US
            </button>
            <form className="mt-2">
              <input type="text" className="form-control mb-2" placeholder="Your message" />
              <button type="submit" className="btn btn-primary form-control">
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </body>
  </>;
};

export default CompanyPage;
