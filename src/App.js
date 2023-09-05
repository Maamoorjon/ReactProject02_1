import Component from "./components/Component.js";

export default function App() {
  const hello = (arg) => `Hello ${arg}`;
  return (
    <>
      <Component
        num={123}
        fn={hello}
        bool
        userObj={{ familyName: "Halnazarov", firstName: "Ma'murjon" }}
      />
    </>
  );
}
