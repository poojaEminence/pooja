import axios from "axios";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserTable() {
  useEffect(() => {
    getData();
  }, []);
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/event/`);
    setAllData(res.data);
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:4000/event/${id}`)
      .then((res) => console.log(res.data));

    getData();
  };
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>company</th>
            <th>ticker</th>
            <th>timeElapsed</th>
            <th>stockPrice</th>
            <th>Actions</th>
          </tr>
        </thead>
        {allData &&
          allData
            .filter(
              (us) =>
                us.company.toLowerCase().includes(searchData.toLowerCase()) ||
                us.ticker.toLowerCase().includes(searchData.toLowerCase()) ||
                us.timeElapsed.toLowerCase().includes(searchData.toLowerCase())
            )
            .map((data) => (
              <tbody>
                <tr>
                  <td>{data.company}</td>
                  <td>{data.ticker}</td>
                  <td>{data.timeElapsed}</td>
                  <td>{data.stockPrice}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(data.id)}
                    >
                      delete
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => navigate(`/edit/${data.id}`)}
                    >
                      edit
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
      </Table>
    </>
  );
}

export default UserTable;
