function Input({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  );
}
export default Input;
