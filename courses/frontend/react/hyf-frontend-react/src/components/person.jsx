
function Person() {
  const name = "Sara";
  const age = 36;

  return (
    <p>
      {age >= 18 ? `${name} is an adult` : `${name} is a minor`}
    </p>
  );
}

export default Person;