function Alert({ message, status }) {
  return (
    <div className={`alert alert-${status}`} role="alert">
      {message}
    </div>
  );
}

export default Alert;
