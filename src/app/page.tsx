import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to the Dashboard App</h1>
        <p>
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
