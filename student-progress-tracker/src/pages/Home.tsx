import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the Student Progress Tracker</h1>
        <p>
          This application helps you track student progress across years and teachers.
          Use the navigation above to explore student and teacher information.
        </p>
        <p>
          You can view detailed progress reports, attendance records, and more.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;