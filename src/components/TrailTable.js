import React from "react";
import { Link } from "react-router-dom";

const TrailTable = ({ trailData }) => {
  return (
    <div>
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


          {trailData ?
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
              <td>{trail.price === 0 ? "Free" : `$${trail.price}`}</td>
            </tr>
          )) :

          <p>No results found!</p>
          
          
          }



        </tbody>
      </table>
    </div>
  );
};

export default TrailTable;
