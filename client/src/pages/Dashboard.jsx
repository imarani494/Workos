
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateCard from '../components/CandidateCard';
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/candidates');
        setCandidates(response.data);
      } catch (err) {
        console.error('Error fetching candidates:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/candidates/${id}/status`, { status: newStatus });
      setCandidates(candidates.map(candidate =>
        candidate._id === id ? { ...candidate, status: newStatus } : candidate
      ));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center my-4">Candidate Dashboard</h1>

      <SearchBar onSearch={setSearchTerm} />

      {loading ? (
        <div className="text-center text-secondary">Loading candidates...</div>
      ) : filteredCandidates.length === 0 ? (
        <div className="text-center text-secondary">No candidates found</div>
      ) : (
        <div className="row">
          {filteredCandidates.map(candidate => (
            <div key={candidate._id} className="col-md-4 mb-3">
              <CandidateCard candidate={candidate} onStatusUpdate={handleStatusUpdate} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
