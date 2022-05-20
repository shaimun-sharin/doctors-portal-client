import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl"> All doctors:{doctors.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                refetch={refetch}
                index={index}
                setDeleteDoctor={setDeleteDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <DeleteModal
          deleteDoctor={deleteDoctor}
          refetch={refetch}
          setDeleteDoctor={setDeleteDoctor}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageDoctors;
