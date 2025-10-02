import React from 'react';

async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return <div>Home</div>;
}

export default Home;
