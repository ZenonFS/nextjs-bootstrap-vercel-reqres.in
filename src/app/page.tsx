import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  return data;
}

export default async function Home() {
  return (
    <main>
      <Users users={await fetchUsers()} />
    </main>
  );
}
