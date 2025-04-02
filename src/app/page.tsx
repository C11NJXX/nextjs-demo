import Link from "next/link";

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Welcome to the Dashboard App</h1>
          <p className="py-6">
            Manage your tasks, track analytics, and stay organized with our
            powerful dashboard.
          </p>
          <Link href="/dashboard" className="btn btn-primary rounded-2xl">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
