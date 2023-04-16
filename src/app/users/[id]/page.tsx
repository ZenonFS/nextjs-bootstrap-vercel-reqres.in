import { User } from "@/utils/interfaces";
import React from "react";

async function getUser(id: number) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();
  return data;
}

interface IProps {
  params: any;
}

async function Users({ params }: IProps) {
  const { id, avatar, email, first_name, last_name }: User = await getUser(
    params.id
  );
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={avatar} alt={email} />
          </div>
          <div className="card-body text-center">
            <h3>
              {id} {first_name} {last_name}{" "}
            </h3>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
