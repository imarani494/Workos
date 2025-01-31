// ReferralPage.jsx
import React from 'react';
import ReferralForm from '../components/ReferralForm';

const ReferralPage = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Refer a New Candidate</h1>
      <ReferralForm />
    </div>
  );
};

export default ReferralPage;
