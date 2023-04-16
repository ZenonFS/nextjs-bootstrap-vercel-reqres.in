"use client";
import { User } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  users: User[];
}

function Users({ users }: IProps) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map(({ id, avatar, email, first_name, last_name }: User) => (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          onClick={() => {
            router.push(`/users/${id}`);
          }}
        >
          <div>
            <h5>
              {id} {first_name} {last_name}
            </h5>
            <p>{email}</p>
          </div>
          <img src={avatar} alt={email} style={{ borderRadius: "50%" }} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
