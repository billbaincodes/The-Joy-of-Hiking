import React from "react";
import { Link } from "react-router-dom";

const TrailTable = ({ trailData }) => {
  return (
    <div>
      I am the trail table
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Park</th>
            <th scope="col">Trailhead</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>


          {
            trailData ?
            
            trailData.map(trail => (
            <tr>
              <td>
                <Link
                  to={{ pathname: `/card`, state: { trailData: trail } }}
                >
                  {trail.name}
                </Link>
              </td>

              <td>{trail.park_id}</td>
              <td>{trail.trailhead_id}</td>
              <td>{trail.price}</td>
            </tr>
          )) :

          <p>no results found!</p>
          
          
          }



        </tbody>
      </table>
    </div>
  );
};

export default TrailTable;
