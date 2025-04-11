const StudentHomePage = () => (
  <main className="container my-5">
    <div className="text-center mb-4">
      <h1>Welcome, Student Name!</h1>
      <p className="lead">Explore opportunities tailored to your skills and interests.</p>
    </div>
    <div className="row mb-5">
      <div className="col-md-6">
        <div className="card p-3 shadow-sm">
          <h5>Preferred Location</h5>
          <p>Honolulu</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card p-3 shadow-sm">
          <h5>Interested Skills</h5>
          <p>JavaScript, Python, UX Design</p>
        </div>
      </div>
    </div>
    <div className="mb-5">
      <h4>Suggested Companies</h4>
      <div className="list-group">
        <button type="button" className="list-group-item list-group-item-action">
          Company A - Frontend Internship
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Company B - Software Engineer Co-op
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Company C - UX Research Assistant
        </button>
      </div>
    </div>
    <div className="mb-5">
      <h4>Messages or Announcements</h4>
      <ul>
        <li>Company X is hiring!</li>
        <li>Your profile has been viewed 3 times this week.</li>
      </ul>
    </div>
    <div className="text-center">
      <button type="button" className="btn btn-success mx-2">Edit Profile</button>
      <button type="button" className="btn btn-outline-secondary mx-2">Saved Companies</button>
      <button type="button" className="btn btn-outline-dark mx-2">Browse All</button>
    </div>
  </main>
);

export default StudentHomePage;
