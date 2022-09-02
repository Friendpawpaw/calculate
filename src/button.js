function SymBtn({ value, onClick, className }) {
  return (
    <button className={className} value={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default SymBtn;
