import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import s from './PlanetsData.module.scss';

const getPlanets = axios.create({
  baseURL: 'https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json',
});

const PlanetsData = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPlanets.get().then((res) => {
      setPlanets(res['data']);
      setIsLoading(false);
    });
  }, []);

  const sorted = planets.sort((a, b) => {
    return a.releasedate.localeCompare(b.releasedate);
  });
  const map = sorted.map((e) => {
    return (
      <tr key={sorted.indexOf(e)}>
        <td>{e.pl_name}</td>
        <td>{e.releasedate}</td>
        <td>{e.pl_rade}</td>
      </tr>
    );
  });

  return (
    <div className={s.container}>
      <table className={s.table_container}>
        <thead className={s.table_head}>
          <tr>
            <th>
              <h5>Planet Name</h5>
            </th>
            <th>
              <h5>Planet Date</h5>
            </th>
            <th>
              <h5>Planet Radius</h5>
            </th>
          </tr>
        </thead>
        <tbody className={s.table_body}>{map}</tbody>
      </table>
    </div>
  );
};

export default PlanetsData;
