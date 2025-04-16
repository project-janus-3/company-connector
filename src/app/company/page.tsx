import Image from 'next/image';

const CompanyProfile = async () => (
  <main className="container my-5">
    <div className="row mb-5">
      <div className="card p-3 shadow-sm profile-sidebar-content">
        <div className="d-flex align-items-center mb-4">
          <Image
            src={
              'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/'
              + 'free-company-logo-design-template-f02206903dcc70505736cca7fd9c5104_screen.jpg?ts=1638867492'
            }
            alt="Company logo"
            className="img-fluid rounded-circle me-3"
            width={150}
            height={150}
          />
          <div>
            <p className="mb-1 fw-bold">COMPANY NAME</p>
            <p className="mb-0">Location: Foo</p>
            <div className="card p-3 shadow-sm">
              <h5>OVERVIEW</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default CompanyProfile;
