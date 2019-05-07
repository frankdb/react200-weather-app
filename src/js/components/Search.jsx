import React from 'react'

export default function Search() {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div className="form-group">
        <input type="email" className="form-control" id="searchForm" placeholder="Enter city" />
        <button className="btn btn-primary">Get Weather</button>
      </div>
    </div>
  )
}
