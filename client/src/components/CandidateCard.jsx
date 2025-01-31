
import React from 'react';

const CandidateCard = ({ candidate, onStatusUpdate }) => {
  const statusColors = {
    Pending: 'bg-warning',
    Reviewed: 'bg-primary',
    Hired: 'bg-success'
  };

  return (
    <div className="card mb-3 card-hover">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h3 className="h5 card-title mb-1">{candidate.name}</h3>
            <p className="card-subtitle text-muted mb-2">{candidate.jobTitle}</p>
            <span className={`badge ${statusColors[candidate.status]} status-badge`}>
              {candidate.status}
            </span>
          </div>
          <select 
            value={candidate.status}
            onChange={(e) => onStatusUpdate(candidate._id, e.target.value)}
            className="form-select form-select-sm"
          >
            <option value="Pending">Pending</option>
            <option value="Reviewed">Reviewed</option>
            <option value="Hired">Hired</option>
          </select>
        </div>
        {candidate.resumeUrl && (
          <a 
            href={`http://localhost:5000/${candidate.resumeUrl}`} 
            className="btn btn-link btn-sm mt-3 p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;